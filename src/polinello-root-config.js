import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@polinello/spa-demo-header",
  app: () => System.import("@polinello/spa-demo-header"),
  activeWhen: isActive.header,
  customProps: { domElement: document.getElementById("header-container") }
});

registerApplication({
  name: "@polinello/spa-demo-home",
  app: () => System.import("@polinello/spa-demo-home"),
  activeWhen: isActive.home,
  customProps: { domElement: document.getElementById("home-container") }
});

registerApplication({
  name: "@polinello/spa-demo-test-page",
  app: () => System.import("@polinello/spa-demo-test-page"),
  activeWhen: isActive.testPage,
  customProps: { domElement: document.getElementById("testPage-container") }
});

// registerApplication({
//   name: "@polinello/navbar",
//   app: () => System.import("@polinello/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true
});
