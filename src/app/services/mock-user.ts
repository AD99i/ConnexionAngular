import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class MockUserService {
  private readonly key = 'mockUsers';

  constructor() {
    if (!localStorage.getItem(this.key)) {
      this.seedUsers(); // initialise les comptes mockés
    }
  }

  private seedUsers() {
    const users: User[] = [
      { email: 'admin@example.com', password: 'admin123' },
      { email: 'user1@example.com', password: 'user123' },
      { email: 'aissa@example.com', password: 'javajee' }
    ];
    localStorage.setItem(this.key, JSON.stringify(users));
  }

  getAllUsers(): User[] {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : [];
  }

  findUserByEmail(email: string): User | undefined {
    return this.getAllUsers().find(u => u.email === email);
  }

  validateLogin(email: string, password: string): User | null {
    const user = this.getAllUsers().find(u => u.email === email && u.password === password);
    return user || null;
  }
}
