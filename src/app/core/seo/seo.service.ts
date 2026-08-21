import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description?: string;
  canonicalUrl?: string;
  robots?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  update(config: SeoConfig): void {
    this.title.setTitle(config.title);

    if (config.description !== undefined) {
      this.meta.updateTag({ name: 'description', content: config.description });
    }

    if (config.robots !== undefined) {
      this.meta.updateTag({ name: 'robots', content: config.robots });
    }

    if (config.canonicalUrl !== undefined) {
      this.setCanonical(config.canonicalUrl);
    }
  }

  setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }

    link.href = url;
  }

  setOpenGraph(config: { title?: string; description?: string; image?: string; url?: string }): void {
    if (config.title !== undefined) {
      this.meta.updateTag({ property: 'og:title', content: config.title });
    }
    if (config.description !== undefined) {
      this.meta.updateTag({ property: 'og:description', content: config.description });
    }
    if (config.image !== undefined) {
      this.meta.updateTag({ property: 'og:image', content: config.image });
    }
    if (config.url !== undefined) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }
  }
}
