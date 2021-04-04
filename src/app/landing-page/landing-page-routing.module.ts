import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingContentComponent } from './landing-content/landing-content.component';
import { LandingPageContentComponent } from './landing-page-content/landing-page-content.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

const routes: Routes = [
  { 
    path: 'landing', 
    component: LandingContentComponent,
    children: [
      {
        path: '',
        component: LandingPageContentComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'registration',
        component: RegistrationPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
