# Angular Boilerplate

Personal Angular starter for building new applications from a consistent, modern foundation.

The repository is designed to stay aligned with the latest Angular release and to expose the framework's current application patterns through a working example. It is both a **starting point for new projects** and a **living reference for modern Angular**.

The boilerplate provides application infrastructure, not business logic. Fork it when starting a project, keep the shared foundations, and add the domain-specific code under `features/`.

## What this project is for

Starting an Angular application usually means repeating the same decisions: application structure, HTTP configuration, authentication boundaries, internationalization, SEO, rendering, testing, formatting and accessibility defaults.

This repository makes those decisions once and keeps them in a form that can be reused across projects.

It also serves a second purpose: the home page is an interactive documentation surface. Instead of listing Angular features only as prose, the application demonstrates how the current Angular APIs fit together in a real standalone, signal-based, SSR application.

## What the example application demonstrates

The home page is a single scrolling showcase. Its sections explain the architecture and progressively demonstrate the main capabilities provided by the boilerplate.

### Signal-based architecture

The application uses Angular Signals as a core state primitive:

- `signal()` for writable reactive state
- `computed()` for derived state
- `linkedSignal()` for writable state derived from another source
- `resource()` for asynchronous reactive state
- `httpResource()` for reactive HTTP data

The examples are intentionally small. The goal is to show the data flow and the API shape, not to turn the boilerplate into a sample business application.

### Zoneless change detection

The application uses Angular's zoneless change detection model instead of relying on Zone.js to discover changes.

This keeps the example aligned with Angular's signal-first direction and makes reactive state changes explicit in the application model.

### `@defer` and incremental hydration

The showcase includes real deferred content instead of only documenting `@defer`.

It demonstrates the relationship between:

- server-side rendering
- hydration
- `@defer` blocks
- deferred loading
- hydration triggers
- event replay

The purpose is to make it clear where deferred views belong in an SSR application and how they can reduce the amount of JavaScript that needs to be loaded and hydrated immediately.

### SSR, prerendering and hydration

The project is configured for Angular's modern rendering pipeline:

- server-side rendering (SSR)
- prerendering / SSG
- client hydration
- event replay
- incremental hydration through deferred views

The same application can therefore be used as a starting point for applications that need server rendering, static output or client-side rendering.

### Resource APIs

The documentation explains Angular's resource model and shows how asynchronous data can be represented as reactive state.

`resource()` is useful when an asynchronous operation depends on reactive parameters. `httpResource()` builds on that model for HTTP requests while remaining integrated with Angular's `HttpClient` infrastructure.

### Signal Forms

The showcase documents Angular's signal-based forms approach and demonstrates the relationship between a signal model, `form()`, field state and validation.

Reactive Forms are not removed from the platform. They remain useful, especially for existing applications. Signal Forms are included here because this boilerplate targets new, signal-oriented Angular applications.

### Modern dependency injection

The project uses Angular's current service patterns, including `@Service()` for root-provided services and `inject()` for dependency access.

The documentation also explains when `@Injectable()` remains appropriate, so the example does not present the shorthand as a replacement for every dependency-injection scenario.

### Routing

The router is configured with modern standalone APIs and includes:

- standalone route configuration
- component input binding
- View Transitions
- anchor scrolling
- scroll-position restoration
- lazy feature loading

The documentation is presented as one page, so navigation between sections uses anchors rather than redirects to separate documentation routes.

### HTTP infrastructure

The core HTTP layer provides a reusable foundation for application APIs:

- `HttpClient` with Fetch
- functional interceptors
- authentication interceptor
- centralized API error state

The boilerplate does not prescribe a backend, token format or authentication provider. Those choices belong to the application created from it.

### Authentication foundation

The project includes a small signal-based authentication foundation:

- session state
- authenticated-user state
- access-token state
- logout
- reusable authentication guard

It intentionally does not contain a complete login flow. A forked application should connect this foundation to its own identity provider or backend.

