import {Component, inject} from '@angular/core';
import {AmtMenuItem} from '../../../projects/amt-ui/src/lib/interfaces/amt-menu.interface';
import {AmtMenuService} from '../../../projects/amt-ui/src/lib/services/amt-menu.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  menuService: AmtMenuService = inject(AmtMenuService);
  pages: AmtMenuItem[] = [
    {group: 'Base', separator: false, items: [
      {label: 'Dashboard', icon: 'home', route: '/dashboard/analytics'},
      {label: 'Auth', icon: 'lock', route: '/auth', children: [
        {label: 'Sign in', route: '/auth/login'},
        {label: 'Forgot Password', route: '/auth/forgot-password'}
      ]},
      {label: 'Errors', icon: 'warning', route: '/errors', children: [
        {label: '404', route: '/errors/404'},
        {label: '500', route: '/errors/500'},
      ]},
    ]},
    {group: 'Components', separator: true, items: []}
  ];

  constructor() {
    this.menuService.pagesMenu.set(this.pages);
  }
}
