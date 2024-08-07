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
  "date: datetime",
  "imgUrl: file",
  "excerpt: text",
  "content: markdown",
  {
    name: "blog",
    type: "hidden",
    value: true,
  },
]);

export default cms;
