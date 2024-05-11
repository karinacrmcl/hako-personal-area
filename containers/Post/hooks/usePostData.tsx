// @ts-nocheck
import React from "react";
import { Category } from "../../../context/post-editor/PostEditorContext";

type Photo = {
  previewSrc?: string;
  originalSrc: string;
  id: number;
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

function transformStringToReactComponents(
  inputString: string
): ReactComponents {
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

  const components: ReactComponents = {
    heading: generateComponents(
      data.filter((element) => element.type === "heading-one")
    ),
    paragraph: generateComponents(
      data.filter((element) => element.type === "paragraph")
    ),
  };

  return components;
}

const renderSvg = (rawData, svg) => {
  // Parse rawData JSON string
  const data = JSON.parse(rawData);

  // Parse SVG string into a React component
  const SvgComponent = () => <div dangerouslySetInnerHTML={{ __html: svg }} />;

  // Render the data as SVG elements
  const svgElements = data.map((item, index) => {
    if (item.type === "freedraw") {
      return (
        <path
          key={index}
          d={`M ${item.points.map((point) => point.join(",")).join(" L ")}`}
          fill={item.backgroundColor}
          stroke={item.strokeColor}
          strokeWidth={item.strokeWidth}
          strokeLinecap="round"
        />
      );
    }
    // Add more cases for other types if needed
    return null;
  });

  // Return the rendered SVG elements wrapped in the SVG component
  return <SvgComponent>{svgElements}</SvgComponent>;
};

// TODO: fix type
export default function usePostData(post: any) {
  const category = getCategory(post.postCategory);
  const components = transformStringToReactComponents(post.content);
  const gallery: Photo[] = post.photos.map((p, i) => ({
    previewSrc: p,
    originalSrc: p,
    id: `${p}${i}`,
  }));

  const drawing = post?.drawing?.rawData
    ? renderSvg(post.drawing.rawData, post.drawing.svg)
    : null;

  const date = post.dateCreated?.format("MMM DD, TTTT");

  return { category, components, gallery, drawing, date };
}
