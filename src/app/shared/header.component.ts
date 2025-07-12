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
    IonTitle,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    NgIf,
  ],
  standalone: true,
})
export class HeaderComponent {
  @Input() showBack: boolean = false;
  isDarkMode: boolean = false;
  constructor(private menuController: MenuController) {
    addIcons({ reorderThree });
    this.initializeTheme();
  }
  private initializeTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.isDarkMode = storedTheme === 'dark';
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkMode = prefersDark.matches;
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
    this.toggleDarkMode(this.isDarkMode);
  }
  toggleDarkMode(shouldBeDark?: boolean) {
    this.isDarkMode = shouldBeDark ?? !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    const root = document.documentElement;
    if (this.isDarkMode) root.setAttribute('color-theme', 'dark');
    else root.setAttribute('color-theme', 'light');
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  async openMenu() {
    await this.menuController.open();
  }
}
