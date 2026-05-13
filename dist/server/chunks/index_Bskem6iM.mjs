globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_CLD8GBpU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_BVa5NBgG.mjs";
import { $ as $$BaseLayout } from "./BaseLayout_x0fZCIIG.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home - B2B Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome to our B2B Platform</h1> <p>We are building something great...</p> ` })}`;
}, "C:/Users/Jack Hu/Desktop/b2b-website-manual/src/pages/en/index.astro", void 0);
const $$file = "C:/Users/Jack Hu/Desktop/b2b-website-manual/src/pages/en/index.astro";
const $$url = "/en";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
