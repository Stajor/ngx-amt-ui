import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

@NgModule({
  imports: [RouterModule.forChild([{path: '', component: AuthComponent, children: [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    // {path: 'reset', component: ResetComponent},
    // {path: 'sign-up', component: SignUpComponent},
    // {path: 'new-password', component: NewPasswordComponent},
    // {path: 'two-steps', component: TwoStepsComponent}
  ]}])],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
