import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonText,
  IonGrid,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  hardwareChipOutline,
  cubeOutline,
  listOutline,
  pencilOutline,
  cardOutline,
  personOutline,
  mailOutline,
} from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonText,
    RouterLink,
    IonGrid,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  ],
  standalone: true,
})
export class HomePage {
  constructor() {
    addIcons({
      hardwareChipOutline,
      cubeOutline,
      listOutline,
      pencilOutline,
      cardOutline,
      personOutline,
      mailOutline,
    });
  }
}
