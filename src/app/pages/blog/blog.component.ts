import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {MainSectionComponent} from "../../components/main-section/main-section.component";

@Component({
  selector: 'app-blog',
  standalone: true,
    imports: [
        HeaderComponent,
        MainSectionComponent
    ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
