import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronForward,
  chevronBack,
} from 'ionicons/icons';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonButton,
    IonIcon,
  ],
})
export class OnboardingPage implements OnInit {
  @ViewChild('skipButton', { static: true }) skipButton!: ElementRef;
  @ViewChild('swiperContainer', { static: true }) swiperContainer!: ElementRef;
  swiperModules = [];
  constructor() {
    addIcons({
      chevronForward,
      chevronBack,
    });
  }
  ngOnInit() {
    this.initSwiper();
    setTimeout(() => {
      const skipButton = document.querySelector('.skip-button') as HTMLElement;
      if (skipButton) skipButton.style.display = 'block';
    }, 100);
  }
  private async initSwiper() {
    const { register } = await import('swiper/element/bundle');
    register();
  }
  onSlideChange(event: any) {
    const swiper = event.target.swiper;
    const activeIndex = swiper.activeIndex;
    const totalSlides = swiper.slides.length;
    const skipButton = document.querySelector('.skip-button') as HTMLElement;
    if (skipButton) {
      if (activeIndex === totalSlides - 1) skipButton.style.display = 'none';
      else skipButton.style.display = 'block';
    }
  }
  goToNextSlide() {
    const swiper = this.swiperContainer.nativeElement.swiper;
    swiper.slideNext();
  }
  goToPrevSlide() {
    const swiper = this.swiperContainer.nativeElement.swiper;
    swiper.slidePrev();
  }
}
