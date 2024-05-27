import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { FakeAuthService } from '../fakeAuth/fake-auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  if (inject(FakeAuthService).isLoggedIn()) return true;

  inject(Router).navigate(['/auth/login']);
  return false;


};
