import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent,
  IonListHeader,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-replace',
  templateUrl: './replace.page.html',
  styleUrls: ['./replace.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardContent,
    IonListHeader,
  ],
})
export class ReplacePage {
  constructor() {}
}
