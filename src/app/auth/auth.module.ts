import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {AuthLayoutComponent} from '../../../projects/amt-ui/src/lib/auth-layout/auth-layout.component';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AuthLayoutComponent
  ]
})
export class AuthModule { }
