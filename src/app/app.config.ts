import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';
import { BASe_Toke } from './shared/token/app.token';
import { baseUrl } from '../../projects/auth/src/lib/baseUrl/baseUrl';
import { tokenInterceptor } from './core/services/token.interceptor';
import { provideStore } from '@ngrx/store';
import { modalReducer } from './shared/modal/modal.reducers';
import { provideEffects } from '@ngrx/effects';
import { QuestionEffects } from './shared/question/question.effect';

import { ModalEffects } from './shared/modal/modal.effect';
import { questionReducer } from './shared/question/question.reducers';





export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    { provide: BASe_Toke, useValue: baseUrl.baseUrl },
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore({
        modal:modalReducer,
        question:questionReducer,

    }),
provideEffects([QuestionEffects, ModalEffects])
]

};
