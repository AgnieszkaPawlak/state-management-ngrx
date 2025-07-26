import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {Actions, provideEffects} from '@ngrx/effects';

import {provideStoreDevtools} from '@ngrx/store-devtools';
import { UsersEffects } from './store/effects/users.effects';
import {usersReducer} from './store/reducers/users.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    Actions,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({users: usersReducer}),
    provideEffects(UsersEffects),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};

