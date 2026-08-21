import {
  ApplicationConfig,
  isDevMode,
  PLATFORM_ID,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/http/interceptors/auth/auth-interceptor';
import { errorInterceptor } from './core/http/interceptors/error/error-interceptor';
import { provideTransloco } from '@jsverse/transloco';
import { provideTranslocoPersistLang } from '@jsverse/transloco-persist-lang';
import { Language } from './core/i18n/language';
import { TranslocoHttpLoader } from './core/i18n/transloco-loader';

class NoopStorage implements Storage {
  readonly length = 0;
  clear(): void {}
  getItem(): string | null { return null; }
  key(): string | null { return null; }
  removeItem(): void {}
  setItem(): void {}
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'top',
      }),
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, errorInterceptor]),
    ),
    provideClientHydration(withEventReplay()),
    provideTransloco({
      config: {
        availableLangs: ['en', 'it'],
        defaultLang: 'en',
        fallbackLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    provideTranslocoPersistLang({
      storage: {
        useFactory: (platformId: object) =>
          isPlatformBrowser(platformId) ? localStorage : new NoopStorage(),
        deps: [PLATFORM_ID],
      },
      storageKey: Language.storageKey,
    }),
  ],
};
