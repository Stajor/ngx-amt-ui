import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {NgClass} from '@angular/common';
import {AmtProfileLanguage} from '../../interfaces/amt-menu.interface';
import {AmtMenuService} from '../../services/amt-menu.service';

@Component({
  selector: 'amt-navbar-languages',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgClass
  ],
  templateUrl: './navbar-languages.component.html',
  styleUrl: './navbar-languages.component.css'
})
export class NavbarLanguagesComponent {
  public amtMenuService = inject(AmtMenuService);

  changeLanguage(language: AmtProfileLanguage): void {
    this.amtMenuService.languageChanged$.next(language);
  }
}
