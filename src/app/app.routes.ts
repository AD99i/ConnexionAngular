import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Contact} from './pages/contact/contact';
import {Profil} from './pages/profil/profil';
import {NotFound} from './pages/not-found/not-found';
import {Register} from './pages/register/register';
import {Login} from './pages/login/login';

export const routes: Routes = [
  //route par défaut
  {path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:Home},
  {path:'contact',component:Contact},
  {path:'profil/:id',component:Profil},
  {path:'register',component:Register},
  {path:'login',component:Login},
  //autre route qui n'existe pas dans l'appli renvoi vers une page notfound
  {path:'**',component:NotFound}
];
