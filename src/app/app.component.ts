import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet, MenuController } from '@ionic/angular/standalone';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouteReuseStrategy, Router, NavigationEnd } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp,
    IonRouterOutlet,
    SideMenuComponent,
    HeaderComponent,
    CommonModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  standalone: true,
})
export class AppComponent {
  isDarkMode: boolean = false;
  showHeader: boolean = true;
  isMenuOpen: boolean = false;
  
  private router = inject(Router);
  private menuController = inject(MenuController);
  
  constructor() {
    this.initializeTheme();
    this.setupRouteListener();
    this.setupMenuListener();
  }
  private setupRouteListener() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showHeader = !event.url.startsWith('/') || event.url !== '/';
      });
  }

  private setupMenuListener() {
    // Listen for menu state changes using ionDidOpen and ionDidClose events
    document.addEventListener('ionDidOpen', (event: any) => {
      if (event.target.tagName === 'ION-MENU') {
        this.isMenuOpen = true;
      }
    });
    
    document.addEventListener('ionDidClose', (event: any) => {
      if (event.target.tagName === 'ION-MENU') {
        this.isMenuOpen = false;
      }
    });
  }

  async onOverlayClick() {
    await this.menuController.close();
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
