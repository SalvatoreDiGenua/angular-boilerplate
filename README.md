# Angular Boilerplate ⚡

Personal Angular starter for building new applications from a consistent, modern foundation.

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)

> 🚀 **A reusable foundation for new Angular applications — and a living showcase of modern Angular.**
>
> ### ▶️ Try it live
>
> [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/SalvatoreDiGenua/angular-boilerplate/tree/feature/demo-stackblitz?startScript=start&title=Angular%20Boilerplate)
>
> No local setup required. Open the project in StackBlitz and explore the running Angular application directly in your browser.

## 🎯 What this project is for

Starting an Angular application often means repeating the same infrastructure decisions: application structure, HTTP configuration, authentication boundaries, internationalization, SEO, rendering, testing, formatting and accessibility.

This repository makes those decisions once and keeps them reusable across projects.

It has a second purpose: the home page is an **interactive Angular showcase**. Instead of listing framework features as static prose, it demonstrates how current Angular APIs fit together in a standalone, signal-based, SSR application.

> 💡 **The rule:** the boilerplate provides infrastructure, not fake business logic. Fork it, keep the foundations you need, and build the domain under `features/`.

## ✨ What the showcase demonstrates

The home page is a single scrolling experience. Each section introduces a capability and, where useful, demonstrates it with working UI.

| Area | What you can see |
| --- | --- |
| ⚡ Signals | `signal()`, `computed()`, `linkedSignal()`, `resource()`, `httpResource()` |
| 💤 Deferrable views | `@defer`, placeholders, loading states and deferred components |
| 💧 Hydration | SSR, client hydration, event replay and incremental hydration |
| 📝 Signal Forms | signal models, `form()`, field state and validation |
| 💉 Dependency injection | `@Service()`, `@Injectable()` and `inject()` |
| 🌐 i18n | Italian/English translations with Transloco |
| 🔎 SEO | title, description, robots, canonical and Open Graph metadata |
| 🎨 UI | Tailwind CSS 4, responsive layout and accessible interactions |
| 🧪 Quality | Vitest, ESLint, Prettier and Tailwind class sorting |

### ⚡ Signal-based architecture

Angular Signals are a core state primitive in the application:

- `signal()` for writable reactive state
- `computed()` for derived state
- `linkedSignal()` for writable state derived from another source
- `resource()` for asynchronous reactive state
- `httpResource()` for reactive HTTP data

The examples stay deliberately small. They show the data flow and API shape without turning the boilerplate into a sample business application.

### 💤 `@defer` and incremental hydration

The showcase includes real deferred content rather than only documenting `@defer`.

It demonstrates the relationship between server-side rendering, hydration, deferred views, hydration triggers and event replay. The goal is to show where deferred content fits in an SSR application and how it can reduce the JavaScript that must be loaded and hydrated immediately.

### 💧 SSR, prerendering and hydration

The project is configured for Angular's modern rendering pipeline:

- server-side rendering (SSR)
- prerendering / SSG
- client hydration
- event replay
- incremental hydration through deferred views

The same foundation can support applications that need server rendering, static output or client-side rendering.

### 📦 Resource APIs

The documentation explains Angular's resource model and shows how asynchronous data can become reactive state.

`resource()` is useful when an asynchronous operation depends on reactive parameters. `httpResource()` builds on the same model for HTTP requests while remaining integrated with Angular's `HttpClient` infrastructure.

### 📝 Signal Forms

The showcase documents Angular's signal-based forms approach and demonstrates the relationship between a signal model, `form()`, field state and validation.

Reactive Forms are not removed from Angular. They remain useful, especially in existing applications. Signal Forms are included here because this boilerplate targets new, signal-oriented applications.

### 💉 Modern dependency injection

The project uses current service patterns, including `@Service()` for root-provided services and `inject()` for dependency access.

The documentation also explains when `@Injectable()` remains appropriate, rather than presenting `@Service()` as a universal replacement.

### 🧭 Routing

The router uses standalone APIs and includes:

- component input binding
- View Transitions
- anchor scrolling
- scroll-position restoration
- lazy feature loading

The showcase is intentionally one page, so navigation between documentation sections uses anchors instead of redirects.

### 🌐 HTTP infrastructure

The core HTTP layer provides a reusable foundation for application APIs:

- `HttpClient` with Fetch
- functional interceptors
- authentication interceptor
- centralized API error state

The boilerplate does not prescribe a backend, token format or authentication provider. Those decisions belong to the application created from it.

### 🔐 Authentication foundation

The project includes a small signal-based authentication foundation:

- session state
- authenticated-user state
- access-token state
- logout
- reusable authentication guard

