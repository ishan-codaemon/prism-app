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
  MenuController,
} from '@ionic/angular/standalone';
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
    FormsModule,
    RouterLink,
  ],
})
export class SideMenuComponent {
  @Input() isDarkMode: boolean = false;
  @Input() onDarkModeChange!: (isDark: boolean) => void;
  
  private menuController = inject(MenuController);
  
  async closeMenu() {
    await this.menuController.close();
  }
  toggleDarkMode() {
    this.onDarkModeChange(this.isDarkMode);
  }
}
