import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HelloComponent } from './pages/hello/hello.component';

const routes: Routes = [
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
  { path: 'hello', component: HelloComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '**', redirectTo: '/hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
