import { Component } from '@angular/core';
import {MainSectionComponent} from "../../components/main-section/main-section.component";
import {EspecialidadesSectionComponent} from "../../components/especialidades-section/especialidades-section.component";
import {SegmentosSectionComponent} from "../../components/segmentos-section/segmentos-section.component";
import {ContatoSectionComponent} from "../../components/contato-section/contato-section.component";
import {HeaderComponent} from "../../components/header/header.component";
import {VantagensSectionComponent} from "../../components/vantagens-section/vantagens-section.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainSectionComponent,
    EspecialidadesSectionComponent,
    SegmentosSectionComponent,
    ContatoSectionComponent,
    HeaderComponent,
    VantagensSectionComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
