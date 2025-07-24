import {usersReducer, UsersState} from './users.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  users: usersReducer,
}

