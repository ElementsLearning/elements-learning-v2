import { Blog, BulletType, HeaderType, ImageType, ParagraphType, TableType } from "./blog";
import { dinosaurExtinction } from "./dinosaurExtinction";
import { greatDivide } from "./greatDivide";
import { reggioEmilia } from "./reggioEmilia";
import { sciencePopularizers } from "./sciencePopularizers";

export const defaultBlog: Blog = {
  id: "",
  author: "",
  date: "",
  title: "",
  summary: "",
  content: [],
}

export const defaultParagraph: ParagraphType = {
  type: "PARAGRAPH",
  alignment: "LEFT",
  text: "This is a paragraph",
  size: "BASE",
  weight: "NORMAL",
  style: "NONE",
}
export const defaultTable: TableType = {
  type: "TABLE",
  headers: ["Column 1", "Column 2", "Column 3"],
  rows: [
    ["Cell 1", "Cell 2", "Cell 3"],
    ["Cell 4", "Cell 5", "Cell 6"],
  ],
  headerStyle: {
    alignment: "CENTER",
    size: "BASE",
    weight: "BOLD",
    style: "NONE",
  },
  cellStyle: {
    alignment: "LEFT",
    size: "BASE",
    weight: "NORMAL",
    style: "NONE",
  }
}

export const defaultHeader: HeaderType = {
  type: "HEADER",
  alignment: "LEFT",
  text: "This is a header",
  size: "BASE",
  weight: "BOLD",
  style: "NONE",
}

export const defaultBullets: BulletType = {
  type: "BULLET",
  pointStyle: {
    alignment: "LEFT",
    size: "BASE",
    weight: "NORMAL",
    style: "NONE",
  },
  style: "DISCS",
  points: [],
}

export const defaultImage: ImageType = {
  type: "IMAGE",
  src: "",
}

export const allBlogs: Blog[] = [
  dinosaurExtinction,
  sciencePopularizers,
  reggioEmilia,
  greatDivide
  // solarSystem,
]