# @paul-browne/vite

A fork of [Vite](https://github.com/vitejs/vite) that adds a `displayName` config option, so tools built on Vite can show their own name in CLI banners, log prefixes and the browser console instead of "vite" ([vitejs/vite#23175](https://github.com/vitejs/vite/issues/23175), [vitejs/vite#23695](https://github.com/vitejs/vite/pull/23695)). Versions match the upstream Vite release they are based on.

Install it under the `vite` name so plugins and `import ... from 'vite'` keep working:

```sh
npm i -D vite@npm:@paul-browne/vite
```

```js
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({ displayName: 'my-tool' })
```

The original Vite README follows.

---

# Vite ⚡

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

Vite (French word for "quick", pronounced [`/viːt/`](https://cdn.jsdelivr.net/gh/vitejs/vite@main/docs/public/vite.mp3), like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

- A dev server that provides [rich feature enhancements](https://vite.dev/guide/features) over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), for example extremely fast [Hot Module Replacement (HMR)](https://vite.dev/guide/features#hot-module-replacement).

- A build command that bundles your code with [Rolldown](https://rolldown.rs), pre-configured to output highly optimized static assets for production.

In addition, Vite is highly extensible via its [Plugin API](https://vite.dev/guide/api-plugin.html) and [JavaScript API](https://vite.dev/guide/api-javascript.html) with full typing support.

[Read the Docs to Learn More](https://vite.dev).
