import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonList,
  IonItem,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';
@Component({
  selector: 'app-see',
  templateUrl: './see.page.html',
  styleUrls: ['./see.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonList,
    IonItem,
    IonItemGroup,
    IonItemDivider,
    IonLabel,
  ],
})
export class SeePage {
  constructor() {}
}
