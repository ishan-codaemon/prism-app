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
import { HeaderComponent } from '../shared/header.component';
import { addIcons } from 'ionicons';
import {
  hardwareChipOutline,
  cubeOutline,
  listOutline,
  calendarOutline,
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
    HeaderComponent,
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
      calendarOutline,
      cardOutline,
      personOutline,
      mailOutline,
    });
  }
}
