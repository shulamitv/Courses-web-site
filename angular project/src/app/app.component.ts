import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './enter-page/login/login.component';
import { EnterPageModule } from './enter-page/enter-page.module';
import { IconPipe } from './icon.pipe';
import { Course } from './models/course.model';
// import { AllModule } from './modules/all/all.module';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { CourseModule } from './modules/course/course.module';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [RouterOutlet, EnterPageModule,NavbarComponent ]
})
export class AppComponent {
  title = 'AngularProject';
}