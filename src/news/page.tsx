export const layout = "Blogpage.mdx";

export default function* ({ search, paginate }) {
  const posts = search.pages("blog=true", "date=desc");
  const options = {
    url: (n) => `./page/${n}/`,
    size: 8,
  };

  for (const page of paginate(posts, options)) {
    yield page;
  }
}
