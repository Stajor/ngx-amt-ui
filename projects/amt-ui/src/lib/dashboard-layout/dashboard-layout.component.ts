import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'amt-dashboard-layout',
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {}



