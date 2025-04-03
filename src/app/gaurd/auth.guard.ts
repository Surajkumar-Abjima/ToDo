import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

 const router=inject(Router)

  const loggedData = localStorage.getItem('UserData');
  if (loggedData !== null) {
    return true;
  }
  else{
    router.navigate(["login"])
    return false;
  }
};
