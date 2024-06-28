import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

//as this is function we cannot use, constructor so we will be using 2nd method to inject our service of auth into this guard


const authService = inject(AuthService)
  const router = inject(Router)
  if(authService.isAuthenticated()){
    return true
  }else{
     router.navigate(['/'])
     return false
  }
 // return true;
};
