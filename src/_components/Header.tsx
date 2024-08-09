export default ({ ...props }) => (
  <>
    {/* <header class="sticky top-0 backdrop-blur bg-accent/50 dark:bg-primary-dark/75 z-50">
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
    </header> */}
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col p-4 fixed w-full top-0 z-10">
        <header class="navbar backdrop-blur-md bg-accent/50 shadow-xl">
          <div class="navbar-start">
            <div class="flex-none lg:hidden">
              <label
                for="my-drawer-3"
                aria-label="open sidebar"
                class="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
            </div>
            <a class="btn btn-ghost text-xl" href="/">
              <img src="/logo/ojc-logo-favicon.png" class="h-full py-2" />
              <p class="text-xl font-medium hidden md:block">Offener Jugendring Coswig</p>
              <p class="text-xl font-medium md:hidden">OJC e.V.</p>
            </a>
          </div>

          <ul class="navbar-end hidden lg:flex gap-2">
            <props.comp.HeaderMenuItems {...props} />
          </ul>
        </header>
        {/* Content */}
      </div>
      <div class="drawer-side z-20">
        <label
          for="my-drawer-3"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <nav class="menu p-4 w-80 min-h-full bg-base-200">
          <ul>
            <li>
              <a class="btn btn-ghost" href="/">
                <img src="/logo/ojc-logo-favicon.png" class="h-12 py-2" />
                <p>Offener Jugendring Coswig</p>
              </a>
              <props.comp.HeaderMenuItems {...props} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);
