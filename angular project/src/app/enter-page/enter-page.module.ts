// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import {LoginComponent}from './login/login.component';
// @NgModule({
//   declarations: [LoginComponent ],
//   imports: [
//     CommonModule,
//     ReactiveFormsModule
//   ],
//   exports: [LoginComponent
//   ]
// })
// export class LoginModule { }
import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf, NgIf } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from '../app.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../nav-bar/nav-bar.component';
import { CourseModule } from '../modules/course/course.module';

// import { routes } from '../app.routes';
// import { AllCoursesComponent } from '../all-courses/all-courses.component';
@NgModule({
  declarations: [SignUpComponent,LoginComponent,HomeComponent],
  imports: [
    CommonModule, ReactiveFormsModule ,FormsModule,PasswordModule,ButtonModule,NgFor
  ],
  exports:[LoginComponent]
})
export class EnterPageModule { }