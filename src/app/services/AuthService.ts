import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userKey = 'authUser';
  private readonly loginFlag = 'isLoggedIn';

  register(user: User): boolean {
    const existing = localStorage.getItem(this.userKey);
    if (existing) return false; // utilisateur déjà enregistré

    localStorage.setItem(this.userKey, JSON.stringify(user));
    return true;
  }

  login(email: string, password: string): boolean {
    const stored = localStorage.getItem(this.userKey);
    if (!stored) return false;

    const user: User = JSON.parse(stored);
    if (user.email === email && user.password === password) {
      localStorage.setItem(this.loginFlag, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.loginFlag);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.loginFlag) === 'true';
  }



  getUser(): User | null {
    const stored = localStorage.getItem(this.userKey);
    return stored ? JSON.parse(stored) : null;

  }
}


