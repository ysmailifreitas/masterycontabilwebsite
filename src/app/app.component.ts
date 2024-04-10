import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, HeaderComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/*
* TODO estilizacao dos cards
* TODO paleta de cores
* TODO carousel na home
* TODO conteúdo real do site
* TODO responsividade
* TODO enviar o formulario
* TODO estilizacao dos cards
* TODO estilizacao dos cards
* TODO criar o blog
*/
export class AppComponent {
  title = 'mastery-contabil';
  @HostListener('window:mouseleave', ['$event.target']) onMouseLeave() {
    console.log('left')
  }
}

