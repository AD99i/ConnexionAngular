import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  contact = {
    name: '',
    email: '',
    message: ''
  };

  sendMessage() {
    console.log('Message envoyé :', this.contact);
    // Tu peux ajouter ici une logique d’envoi vers un services backend
  }

}
