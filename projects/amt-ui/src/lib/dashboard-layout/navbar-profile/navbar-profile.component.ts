import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AmtThemeService} from '../../services/amt-theme.service';
import {AmtThemeColor, AmtThemeDirection} from '../../interfaces/amt-theme.inteface';

@Component({
  selector: 'amt-navbar-profile',
  imports: [

  ],
  templateUrl: './navbar-profile.component.html',
  styleUrl: './navbar-profile.component.css',
  animations: [
    trigger('openClose', [
      state('open', style({opacity: 1, transform: 'translateY(0)', visibility: 'visible'})),
      state('closed', style({opacity: 0, transform: 'translateY(-20px)', visibility: 'hidden'})),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class NavbarProfileComponent {
  public isOpen = false;
  public profileMenu = [
    {
      title: 'Your Profile',
      icon: './assets/icons/heroicons/outline/user-circle.svg',
      link: '/profile',
    },
    {
      title: 'Settings',
      icon: './assets/icons/heroicons/outline/cog-6-tooth.svg',
      link: '/settings',
    },
    {
      title: 'Log out',
      icon: './assets/icons/heroicons/outline/logout.svg',
      link: '/auth',
    },
  ];

  public themeColors = [
    {
      name: 'base',
      code: '#e11d48',
    },
    {
      name: 'yellow',
      code: '#f59e0b',
    },
    {
      name: 'green',
      code: '#22c55e',
    },
    {
      name: 'blue',
      code: '#3b82f6',
    },
    {
      name: 'orange',
      code: '#ea580c',
    },
    {
      name: 'red',
      code: '#cc0022',
    },
    {
      name: 'violet',
      code: '#6d28d9',
    },
  ];

  public themeMode = ['light', 'dark'];
  public themeDirection = ['ltr', 'rtl'];

  constructor(public themeService: AmtThemeService) {}

  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleThemeMode() {
    this.themeService.toggleMode();
  }

  toggleThemeColor(color: AmtThemeColor) {
    this.themeService.color = color;
  }

  setDirection(value: AmtThemeDirection) {
    this.themeService.direction = value;
  }
}
