import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import {
  createJavaScriptRawEngine,
  createJavaScriptRegexEngine,
} from "shiki/engine/javascript";

const onigurumaEngine = createOnigurumaEngine(import("shiki/wasm"));
const javascriptRegexEngine = createJavaScriptRegexEngine();
const javascriptRawEngine = createJavaScriptRawEngine();

const highlighter = await createHighlighterCore({
  // engine: javascriptRawEngine,
  engine: onigurumaEngine,
  themes: [
    import("@shikijs/themes/one-dark-pro"),
    import("@shikijs/themes/nord"),
  ],
  langs: [
    import("@shikijs/langs/javascript"),
    // import("@shikijs/langs-precompiled/javascript"),
  ],
});

const code = highlighter.codeToHtml("const a = 1", {
  theme: "one-dark-pro",
  lang: "javascript",
});
console.log(code);
