export default ({ title, children, ...props }) => (
  <html lang="de">
    <head>
      <title>
        {title ? `${title} - ${props.site.title}` : props.site.title}
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={props.site.title} />
      <meta name="publisher" content={props.site.title} />
      <meta
        name="description"
        content={props.excerpt ? props.excerpt : props.site.description}
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="stylesheet" href="/code.css" />
      <link rel="stylesheet" href="/main.css" />
      <link rel="stylesheet" href="/fonts.css" />
      {/* <script src='https://cdn.jsdelivr.net/npm/ical.js/dist/ical.min.js'></script>
      <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/index.global.min.js'></script>
      <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.15/index.global.min.js'></script>
      <script src='https://cdn.jsdelivr.net/npm/@fullcalendar/icalendar@6.1.15/index.global.min.js'></script> */}
      <script type="module" src="/main.js" />
      {
        /* <link
        rel="stylesheet"
        type="text/css"
        href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/light/style.css"
      /> */
      }
      {
        /* <link rel="stylesheet" href="/daisyui.css" />
      <link rel="stylesheet" href="/themes.css" /> */
      }
    </head>
    <body
      class="bg-body text-text flex flex-col justify-between min-h-screen relative"
      data-theme="synthwave"
    >
      <div>
        <props.comp.Header {...props} />

        <main class="content mt-24">
          {children}
        </main>
      </div>
      <props.comp.Footer {...props} />
    </body>
  </html>
);
