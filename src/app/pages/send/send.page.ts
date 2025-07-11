import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../../shared/header.component';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    HeaderComponent
  ]
})
export class SendPage {
  constructor() { }
}
