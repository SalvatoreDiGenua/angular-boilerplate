import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-author-showcase',
  imports: [TranslocoPipe],
  template: `
    <section
      class="border-t border-white/10 pt-8"
      aria-labelledby="author-title"
    >
      <div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p
            class="text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase"
          >
            {{ 'home.author.eyebrow' | transloco }}
          </p>
          <h2 id="author-title" class="mt-2 text-2xl font-bold">
            {{ 'home.author.title' | transloco }}
          </h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            {{ 'home.author.description' | transloco }}
          </p>
        </div>
        <a
          href="https://github.com/SalvatoreDiGenua"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          {{ 'home.author.profileCta' | transloco }}
        </a>
      </div>

      <div class="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold text-cyan-300">ngx-request-lock</p>
            <h3 class="mt-2 text-lg font-semibold">
              {{ 'home.author.libraryTitle' | transloco }}
            </h3>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              {{ 'home.author.libraryDescription' | transloco }}
            </p>
          </div>
          <a
            href="https://github.com/SalvatoreDiGenua/ngx-request-lock-docs"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-cyan-200 hover:decoration-cyan-200"
          >
            {{ 'home.author.libraryCta' | transloco }}
          </a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorShowcase {}
