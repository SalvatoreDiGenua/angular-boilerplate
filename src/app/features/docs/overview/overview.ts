import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-docs-overview',
  imports: [RouterLink],
  templateUrl: './overview.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsOverview {
  constructor() {
    inject(Seo).update({
      title: 'Angular Boilerplate — Architecture',
      description:
        'A signal-first Angular 22+ application foundation with zoneless change detection, hydration, SSR, Tailwind and modern tooling.',
      robots: 'index, follow',
    });
  }
}
