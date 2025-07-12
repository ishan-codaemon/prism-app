import { Component } from '@angular/core';
import { IonContent, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton],
})
export class PayPage {
  constructor() {}
}
