import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  constructor(private http: HttpClient) {}

  getHello(): Observable<string> {
    return this.http
      .get<{ message: string }>(`${environment.apiUrl}/api/hello`)
      .pipe(map(res => res.message));
  }
}
