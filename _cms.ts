import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.upload("images", "src:media/images");

cms.collection("news", "src:news/*.md", [
  {
    name: "layout",
    type: "hidden",
    value: "Default.tsx",
  },
  "title: text",
  "date: date",
  "imgUrl: file",
  "excerpt: text",
  "content: markdown",
  {
    name: "blog",
    type: "hidden",
    value: true,
  },
]);

cms.collection("pages", "src:./*.md", [
  {
    name: "layout",
    type: "hidden",
    value: "Default.tsx",
  },
  "title: text",
  "content: markdown",
]);

export default cms;
