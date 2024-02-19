import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './body/header/header.component';
import { SharedModule } from './shared/shared.module';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './body/landing/landing.component';
import { MainComponent } from './body/main/main.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BodyComponent,
    HeaderComponent,
    MainComponent,
    RegistrationComponent,
    LoginComponent,
    LandingComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
