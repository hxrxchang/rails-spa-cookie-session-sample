import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let contentType: string | null = null;
    if (req.headers.has('Content-Type')) {
      contentType = req.headers.get('Content-Type');
    }
    req = req.clone({
      withCredentials: true,
      setHeaders: {
        'Content-Type': contentType === null ? 'application/json' : contentType
      }
    });
    return next.handle(req);
  }
}
