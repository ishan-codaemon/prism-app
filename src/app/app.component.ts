import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';
import { SideMenuComponent } from './shared/side-menu.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonContent, SideMenuComponent],
})
export class AppComponent {
  isDarkMode: boolean = false;

  constructor() {
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
}
