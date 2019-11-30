import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { HelloService } from 'src/app/services/hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private helloService: HelloService
  ) {}

  message$: Observable<string>;

  ngOnInit() {
    this.message$ = this.helloService.getHello();
  }

  async onClickSignOut() {
    await this.authService.signOut().toPromise();
    this.router.navigateByUrl('/sign-in');
  }
}