### Internationalization

Transloco is configured with Italian and English translations.

Language selection is persisted and the application is SSR-safe. The documentation showcase itself is translated, including the interactive examples, so the repository also demonstrates how i18n can be applied to a real Angular feature rather than only to isolated strings.

### SEO

The core SEO service provides an SSR-safe abstraction for common document metadata:

- title
- description
- robots
- canonical URL
- Open Graph metadata

Applications can extend this foundation with their own metadata strategy.

### Tailwind CSS

Tailwind CSS 4 is used for the showcase UI.

The project also uses Prettier with the Tailwind CSS sorting plugin so utility classes are reordered consistently when the code is formatted.

### Accessibility

Accessibility is treated as part of the application baseline rather than as a final polish step.

The starter includes:

- semantic landmarks
- skip navigation
- visible keyboard focus
- reduced-motion support
- accessible interactive targets
- responsive layouts

New features should preserve these defaults.

### Testing and code quality

The boilerplate includes a development quality baseline:

- Vitest and Angular TestBed
- ESLint
- Prettier
- Tailwind class sorting
- Angular CLI build and test tooling

The goal is to make formatting, linting and testing part of the normal workflow from the first commit.

## Architecture

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
├── app.config.ts
├── app.config.server.ts
├── app.routes.ts
└── app.ts
```

The intended boundary is simple:

- `core/` contains application-wide infrastructure.
- `features/` contains business and domain functionality.
- `shared/` can contain reusable UI or utilities when they are genuinely shared.
- `app.config.ts` contains application-wide providers.
- server configuration stays separate from browser configuration.

Avoid putting domain logic into `core/`. A service belongs there only when it is infrastructure shared by the application as a whole.

## Start a new project from this repository

Fork the repository and adapt the application name, metadata and deployment configuration to the new project.

Then install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

For LAN development:

```bash
npm run start-local-machine
```

## Quality checks

```bash
npm run build
npm test
npm run lint
npm run format:check
```

Vitest can also be run in watch mode:

```bash
npm run test:vitest:watch
```

## SSR

Build and run the generated server:

```bash
npm run build
npm run serve:ssr
```

The generated server is written to `dist/angular-boilerplate/server`.

## SSG / prerender output

Build and serve the browser output:

```bash
npm run build
npm run serve:ssg
```

## Clean generated output

```bash
npm run clean
```

## Creating a feature

Keep application-specific functionality under `features/`:

```bash
ng generate component features/example/example --standalone
ng generate service features/example/example
```

The boilerplate gives the feature a foundation for routing, HTTP, authentication, i18n, SEO, SSR and testing. The feature itself should own its domain models, API contracts, state and UI.

## Keeping the boilerplate current

This repository is intentionally maintained as a moving target. Angular is released continuously, and the boilerplate should evolve with the framework rather than preserve an old Angular architecture indefinitely.

When updating Angular, review the official Angular release notes and migration guidance, update the dependencies, then update the showcase so the documentation reflects the APIs that are actually recommended for the current version.

The documentation page is part of the maintenance surface of the boilerplate: if an Angular feature changes, the example should change with it.

## Philosophy

The project follows a few rules:

1. **Prefer current Angular APIs.** The boilerplate should demonstrate the architecture recommended for the Angular version it targets.
2. **Keep infrastructure separate from business logic.** A new application should be able to fork the repository without inheriting a fake domain.
3. **Show, don't only describe.** Important Angular capabilities should be represented by working examples in the showcase.
4. **Use progressive enhancement.** SSR, hydration, deferred views and client interactivity should work together rather than compete with each other.
5. **Treat accessibility, SEO, testing and formatting as defaults.** They should not require a project-wide retrofit later.
6. **Keep examples small.** The showcase exists to explain Angular, not to become another application that needs to be maintained.

## Repository

[GitHub](https://github.com/SalvatoreDiGenua/angular-boilerplate)
