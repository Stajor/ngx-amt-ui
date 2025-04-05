import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'amt-navbar-notifications',
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './navbar-notifications.component.html',
  styleUrl: './navbar-notifications.component.css'
})
export class NavbarNotificationsComponent {
  notifications = [
    {
      icon: 'notifications_active',
      name: 'Jese Leos',
      time: 'a few moments ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: 'alarm',
      name: 'Joseph Mcfall',
      time: '10 minutes ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: 'face_5',
      name: 'Bonnie Green',
      time: '44 minutes ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: 'face_5',
      name: 'Leslie Livingston',
      time: '1 hour ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: 'timer_5',
      name: 'Robert Brown',
      time: '3 hours ago',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
}
