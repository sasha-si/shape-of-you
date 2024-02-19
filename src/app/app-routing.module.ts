import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './body/landing/landing.component';
import { MainComponent } from './body/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  {
    path: 'body', component: BodyComponent, children: [
      { path: '', component: MainComponent },
      { path: 'landing', component: LandingComponent }
    ]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent }
    ]
  },
  { path: '**', redirectTo: '/body' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
