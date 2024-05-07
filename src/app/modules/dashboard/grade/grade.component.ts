import { Component } from '@angular/core';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrl: './grade.component.scss'
})
export class GradeComponent {

}
