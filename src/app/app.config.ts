import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {reducers} from './store/reducers';
import {Actions, provideEffects} from '@ngrx/effects';

import {provideStoreDevtools} from '@ngrx/store-devtools';
import { UsersEffects } from './store/effects/users.effects';
import {usersReducer} from './store/reducers/users.reducer';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    Actions,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({users: usersReducer}), // Rejestracja Stanu NgRx
    provideEffects(UsersEffects), // Rejestracja Efektów NgRx
    provideStoreDevtools({ maxAge: 25 }),
  ],
};

