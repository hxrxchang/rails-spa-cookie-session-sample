import { Injectable } from '@angular/core';
import {
  CanActivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (state.url === '/hello') {
      return this.http
        .get<string>(`${environment.apiUrl}/api/auth/check-session`)
        .pipe(
          map(() => {
            return true;
          }),
          catchError(() => {
            this.router.navigateByUrl('/sign-in');
            return of(false);
          })
        );
    } else if (state.url === '/sign-in' || state.url === '/sign-up') {
      return this.http
        .get<string>(`${environment.apiUrl}/api/auth/check-session`)
        .pipe(
          map(() => {
            this.router.navigateByUrl('/');
            return false;
          }),
          catchError(() => {
            return of(true);
          })
        );
    }
  }
}
