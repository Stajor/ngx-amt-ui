import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {ButtonsComponent} from './buttons/buttons.component';

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'analytics', pathMatch: 'full'},
    {path: 'analytics', component: AnalyticsComponent},
    {path: 'buttons', component: ButtonsComponent},
  ]}])],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
