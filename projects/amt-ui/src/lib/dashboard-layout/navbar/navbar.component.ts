import {Component, inject} from '@angular/core';
import {AmtMenuService} from '../../services/amt-menu.service';
import {NavbarProfileComponent} from '../navbar-profile/navbar-profile.component';
import {NavbarLanguagesComponent} from '../navbar-languages/navbar-languages.component';
import {NavbarThemeComponent} from '../navbar-theme/navbar-theme.component';
import {NavbarColorsComponent} from '../navbar-colors/navbar-colors.component';
import {NavbarFullscreenComponent} from '../navbar-fullscreen/navbar-fullscreen.component';
import {NavbarResponsiveComponent} from '../navbar-responsive/navbar-responsive.component';
import {NavbarNotificationsComponent} from '../navbar-notifications/navbar-notifications.component';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'amt-navbar',
  imports: [
    NavbarProfileComponent,
    NavbarLanguagesComponent,
    NavbarThemeComponent,
    NavbarColorsComponent,
    NavbarFullscreenComponent,
    NavbarResponsiveComponent,
    NavbarNotificationsComponent,
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuService: AmtMenuService = inject(AmtMenuService);

  public toggleMobileMenu(): void {
    this.menuService.toggleSidebar();
  }
}
