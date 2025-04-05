import { Component } from '@angular/core';
import {AmtMenuService} from '../../services/amt-menu.service';
import {NavbarProfileComponent} from '../navbar-profile/navbar-profile.component';
import {NavbarLanguagesComponent} from '../navbar-languages/navbar-languages.component';

@Component({
  selector: 'amt-navbar',
  imports: [
    NavbarProfileComponent,
    NavbarLanguagesComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private menuService: AmtMenuService) {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu.set(true);
  }
}
