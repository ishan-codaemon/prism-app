import { Component, Input, OnInit, inject } from '@angular/core';
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
import { reorderThree, chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
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
    IonImg,
  ],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  @Input() showBack: boolean = false;
  
  private menuController = inject(MenuController);
  private router = inject(Router);
  
  constructor() {
    addIcons({
      reorderThree,
      chevronBackOutline,
    });
  }
  ngOnInit() {
    if (this.showBack === false) {
      // Only auto-detect if not explicitly set
      this.showBack = this.router.url !== '/home';
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.showBack = this.router.url !== '/home';
        });
    }
  }
  openMenu() {
    this.menuController.open();
  }
}
