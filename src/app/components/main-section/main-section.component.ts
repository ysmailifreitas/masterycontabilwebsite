import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ImageSliderComponent} from "../image-slider/image-slider.component";
import {SlideInterface} from "../../imageSlider/types/slide-interface";

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ImageSliderComponent
  ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  slides: SlideInterface[] = [
    {
      url: 'assets/check-list.png',
      flex: 'flex-row-reverse',
      title: 'Contabilidade Consultiva',
      subTitle: 'Contabilidade útil para a gestão do seu negócio, como deve ser.',
      content: 'Cumprindo o verdadeiro papel da contabilidade: contribuir para o seu crescimento.',
      bgColor: 'rgb(214,182,182)'
    },
    {
      url: 'assets/calculator.png',
      flex: 'flex-row',
      title: 'Contabilidade Consultiva',
      subTitle: 'Contabilidade útil para a gestão do seu negócio, como deve ser.',
      content: 'Cumprindo o verdadeiro papel da contabilidade: contribuir para o seu crescimento.',
      bgColor: 'rgb(171,165,245)',
      color: "white"
    },
    {
      url: 'assets/check-list.png',
      flex: 'flex-row-reverse',
      title: 'Contabilidade Consultiva',
      subTitle: 'Contabilidade útil para a gestão do seu negócio, como deve ser.',
      content: 'Cumprindo o verdadeiro papel da contabilidade: contribuir para o seu crescimento.',
      bgColor: 'rgb(238,237,222)'
    },
    {
      url: 'assets/calculator.png',
      flex: 'flex-row',
      title: 'Contabilidade Consultiva',
      subTitle: 'Contabilidade útil para a gestão do seu negócio, como deve ser.',
      content: 'Cumprindo o verdadeiro papel da contabilidade: contribuir para o seu crescimento.',
      bgColor: '#77c7e3'
    }
  ]
}
