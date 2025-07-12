import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';
@Component({
  selector: 'app-track',
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonText,
  ],
})
export class TrackPage {
  constructor() {}
}
