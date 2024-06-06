import React, { ReactNode, useState } from "react";
import { Category, PostObject } from "../../../@types/common/PostContent";
import { useUser } from "../../../context/user/UserContext";
import usePublication from "../../../hooks/api/usePublication";
import { getUserById } from "../../../api/user";

type Photo = {
  previewSrc?: string;
  originalSrc: string;
  id: number;
};

type Point = {
  point: string[];
};

type FreeDrawItem = {
  type: "freedraw";
  points: Point[];
  backgroundColor: string;
  strokeColor: string;
  strokeWidth: string;
};

type ElementType = {
  type: string;
  children: { text: string }[];
};

const getCategory = (c: Category) => {
  switch (c) {
    case "article":
      return "Article";
    case "news":
      return "News";
    case "discussion":
      return "Discussion";
    case "photo":
      return "Photo";
    case "book":
      return "Book";
    default:
      return "Article";
  }
};

function transformStringToReactComponents(inputString: string) {
  const data: ElementType[] = JSON.parse(inputString);

  const generateComponents = (elements: ElementType[]): ReactNode => {
    return elements.map((element, index) => {
      switch (element.type) {
        case "heading-one":
          const headingChildren = generateFormattedTexts(element.children);
          return <h1 key={index}>{headingChildren}</h1>;
        case "paragraph":
          const paragraphChildren = generateFormattedTexts(element.children);
          return <p key={index}>{paragraphChildren}</p>;
        default:
          return null;
      }
    });
  };

  type FormattedText = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  };

  const generateFormattedTexts = (texts: FormattedText[]): ReactNode => {
    return texts.map((text, index) => {
      let formattedText: ReactNode = text.text;
      if (text.bold) {
        formattedText = <strong>{formattedText}</strong>;
      }
      if (text.italic) {
        formattedText = <em>{formattedText}</em>;
      }
      if (text.underline) {
        formattedText = <u>{formattedText}</u>;
      }
      return formattedText;
    });
  };

  const components = {
    heading: generateComponents(
      data.filter((element) => element.type === "heading-one")
    ),
    paragraph: generateComponents(
      data.filter((element) => element.type === "paragraph")
    ),
  };

  return components;
}

const renderSvg = (rawData: string, svg: string) => {
  // Parse rawData JSON string
  // const data = JSON.parse(rawData);

  // Parse SVG string into a React component
  const SvgComponent = () => <div dangerouslySetInnerHTML={{ __html: svg }} />;

  // Render the data as SVG elements
  /*  const svgElements = data.map((item: FreeDrawItem, index: number) => {
    if (item.type === "freedraw") {
      return (
        <path
          key={index}
          d={`M ${item.points
            .map((point: Point) => point?.point?.join(","))
            .join(" L ")}`}
          fill={item.backgroundColor}
          stroke={item.strokeColor}
          strokeWidth={item.strokeWidth}
          strokeLinecap="round"
        />
      );
    }
    // Add more cases for other types if needed
    return null;
  }); */

  return <SvgComponent />;
};

// TODO: fix type
export default function usePostData(post: PostObject) {
  const { user } = useUser();
  const { comments } = usePublication(post.id);
  const category = getCategory(post.postCategory);
  const components = transformStringToReactComponents(post.content);
  const gallery: Photo[] = post.photos.map((p, id) => ({
    previewSrc: p || "",
    originalSrc: p || "",
    id,
  }));

  const [commentsOpen, setCommentsOpen] = useState(false);
  const drawing = post?.drawing?.rawData
    ? renderSvg(post.drawing.rawData, post.drawing.svg || "")
    : null;

  const date = post.dateCreated;
  const updated = `Updated ${post.updated}`;

  const isLiked = post.liked?.includes(user?.userID);
  const isPinned = post.pinned?.includes(user?.userID);

  const commentsCount = comments?.length;

  const handleOpenComment = () => {
    setCommentsOpen((p) => !p);
  };

  const author = getUserById(post.userID);

  return {
    category,
    components,
    gallery,
    drawing,
    date,
    updated,
    isLiked,
    isPinned,
    commentsOpen,
    handleOpenComment,
    commentsCount,
    comments,
    author,
  };
}
