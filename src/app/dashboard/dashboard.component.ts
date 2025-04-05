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
    this.menuService.user.set({
      email: 'user@email.com',
      initials: 'JD',
      fullName: 'John Doe',
      photo: 'https://i.pravatar.cc/300'
    });
    this.menuService.profileMenu.set([
      {label: 'Edit profile', icon: 'person_edit', click: () => alert('Edit profile')},
      {label: 'Log out', icon: 'logout', click: () => alert('Logout')}
    ]);
    this.menuService.languages.set([
      {title: 'English', flagClass: 'fis fi fi-us'},
      {title: 'Russian', flagClass: 'fis fi fi-ru'},
    ]);
  }
}
