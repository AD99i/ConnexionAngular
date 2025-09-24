import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-profil',
  imports: [
    DatePipe
  ],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {
  profilID!: string;
  user: any; // ou mieux : User si tu as une interface
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.profilID = this.route.snapshot.params['id'];

    const rawUser = localStorage.getItem('currentUser');
    this.user = rawUser ? JSON.parse(rawUser) : null;
  }
}
