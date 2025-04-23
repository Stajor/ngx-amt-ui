import {Component, inject} from '@angular/core';
import {AmtThemeService} from '../../services/amt-theme.service';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'amt-navbar-theme',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar-theme.component.html',
  styleUrl: './navbar-theme.component.css'
})
export class NavbarThemeComponent {
  amtThemeService = inject(AmtThemeService);

  toggleThemeMode() {
    this.amtThemeService.toggleMode();
  }
}
