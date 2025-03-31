import {Component, input} from '@angular/core';
import {AmtSubMenuItem} from '../../interfaces/amt-menu.interface';
import {AmtMenuService} from '../../services/amt-menu.service';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'amt-sidebar-sub-menu',
  imports: [
    NgClass,
    NgTemplateOutlet,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './sidebar-sub-menu.component.html',
  styleUrl: './sidebar-sub-menu.component.css'
})
export class SidebarSubMenuComponent {
  submenu = input<AmtSubMenuItem>({});

  constructor(public menuService: AmtMenuService) {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }
}
