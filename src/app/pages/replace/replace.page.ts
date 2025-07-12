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
import { HeaderComponent } from '../../shared/header.component';
@Component({
  selector: 'app-replace',
  templateUrl: './replace.page.html',
  styleUrls: ['./replace.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
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
