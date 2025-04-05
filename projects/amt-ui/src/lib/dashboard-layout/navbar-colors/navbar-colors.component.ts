import {Component, inject} from '@angular/core';
import {AmtThemeService} from '../../services/amt-theme.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {AmtThemeColor} from '../../interfaces/amt-theme.inteface';

@Component({
  selector: 'amt-navbar-colors',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar-colors.component.html',
  styleUrl: './navbar-colors.component.css'
})
export class NavbarColorsComponent {
  amtThemeService = inject(AmtThemeService);

  themeColors: {name: AmtThemeColor, code: string}[] = [
    {name: 'base', code: '#e11d48'},
    {name: 'yellow', code: '#f59e0b'},
    {name: 'green', code: '#22c55e'},
    {name: 'blue', code: '#3b82f6'},
    {name: 'orange', code: '#ea580c'},
    {name: 'red', code: '#cc0022'},
    {name: 'violet', code: '#6d28d9'}
  ];

  toggleThemeColor(color: AmtThemeColor) {
    this.amtThemeService.color = color;
  }
}
