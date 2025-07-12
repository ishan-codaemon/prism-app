import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonTextarea,
  IonLabel,
  IonCard,
  IonCardContent,
  IonText,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    HeaderComponent,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonCard,
    IonCardContent,
  ],
})
export class UpdatePage {
  constructor() {}
}
