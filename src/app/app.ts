import {Component, Signal, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from '@ngrx/store';
import {loadUsers} from './store/actions/users.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import {selectAllUsers} from './store/selectors/users.selectors';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatDividerModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 users: Signal<string[] | any[]> = signal<string[]>([]);

  constructor(private store: Store) {
    this.users = toSignal(this.store.select(selectAllUsers), {
      initialValue: []
    })

  }

  reloadUsers(): void {
    this.store.dispatch(loadUsers())
  }
}

