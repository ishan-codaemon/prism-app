import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonText, IonButton, IonGrid } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, IonText, IonButton, RouterLink, IonGrid],
  standalone: true
})
export class HomePage {
  constructor() {}
}