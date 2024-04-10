import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SlideInterface} from "../../imageSlider/types/slide-interface";
import {animate, AnimationBuilder, style} from "@angular/animations";
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit{
  @Input() slides: SlideInterface[] = [];
  currentIndex: number = 0;
  animationPlayer: any;
  autoPlayInterval: any;
  autoPlayPaused: boolean = false

  @ViewChild('slideContainer') slideContainer!: ElementRef;

  constructor(private animationBuilder: AnimationBuilder) {}

  getCurrentSlideUrl(): string {
    return `${this.slides[this.currentIndex].url}`;
  }
  ngOnInit() {
    this.startAutoPlay();
  }

  startAutoPlay() {
    if(!this.autoPlayPaused){
      this.autoPlayInterval = setInterval(() => {
        this.goToNextSlide(null);
      }, 3000);
    }
  }


  goToPreviousSlide() {
    this.playSlideAnimation(false);
    setTimeout(() => {
      this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    }, 2000);
  }

  goToNextSlide(e:any) {
    if(e){
    }
    this.playSlideAnimation(true);
    setTimeout(() => {
      this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
    }, 400);
  }

  setCurrentSlide(index: number) {
    this.currentIndex = index;
  }

  private playSlideAnimation(isNext: boolean) {
    const animationFactory = isNext? this.animationBuilder.build([
      animate('400ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 })),
      animate('1ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 })),
      animate('400ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 })),
    ]): this.animationBuilder.build([
      animate('400ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 })),
      animate('1ms ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 })),
      animate('400ms ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 })),
    ]);
    const animationPlayer = animationFactory.create(this.slideContainer.nativeElement);
    animationPlayer.play();
  }
}
