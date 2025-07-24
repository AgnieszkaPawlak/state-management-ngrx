import {loadUsers, loadUsersFailure, loadUsersSuccess} from '../actions/users.actions';
import {Action, createReducer, on} from '@ngrx/store';


export interface UsersState
{
  users: string[],
  loading : boolean,
  error: any,
}

export const initialState: UsersState
  = {
  users: [],
  loading: false,
  error: null,
}

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({...state, loading: true})),
  on(loadUsersSuccess, (state, { users }) => ({...state, users, loading: false})),
  on(loadUsersFailure, (state, { error}) => ({...state, loading: false, error}))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action)
}



