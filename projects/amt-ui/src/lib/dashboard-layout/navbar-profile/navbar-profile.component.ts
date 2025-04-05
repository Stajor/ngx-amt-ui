import {Component, inject} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {AmtMenuService} from '../../services/amt-menu.service';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'amt-navbar-profile',
  imports: [
    MatMenuModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './navbar-profile.component.html',
  styleUrl: './navbar-profile.component.css',
})
export class NavbarProfileComponent {
  public amtMenuService = inject(AmtMenuService);
}
