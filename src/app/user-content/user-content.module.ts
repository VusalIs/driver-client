import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';


import { UserContentRoutingModule } from './user-content-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogFormComponent } from './blog-form/blog-form.component';


@NgModule({
  declarations: [DashboardComponent, BlogFormComponent],
  imports: [
    CommonModule,
    UserContentRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule
  ]
})
export class UserContentModule { }
