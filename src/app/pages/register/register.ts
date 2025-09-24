import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/AuthService';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  constructor(private authService: AuthService) {}


  user = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  submitForm() {
    console.log('Inscription avec :', this.user);
    // Ajoute ici ta logique de validation ou d’envoi vers un backend
  }

  submitRegister() {
    const success = this.authService.register(this.user);
    alert(success ? 'Inscription réussie' : 'Utilisateur déjà existant');
  }

}
