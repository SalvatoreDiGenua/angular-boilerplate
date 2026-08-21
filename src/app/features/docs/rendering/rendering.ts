import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-docs-rendering',
  imports: [RouterLink],
  templateUrl: './rendering.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsRendering {
  constructor() {
    inject(Seo).update({
      title: 'Angular Boilerplate — Rendering & Hydration',
      description:
        'Angular SSR, hydration, incremental hydration, event replay, deferrable views and route-level rendering in the boilerplate.',
      robots: 'index, follow',
    });
  }
}
