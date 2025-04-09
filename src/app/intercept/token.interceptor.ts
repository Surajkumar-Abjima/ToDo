import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token=localStorage.getItem("UserData")

  const colneReq=req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`
    }
  })

  return next(colneReq);
};
