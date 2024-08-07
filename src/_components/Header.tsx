export default ({ ...props }) => (
  <>
    <header class="sticky top-0 backdrop-blur bg-accent/50 dark:bg-primary-dark/75 z-50">
      <div class="container overflow-auto mx-auto px-4">
        <nav class="flex w-full justify-between">
          <a class="flex items-center" href="/">
            <img src="/logo/ojc-logo-favicon.png" alt="logo" class="m-3 h-12" />
            <p class="text-xl font-medium hidden lg:block">Offener Jugendring Coswig</p>
          </a>
          <ul class="flex items-center">
            <props.comp.HeaderMenuItems {...props} />
          </ul>
        </nav>
      </div>
    </header>
  </>
);
