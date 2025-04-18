import {Component, input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {AmtThemeService} from '../services/amt-theme.service';

@Component({
  selector: 'amt-auth-layout',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  standalone: true,
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  logoUrl = input<string>();
  bannerUrl = input<string>();

  constructor(public themeService: AmtThemeService) {}
}
