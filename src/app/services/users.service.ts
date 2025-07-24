import { Injectable } from '@angular/core';
import { of } from 'rxjs'; // Replace with HttpClient for real API

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getUsers() {
    return of(['User 1', 'User 2', 'User 3']); // Simulating an API
  }
}

