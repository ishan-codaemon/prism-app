import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonIcon,
  MenuController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  hardwareChipOutline,
  cubeOutline,
  listOutline,
  pencilOutline,
  cardOutline,
  personOutline,
  mailOutline,
} from 'ionicons/icons';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonToggle,
    IonIcon,
    FormsModule,
    RouterLink,
  ],
})
export class SideMenuComponent {
  @Input() isDarkMode: boolean = false;
  @Input() onDarkModeChange!: (isDark: boolean) => void;
  private menuController = inject(MenuController);
  constructor() {
    addIcons({
      homeOutline,
      hardwareChipOutline,
      cubeOutline,
      listOutline,
      pencilOutline,
      cardOutline,
      personOutline,
      mailOutline,
    });
  }
  async closeMenu() {
    await this.menuController.close();
  }
  toggleDarkMode() {
    this.onDarkModeChange(this.isDarkMode);
  }
}
