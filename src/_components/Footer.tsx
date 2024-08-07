export default ({ search, site }) => (
  <footer class="bg-accent dark:bg-secondary-dark">
    <div class="container mx-auto text-white px-8 py-4">
      <span class="copyright">
        {new Date().getFullYear()} - {site.title}
      </span>
      <span>
        {search.pages("menu.footer=true").map((page) => (
          <a href={page.url} class="underline mx-2">
            {page.title}
          </a>
        ))}
      </span>
    </div>
  </footer>
);
