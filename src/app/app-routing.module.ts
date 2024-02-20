import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './body/landing/landing.component';
import { MainComponent } from './body/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PortfolioComponent } from './body/portfolio/portfolio.component';
import { AboutUsComponent } from './body/about-us/about-us.component';
import { TeamComponent } from './body/team/team.component';
import { ContactUsComponent } from './body/contact-us/contact-us.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/body/main', pathMatch: 'full' },
  {
    path: 'body', component: BodyComponent, children: [
      { path: 'main', component: MainComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'team', component: TeamComponent },
      { path: 'contact-us', component: ContactUsComponent }
    ]
  },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  },
  { path: '**', redirectTo: '/body/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
