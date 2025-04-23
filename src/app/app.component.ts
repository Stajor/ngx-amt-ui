import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AmtThemeService} from '../../projects/amt-ui/src/lib/services/amt-theme.service';
import {Directionality} from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(amtThemeService: AmtThemeService, dir: Directionality) {
    console.log('assa', dir)

    amtThemeService.title = 'example';
    amtThemeService.mode  = 'light';
    amtThemeService.color = 'yellow';
    amtThemeService.logo = 'logo.png';
  }
}
