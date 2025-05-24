import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient} from '@angular/common/http';
import {AuthInterceptor} from './components/shared/auth-interceptor';
import {CommonModule} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),CommonModule ,provideHttpClient(),provideClientHydration(withEventReplay()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,  // Twoja klasa interceptora
      multi: true,  // Pozwala na używanie wielu interceptorów
    },
  ]
};
