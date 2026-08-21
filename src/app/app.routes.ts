import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Angular Boilerplate',
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./features/docs/overview/overview').then((m) => m.DocsOverview),
    title: 'Architecture — Angular Boilerplate',
  },
  {
    path: 'docs/signals',
    loadComponent: () =>
      import('./features/docs/signals/signals').then((m) => m.DocsSignals),
    title: 'Signals — Angular Boilerplate',
  },
  {
    path: 'docs/rendering',
    loadComponent: () =>
      import('./features/docs/rendering/rendering').then((m) => m.DocsRendering),
    title: 'Rendering — Angular Boilerplate',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
