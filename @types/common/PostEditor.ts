export type EditorValueType = {
  type: string;
  children: {
    text: string;
    underline?: boolean;
    bold?: boolean;
    italic?: boolean;
  }[];
}[];
