import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Language } from '../../core/i18n/language';
import { Seo } from '../../core/seo/seo';
import { AuthorShowcase } from './author-showcase';
import { DeferredShowcase } from './deferred-showcase';

@Component({
  selector: 'app-home',
  imports: [TranslocoPipe, DeferredShowcase, AuthorShowcase],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly language = inject(Language);

  protected readonly signalValue = signal(42);
  protected readonly doubledValue = computed(() => this.signalValue() * 2);
  protected readonly featureCards = [
    { id: 'signals', icon: '01', key: 'signals' },
    { id: 'defer', icon: '02', key: 'defer' },
    { id: 'hydration', icon: '03', key: 'hydration' },
    { id: 'resources', icon: '04', key: 'resources' },
    { id: 'forms', icon: '05', key: 'forms' },
    { id: 'service', icon: '06', key: 'service' },
  ] as const;

  constructor() {
    inject(Seo).update({
      title: 'Angular Boilerplate — Signals, Hydration & Modern Angular',
      description:
        'A signal-first Angular 22 boilerplate showcasing hydration, incremental hydration, deferrable views, resources, Signal Forms and modern dependency injection.',
      robots: 'index, follow',
    });
  }

  protected incrementSignal(): void {
    this.signalValue.update((value) => value + 1);
  }

  protected scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
