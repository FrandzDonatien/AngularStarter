import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = () :boolean => {
  const authService = inject(AuthService);

  const currentUser = authService.currentUserValue;
  if (currentUser) {
    // logged in so return true
    return true;
  }
  // not logged in so redirect to login page with the return url
  authService.logout();
  return false;
};
