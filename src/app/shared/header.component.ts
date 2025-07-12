import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonImg,
  MenuController,
} from '@ionic/angular/standalone';
import { reorderThree } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonImg,
    NgIf,
  ],
  standalone: true,
})
export class HeaderComponent {
  @Input() showBack: boolean = false;
  constructor(private menuController: MenuController) {
    addIcons({ reorderThree });
  }
  async openMenu() {
    await this.menuController.open();
  }
}
