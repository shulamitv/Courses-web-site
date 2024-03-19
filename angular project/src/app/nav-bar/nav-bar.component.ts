import { Component, Inject, OnInit, Optional } from '@angular/core';
import { UserService } from '../enter-page/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
  ,standalone: true
})
export class NavbarComponent {

  constructor(private router: Router) {
  }

  logout() {
    sessionStorage.setItem("user.name", '');
    sessionStorage.setItem("courseName", '');
  }
  toCourse() {
    this.router.navigate(['Courses'])
  }
  toAddCourse() {
    this.router.navigate(['addCourse'])
  }
  toSignUp() {
    this.router.navigate(['SignUp'])
  }
}
