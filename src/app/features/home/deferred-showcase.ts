import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { AuthorShowcase } from './author-showcase';

@Component({
  selector: 'app-deferred-showcase',
  imports: [TranslocoPipe, AuthorShowcase],
  template: `
    <div
      class="rounded-3xl border border-cyan-400/20 bg-slate-950 p-6 text-slate-100 shadow-2xl shadow-cyan-950/20"
    >
      <div class="flex items-center justify-between gap-4">
        <div>
          <p
            class="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase"
          >
            {{ 'home.rendering.deferredEyebrow' | transloco }}
          </p>
          <h3 class="mt-2 text-xl font-semibold">
            {{ 'home.rendering.deferredTitle' | transloco }}
          </h3>
        </div>
        <span
          class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
          >{{ 'home.rendering.deferredBadge' | transloco }}</span
        >
      </div>

      <p class="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
        {{ 'home.rendering.deferredDescription' | transloco }}
      </p>

      <div class="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          class="min-h-11 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          (click)="count.update((value) => value + 1)"
        >
          {{ 'home.rendering.deferredButton' | transloco }}: {{ count() }}
        </button>
        <span class="text-xs text-slate-400">{{
          'home.rendering.deferredNote' | transloco
        }}</span>
      </div>

      <app-author-showcase class="mt-10 block" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferredShowcase {
  protected readonly count = signal(0);
}
