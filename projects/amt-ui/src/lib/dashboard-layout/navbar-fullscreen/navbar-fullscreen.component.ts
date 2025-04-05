import {Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import screenfull from 'screenfull';

@Component({
  selector: 'amt-navbar-fullscreen',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navbar-fullscreen.component.html',
  styleUrl: './navbar-fullscreen.component.css'
})
export class NavbarFullscreenComponent implements OnInit {
  isFullscreen: boolean = false;

  ngOnInit(): void {
    screenfull.onchange(() => (this.isFullscreen = screenfull.isFullscreen));
  }

  toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.isFullscreen ? screenfull.exit().then() : screenfull.request().then();
    }
  }
}
