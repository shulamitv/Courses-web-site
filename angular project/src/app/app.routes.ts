import { Routes } from '@angular/router';
import { SignUpComponent } from './enter-page/sign-up/sign-up.component';
import { LoginComponent } from './enter-page/login/login.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './course/all-courses/all-courses.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AddCourseComponent } from './add-course/add-course.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'SignUp/:name', component: SignUpComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'addCourse', component: AddCourseComponent },
    { path: 'Courses', component: CoursesComponent },
    { path: 'courseDetails/:id', component: CourseDetailsComponent },
];

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './enter-page/login/login.component';
// // import { SignupComponent } from './enter-page/sign-up/sign-up.component';
// import { AddCourseComponent } from './add-course/add-course.component';
// import { CoursesComponent } from './course/all-courses/all-courses.component';
// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'signup', component: SignupComponent },
//   { path: 'add-course', component: AddCourseComponent },
//   { path: 'courses', component: CoursesComponent },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
// ];