import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, count, retry, shareReplay, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('x-version', 'Dev 1.0');

  const reqClone = req.clone({
    headers
  });

  return next(reqClone).pipe(shareReplay(),
  retry({ count: 3, delay: 1000 }),
  catchError((error: HttpErrorResponse) => {
    if(error.status === 0) {
      alert('Servidor fora do ar');
    }
    return throwError(() => error);
  })
);
};