It intentionally does not contain a complete login flow. A forked application can connect this foundation to its own identity provider or backend.

### 🌍 Internationalization

Transloco is configured with Italian and English translations.

Language selection is persisted and the application is SSR-safe. The showcase itself is translated, including interactive examples, so i18n is demonstrated as part of a real feature rather than as isolated strings.

### 🔎 SEO

The core SEO service provides an SSR-safe abstraction for common document metadata:

- title
- description
- robots
- canonical URL
- Open Graph metadata

Applications can extend this foundation with their own metadata strategy.

### 🎨 Tailwind CSS

Tailwind CSS 4 powers the showcase UI.

Prettier uses the Tailwind CSS sorting plugin so utility classes are reordered consistently during formatting.

### ♿ Accessibility

Accessibility is part of the baseline, not a final polish step.

The starter includes:

- semantic landmarks
- skip navigation
- visible keyboard focus
- reduced-motion support
- accessible interactive targets
- responsive layouts

New features should preserve these defaults.

### 🧪 Testing and code quality

The boilerplate includes:

- Vitest and Angular TestBed
- ESLint
- Prettier
- Tailwind class sorting
- Angular CLI build and test tooling

The aim is to make formatting, linting and testing part of the normal workflow from the first commit.

## 🧱 Architecture

```text
src/app/
├── core/
│   ├── auth/
│   ├── http/
│   │   └── interceptors/
│   ├── i18n/
│   ├── seo/
│   └── services/
├── features/
│   └── home/
│       ├── author-showcase.ts
│       └── deferred-showcase.ts
├── app.config.ts
├── app.config.server.ts
├── app.routes.ts
└── app.ts
```

The boundaries are intentional:

- `core/` contains application-wide infrastructure.
- `features/` contains business and domain functionality.
- `shared/` can contain genuinely shared UI or utilities.
- `app.config.ts` contains application-wide providers.
- server configuration stays separate from browser configuration.

> 🧭 **Keep domain logic out of `core/`.** A service belongs there only when it is infrastructure shared by the application as a whole.

## 🚀 Start a new project

Fork the repository, then adapt the application name, metadata and deployment configuration to the new project.

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm start
```

For LAN development:

```bash
npm run start-local-machine
```

## 🧪 Quality checks

Run the checks before pushing changes:

```bash
npm run build
npm test
npm run lint
npm run format:check
```

Vitest watch mode:

```bash
npm run test:vitest:watch
```

## 🖥️ SSR

Build and run the generated server:

```bash
npm run build
npm run serve:ssr
```

The generated server is written to `dist/angular-boilerplate/server`.

## 📄 SSG / prerender output

Build and serve the browser output:

```bash
npm run build
npm run serve:ssg
```

## 🧹 Clean generated output

```bash
npm run clean
```

## 🧩 Creating a feature

Keep application-specific functionality under `features/`:

```bash
ng generate component features/example/example --standalone
ng generate service features/example/example
```

The boilerplate gives the feature a foundation for routing, HTTP, authentication, i18n, SEO, SSR and testing. The feature itself should own its domain models, API contracts, state and UI.

## 🔄 Keeping the boilerplate current

This repository is intentionally maintained as a moving target. Angular evolves continuously, and the boilerplate should evolve with it rather than preserve an outdated architecture.

When updating Angular:

1. Review the official release notes and migration guidance.
2. Update dependencies.
3. Run the quality checks.
4. Update the showcase to reflect APIs actually recommended for the new version.
5. Update this README when the architecture changes.

The documentation page is part of the maintenance surface: if an Angular capability changes, the example should change with it.

## 🧭 Philosophy

1. **Prefer current Angular APIs.** Demonstrate the architecture recommended for the Angular version being targeted.
2. **Separate infrastructure from business logic.** A new application should not inherit a fake domain.
3. **Show, don't only describe.** Important Angular capabilities should have working examples.
4. **Use progressive enhancement.** SSR, hydration, deferred views and client interactivity should work together.
5. **Make quality defaults.** Accessibility, SEO, testing and formatting should not require a later retrofit.
6. **Keep examples small.** The showcase explains Angular; it should not become another application to maintain.

## 👤 Author

Created and maintained by **Salvatore Di Genua**.

- [GitHub profile](https://github.com/SalvatoreDiGenua)
- [ngx-request-lock](https://github.com/SalvatoreDiGenua/ngx-request-lock-docs) — an Angular library for coordinating request-driven UI locking.

## 🔗 Repository

[GitHub](https://github.com/SalvatoreDiGenua/angular-boilerplate)
