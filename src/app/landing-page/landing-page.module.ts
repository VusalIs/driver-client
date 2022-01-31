import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { LandingPageContentComponent } from './landing-page-content/landing-page-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LandingContentComponent,
    LandingPageContentComponent,
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LandingPageModule {}
