import { ChangeDetectionStrategy, Component, inject, linkedSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-docs-signals',
  imports: [RouterLink],
  templateUrl: './signals.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsSignals {
  readonly count = signal(0);
  readonly doubled = linkedSignal(() => this.count() * 2);

  constructor() {
    inject(Seo).update({
      title: 'Angular Boilerplate — Signals',
      description:
        'How this Angular boilerplate uses signals, linkedSignal, resource, httpResource and Signal Forms.',
      robots: 'index, follow',
    });
  }

  increment(): void {
    this.count.update((value) => value + 1);
  }
}
