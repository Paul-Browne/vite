import type { Plugin } from 'rolldown'
import pkg from './package.json' with { type: 'json' }

/**
 * The bundles import `vite/module-runner` from this same package. When it is
 * published under another name (e.g. `@paul-browne/vite`), point those imports
 * at that name so they self-resolve instead of reaching an unrelated `vite`.
 */
export function rewriteSelfImportsPlugin(): Plugin {
  return {
    name: 'rewrite-self-imports',
    renderChunk(code) {
      if (pkg.name === 'vite') return null
      const replaced = code.replace(
        /(["'])vite\/module-runner\1/g,
        `$1${pkg.name}/module-runner$1`,
      )
      return replaced === code ? null : { code: replaced, map: null }
    },
  }
}
