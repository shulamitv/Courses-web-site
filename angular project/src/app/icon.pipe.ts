import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './models/course.model';
@Pipe({
  name: 'icon',
  standalone: true,
})
export class IconPipe implements PipeTransform {
  transform(value: number | undefined): string{
    switch (value) {
      case 1:
        return "../assets/1.jpg";
      case 2:
        return '../assets/2.jpg';
      default:
        return "../assets/3.jpg";
    }
  }
}