import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signUpFormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  errorOccurred = false;

  ngOnInit() {}

  async onSubmit() {
    try {
      await this.authService
        .signUp(
          this.signUpFormGroup.value.userName,
          this.signUpFormGroup.value.password
        )
        .toPromise();
      this.router.navigateByUrl('/');
    } catch (error) {
      this.errorOccurred = true;
    }
  }
}
