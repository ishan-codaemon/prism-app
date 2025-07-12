import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet, SideMenuComponent, HeaderComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  standalone: true,
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
