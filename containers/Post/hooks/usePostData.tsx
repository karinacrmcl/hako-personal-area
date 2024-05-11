// @ts-nocheck
import React from "react";
import { Category } from "../../../context/post-editor/PostEditorContext";

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

// TODO: fix type
export default function usePostData(post: any) {
  const category = getCategory(post.postCategory);
  const components = transformStringToReactComponents(post.content);

  return { category, components };
}
