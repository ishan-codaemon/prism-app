import { Component } from '@angular/core';
import { IonList, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-menu-popover',
  template: `
    <ion-list>
      <ion-item>
        <ion-label>Dark Mode</ion-label>
        <ion-toggle [(ngModel)]="isDarkMode" (ionChange)="toggleDarkMode()"></ion-toggle>
      </ion-item>
    </ion-list>
  `,
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonToggle]
})
export class MenuPopoverComponent {
  isDarkMode: boolean;

  constructor() {
    this.isDarkMode = document.body.classList.contains('dark');
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.isDarkMode);
  }
}
