import {inject, Injectable, signal} from '@angular/core';
import {
  AmtMenuItem,
  AmtProfileItem,
  AmtProfileLanguage,
  AmtProfileUser,
  AmtSubMenuItem
} from '../interfaces/amt-menu.interface';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmtMenuService {
  showSideBar     = signal(true);
  profileMenu     = signal<AmtProfileItem[]>([]);
  pagesMenu       = signal<AmtMenuItem[]>([]);
  languages       = signal<AmtProfileLanguage[]>([]);
  user            = signal<AmtProfileUser | null>(null);
  router = inject(Router);
  languageChanged$ = new Subject<AmtProfileLanguage>();

  constructor() {
    if (window.innerWidth <= 767) {
      this.showSideBar.set(false);
    }
  }

  public toggleSidebar() {
    this.showSideBar.set(!this.showSideBar());
  }

  public toggleSubMenu(submenu: AmtSubMenuItem) {
    submenu.expanded = !submenu.expanded;
  }

  public isActive(instruction: any): boolean {
    return this.router.isActive(this.router.createUrlTree([instruction]), {
      paths: 'subset',
      queryParams: 'subset',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  public toggleMenu(menu: any) {
    this.showSideBar.set(true);
    menu.expanded = !menu.expanded;
  }
}
