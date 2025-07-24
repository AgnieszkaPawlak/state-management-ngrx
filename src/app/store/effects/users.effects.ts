import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs';

import { of } from 'rxjs';
import * as UserActions from '../actions/users.actions';
import {UsersService} from '../../services/users.service';

@Injectable()
export class UsersEffects {
  actions$ = inject(Actions);
  userService = inject(UsersService);
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe( // Ensure userService is correctly injected and has a getUsers method returning an observable
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

}



