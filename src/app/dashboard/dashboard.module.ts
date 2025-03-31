import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardLayoutComponent} from '../../../projects/amt-ui/src/lib/dashboard-layout/dashboard-layout.component';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardLayoutComponent
  ]
})
export class DashboardModule { }
