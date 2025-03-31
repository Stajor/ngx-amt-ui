import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'amt-error404',
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.css'
})
export class Error404Component {

}
