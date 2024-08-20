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
  {
    name: "blog",
    label: "show on news page",
    type: "checkbox",
    attributes: {
      checked: "checked",
    }
  },
  {
    name: "date",
    type: "date",
    mode: "create",
  },
  "imgUrl: file",
  "excerpt: text",
  "content: markdown",
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
