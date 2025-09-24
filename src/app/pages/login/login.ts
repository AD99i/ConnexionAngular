import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/AuthService';
import {MockUserService} from '../../services/mock-user';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  user = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private mockUserService: MockUserService) {}

  submitLogin() {
    const user = this.mockUserService.validateLogin(this.user.email, this.user.password);
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert(`Bienvenue ${user.email}`);
    } else {
      alert('Identifiants incorrects');
    }
  }

}
