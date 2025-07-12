import { Component } from '@angular/core';
import {
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonTextarea,
  IonLabel,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonCard,
    IonCardContent
  ]
})
export class UpdatePage {
  constructor() {}
}
