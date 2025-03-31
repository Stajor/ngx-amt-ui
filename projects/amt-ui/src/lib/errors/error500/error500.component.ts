import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'amt-error500',
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './error500.component.html',
  styleUrl: './error500.component.css'
})
export class Error500Component {

}
