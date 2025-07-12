import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-when',
  templateUrl: './when.page.html',
  styleUrls: ['./when.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonList, IonItem, IonLabel],
})
export class WhenPage {
  constructor() {}
}
