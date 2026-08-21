# Angular Boilerplate

Personal Angular 22 starter for applications created from this repository.

The boilerplate intentionally contains **application infrastructure**, not business logic.

## Included

- Angular 22 standalone APIs and signals
- Zoneless change detection
- Router with component input binding, View Transitions and scroll restoration
- SSR + prerendering + hydration + event replay
- Fetch-backed `HttpClient`
- Functional HTTP auth/error interceptors
- Signal-based authentication service and reusable route guard
- Transloco i18n (`en` / `it`) with persisted language selection
- SSR-safe SEO service for title, description, robots, canonical and Open Graph metadata
- Tailwind CSS 4
- Vitest + Angular TestBed
- ESLint + Prettier
- Accessibility baseline: skip link, focus-visible styles, reduced-motion support and semantic starter markup
- Mobile-first starter page demonstrating the architecture

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

Add business/domain code under `features/`. Keep reusable infrastructure in `core/`.

## Development

```bash
npm install
npm start
```

For LAN development:

```bash
npm run start-local-machine
```

## Quality

```bash
npm run build
npm test
npm run lint
npm run format:check
```

Vitest can also be run directly:

```bash
npm run test:vitest:watch
npm run test:vitest:coverage
```

## SSR

```bash
npm run build
npm run serve:ssr
```

The generated SSR server is under `dist/angular-boilerplate/server`.

## SSG / prerender output

```bash
npm run build
npm run serve:ssg
```

## Cleaning build artifacts

```bash
npm run clean
```

## Creating a new feature

Use Angular CLI generators and keep feature code isolated:

```bash
ng generate component features/example/example --standalone
ng generate service features/example/example
```

Authentication, HTTP, i18n and SEO are deliberately provided as reusable foundations; application-specific API contracts, login flows and domain models should be implemented by the project created from this boilerplate.
