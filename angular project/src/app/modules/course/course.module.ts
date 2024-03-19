// import { NgModule, Pipe } from '@angular/core';
// import { CommonModule, DatePipe, NgFor, NgForOf, NgIf } from '@angular/common';
// import { AddCourseComponent } from '../../add-course/add-course.component';
// import { CoursesComponent } from '../../course/all-courses/all-courses.component';
// import { CourseDetailsComponent } from '../../course-details/course-details.component';
// import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { PasswordModule } from 'primeng/password';
// import { ButtonModule } from 'primeng/button';
// import { IconPipe } from '../../icon.pipe';
// import { pipe } from 'rxjs';

// @NgModule({
//   declarations: [AddCourseComponent, CourseDetailsComponent,CoursesComponent
//   ],
//   imports: [
//     CommonModule, ReactiveFormsModule,FormsModule, PasswordModule,NgFor, ButtonModule,IconPipe, DatePipe, Selection
//   ],
//   exports: [
//     CoursesComponent
//   ]
// })
// export class CourseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CoursesComponent } from '../../course/all-courses/all-courses.component';
import { IconPipe } from '../../icon.pipe';
import { AddCourseComponent } from '../../add-course/add-course.component';
import { CourseDetailsComponent } from '../../course-details/course-details.component';

@NgModule({
    declarations: [AddCourseComponent, CourseDetailsComponent, CoursesComponent],
    exports: [CoursesComponent] 
    ,
    imports: [
        CommonModule,
        ReactiveFormsModule, 
        PasswordModule,
        ButtonModule,
        IconPipe,
        FormsModule
    ]
})
export class CourseModule { }