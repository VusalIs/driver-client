import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ChartModule } from 'angular2-chartjs';
import {MatSelectModule} from '@angular/material/select';

import { UserContentRoutingModule } from './user-content-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    UserContentRoutingModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    ChartModule,
    MatSelectModule
  ],
})
export class UserContentModule {}
