import {Component} from '@angular/core';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AmtSubMenuItem} from '../../interfaces/amt-menu.interface';
import {AmtMenuService} from '../../services/amt-menu.service';
import {SidebarSubMenuComponent} from '../sidebar-sub-menu/sidebar-sub-menu.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'amt-sidebar-menu',
  imports: [
    NgClass,
    NgTemplateOutlet,
    RouterModule,
    SidebarSubMenuComponent,
    MatIconModule
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  constructor(public menuService: AmtMenuService) {}

  public toggleMenu(subMenu: AmtSubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
