globalThis.process ??= {};
globalThis.process.env ??= {};
import { c as createComponent } from "./astro-component_CLD8GBpU.mjs";
import { g as addAttribute, o as renderHead, p as renderSlot, r as renderTemplate } from "./worker-entry_BVa5NBgG.mjs";
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "B2B外贸网站", description = "专业B2B外贸服务平台" } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const currentLang = currentPath.split("/")[1] || "en";
  return renderTemplate`<html${addAttribute(currentLang === "zh" ? "zh-CN" : currentLang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderHead()}</head> <body> <header> <nav> <a href="/en">Home</a> <a href="/zh">首页</a> <a href="/es">Español</a> <a href="/ar">العربية</a> <span style="margin-left: auto;"> <a href="/en/products">Products</a> <a href="/en/about">About</a> <a href="/en/contact">Contact</a> <a href="/en/login">Login</a> <a href="/en/register">Register</a> </span> </nav> </header> <main> ${renderSlot($$result, $$slots["default"])} </main> <footer> <p>&copy; 2025 B2B外贸网站 | <a href="/en/sitemap.xml">Sitemap</a></p> </footer> </body></html>`;
}, "C:/Users/Jack Hu/Desktop/b2b-website-manual/src/layouts/BaseLayout.astro", void 0);
export {
  $$BaseLayout as $
};
