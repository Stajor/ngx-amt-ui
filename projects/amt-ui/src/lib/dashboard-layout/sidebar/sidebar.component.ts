import {Component, inject} from '@angular/core';
import {NgClass} from '@angular/common';
import {AmtMenuService} from '../../services/amt-menu.service';
import {AmtThemeService} from '../../services/amt-theme.service';
import {MatIconModule} from '@angular/material/icon';
import {SidebarMenuComponent} from '../sidebar-menu/sidebar-menu.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'amt-sidebar',
  imports: [
    NgClass,
    MatIconModule,
    SidebarMenuComponent,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuService: AmtMenuService = inject(AmtMenuService);
  themeService: AmtThemeService = inject(AmtThemeService);

  constructor() {
  }
}
