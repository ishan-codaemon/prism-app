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
  selector: 'app-see',
  templateUrl: './see.page.html',
  styleUrls: ['./see.page.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonCardContent, IonList, IonItem, IonLabel],
})
export class SeePage {
  constructor() {}
}
