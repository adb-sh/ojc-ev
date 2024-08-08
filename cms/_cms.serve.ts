import serve from "lume/cms/server/proxy.ts";

export default serve({
  serve: "_cms.lume.ts",
  git: true,
  // auth: {
  //   method: "basic",
  //   users: {
  //     "${user}": "${pass}"
  //   }
  // },
  // env: {
  //   LUME_LOGS: "error",
  // }
});
