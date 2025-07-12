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
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';
@Component({
  selector: 'app-replace',
  templateUrl: './replace.page.html',
  styleUrls: ['./replace.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    HeaderComponent,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class ReplacePage {
  constructor() {}
}
