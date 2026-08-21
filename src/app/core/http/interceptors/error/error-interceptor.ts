import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ApiErrorService } from '../../../services/api-error.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errors = inject(ApiErrorService);

  return next(req).pipe(
    catchError((error: unknown) => {
      if (error instanceof HttpErrorResponse) {
        errors.report({
          status: error.status,
          message: error.message || 'An unexpected HTTP error occurred.',
          url: error.url ?? req.url,
        });
      }

      return throwError(() => error);
    }),
  );
};
