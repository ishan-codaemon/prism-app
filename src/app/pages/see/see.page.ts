import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';

@Component({
  selector: 'app-see',
  templateUrl: './see.page.html',
  styleUrls: ['./see.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent
  ]
})
export class SeePage {
  constructor() { }
}
