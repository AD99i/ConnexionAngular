import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth} from '../services/auth';

export const authGuardGuard: CanActivateFn = (route, state) => {
  //injection de dependances necessaires pour l'authentification
  const authService = inject(Auth);
  const router = inject(Router);

  if(authService.isLoggedIn) return true;
  else {
    router.navigate(['/home']);
    return false;
  }
};
