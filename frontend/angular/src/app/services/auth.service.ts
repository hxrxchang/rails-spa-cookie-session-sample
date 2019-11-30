import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(userName: string, password: string): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/api/auth/sign-in`, {
      name: userName,
      password
    });
  }

  signOut(): Observable<string> {
    return this.http.post<string>(
      `${environment.apiUrl}/api/auth/sign-out`,
      {}
    );
  }
}
