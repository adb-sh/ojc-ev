const pages = [
  {
    data: {
      url: "/news/page/1/",
      title: "News",
    },
  },
  {
    data: {
      url: "/kalender/",
      title: "Kalender",
    },
  },
  {
    data: {
      url: "/verein/",
      title: "Verein",
    },
  },
  {
    data: {
      url: "/satzung/",
      title: "Satzung",
    },
  },
  {
    data: {
      url: "/mitglied-werden/",
      title: "Fördermitglied werden",
    },
  },
  {
    data: {
      url: "/kontakt/",
      title: "Kontakt",
    },
  },
];

export default ({ search, ...props }) => (
  <>
    {[
      // ...search.pages("menu.header=true"),
      ...pages,
    ].map((page) => {
      const subpages = search.pages(
        `menu.header[${page.data.slug}]`,
        "date=desc"
      );
      if (subpages.length > 0) {
        return (
          <li class="category dropdown">
            <div
              class="btn btn-outline-dark btn-shadow m-2 dropdown-label"
              tabindex="0"
            >
              {page.data.title}
            </div>
            <div class="block dropdown-menu btn-outline-dark p-0 mx-2">
              {subpages.map((subpage) => (
                <a class="block dropdown-item" href={subpage.data.url}>
                  {subpage.data.title}
                </a>
              ))}
            </div>
          </li>
        );
      } else {
        return (
          <li>
            <a href={page.data.url} class="btn btn-ghost">{page.data.title}</a>
          </li>
        );
      }
    })}
  </>
);
