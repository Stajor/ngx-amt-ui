import { NgModule } from '@angular/core';
import {ErrorsComponent} from './errors.component';
import {RouterModule} from '@angular/router';
import {Error404Component} from './error404/error404.component';
import {Error500Component} from './error500/error500.component';

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: ErrorsComponent, children: [
    {path: '', redirectTo: '404', pathMatch: 'full'},
    {path: '404', component: Error404Component},
    {path: '500', component: Error500Component},
    {path: '**', redirectTo: 'errors/404'},
  ]}])],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
