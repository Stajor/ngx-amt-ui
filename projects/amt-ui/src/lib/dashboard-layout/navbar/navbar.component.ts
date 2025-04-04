import { Component } from '@angular/core';
import {AmtMenuService} from '../../services/amt-menu.service';
import {NavbarProfileComponent} from '../navbar-profile/navbar-profile.component';
import {NavbarLanguagesComponent} from '../navbar-languages/navbar-languages.component';
import {NavbarThemeComponent} from '../navbar-theme/navbar-theme.component';
import {NavbarColorsComponent} from '../navbar-colors/navbar-colors.component';
import {NavbarFullscreenComponent} from '../navbar-fullscreen/navbar-fullscreen.component';
import {NavbarResponsiveComponent} from '../navbar-responsive/navbar-responsive.component';
import {NavbarNotificationsComponent} from '../navbar-notifications/navbar-notifications.component';

@Component({
  selector: 'amt-navbar',
  imports: [
    NavbarProfileComponent,
    NavbarLanguagesComponent,
    NavbarThemeComponent,
    NavbarColorsComponent,
    NavbarFullscreenComponent,
    NavbarResponsiveComponent,
    NavbarNotificationsComponent
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
