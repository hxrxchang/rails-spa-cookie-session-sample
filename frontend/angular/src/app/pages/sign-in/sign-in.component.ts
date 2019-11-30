import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  signInFormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  ngOnInit() {}

  async onSubmit() {
    await this.auth
      .signIn(
        this.signInFormGroup.value.userName,
        this.signInFormGroup.value.password
      )
      .toPromise();
    this.router.navigateByUrl('/');
  }
}
