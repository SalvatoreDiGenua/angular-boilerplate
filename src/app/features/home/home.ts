import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';
import { Language } from '../../core/i18n/language';
import { Seo } from '../../core/seo/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly language = inject(Language);

  constructor() {
    inject(Seo).update({
      title: 'Angular Boilerplate',
      description:
        'Angular 22 application boilerplate with SSR, i18n, Tailwind CSS and Vitest.',
      robots: 'index, follow',
    });
  }
}
