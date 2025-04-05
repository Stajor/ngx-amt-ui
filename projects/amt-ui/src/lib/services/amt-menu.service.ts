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
  pagesMenu       = signal<AmtMenuItem[]>([]);
  showMobileMenu  = signal(false);
  user            = signal<AmtProfileUser | null>(null);
  profileMenu     = signal<AmtProfileItem[]>([]);
  languages       = signal<AmtProfileLanguage[]>([]);
  router = inject(Router);
  languageChanged$ = new Subject<AmtProfileLanguage>();

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


  // private _showMobileMenu = signal(false);
  // private _pagesMenu = signal<MenuItem[]>([]);
  // private _subscription = new Subscription();
  //
  // constructor(private router: Router) {
  //   /** Set dynamic menu */
  //   this._pagesMenu.set(Menu.pages);
  //
  //   let sub = this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       /** Expand menu base on active route */
  //       this._pagesMenu().forEach((menu) => {
  //         let activeGroup = false;
  //         menu.items.forEach((subMenu) => {
  //           const active = this.isActive(subMenu.route);
  //           subMenu.expanded = active;
  //           subMenu.active = active;
  //           if (active) activeGroup = true;
  //           if (subMenu.children) {
  //             this.expand(subMenu.children);
  //           }
  //         });
  //         menu.active = activeGroup;
  //       });
  //     }
  //   });
  //   this._subscription.add(sub);
  // }
  //
  // get showSideBar() {
  //   return this.showSidebar();
  // }
  // get showMobileMenu() {
  //   return this._showMobileMenu();
  // }

  // set showSideBar(value: boolean) {
  //   this.showSidebar.set(value);
  // }
  // set showMobileMenu(value: boolean) {
  //   this._showMobileMenu.set(value);
  // }

  // public toggleSubMenu(submenu: SubMenuItem) {
  //   submenu.expanded = !submenu.expanded;
  // }
  //
  // private expand(items: Array<any>) {
  //   items.forEach((item) => {
  //     item.expanded = this.isActive(item.route);
  //     if (item.children) this.expand(item.children);
  //   });
  // }
  //

  //
  // ngOnDestroy(): void {
  //   this._subscription.unsubscribe();
  // }
}
