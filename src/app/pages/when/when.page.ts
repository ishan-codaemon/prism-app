import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';

@Component({
  selector: 'app-when',
  templateUrl: './when.page.html',
  styleUrls: ['./when.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent
  ]
})
export class WhenPage {
  constructor() { }
}
