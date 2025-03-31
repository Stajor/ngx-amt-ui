import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'errors', loadChildren: () => import('./../../projects/amt-ui/src/lib/errors/errors.module').then(m => m.ErrorsModule)},
];
