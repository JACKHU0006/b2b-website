globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_CLD8GBpU.mjs";
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from "./worker-entry_BVa5NBgG.mjs";
import { r as renderScript } from "./script_DnhNsXkA.mjs";
import { $ as $$BaseLayout } from "./BaseLayout_x0fZCIIG.mjs";
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Register - B2B Website" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Register</h1> <form id="register-form"> <input type="email" id="email" placeholder="Email" required> <input type="password" id="password" placeholder="Password" required> <button type="submit">Register</button> </form> <p>Already have an account? <a href="/en/login">Login</a></p> ${renderScript($$result2, "C:/Users/Jack Hu/Desktop/b2b-website-manual/src/pages/en/register.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/Jack Hu/Desktop/b2b-website-manual/src/pages/en/register.astro", void 0);
const $$file = "C:/Users/Jack Hu/Desktop/b2b-website-manual/src/pages/en/register.astro";
const $$url = "/en/register";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
