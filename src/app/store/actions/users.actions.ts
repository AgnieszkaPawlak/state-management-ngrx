import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Users] Load Users');
export const loadUsersSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ users: string[] }>()
);
export const loadUsersFailure = createAction('[Users] Load Users Failure', props<{ error: any }>());
