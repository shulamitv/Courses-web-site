
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, Validators } from '@angular/forms'; // Import FormsModule
import { UserService } from '../user.service';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user.module';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usersList: User[] | undefined;
  public addForm!: FormGroup;
  showCourseNameInput: boolean = false;

  user!: User;
  constructor(private router: Router, private _userService: UserService) {
  }
  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(""),
      password: new FormControl(),
      courseName: new FormControl()
    });
  }
  public save() {
    this._userService.getUserByName(this.addForm?.value.name)
      .subscribe((data) => {
        this.user = data;
        if (this.user?.password === this.addForm?.value.password) {
          console.log("Password is correct. Navigating to courses...");
          this.router.navigate(['Courses']);
          sessionStorage.setItem("user.name", this.user.name ?? '');
          if (this.addForm.get('courseName')) {
            sessionStorage.setItem("courseName", this.addForm.get('courseName')?.value ?? '');
          }

        } else {
          alert("Password is invalid");
          console.log("Password is invalid");
        }
      },
        (err: any) => {
          if (err.status === 404) {
            console.log("User not found. Redirecting to sign up page...");
            this.router.navigate(['/SignUp', this.addForm?.value.name]);
          } else {
            console.error("An error occurred:", err);
          }
        });
  }
  toggleCourseNameInput() {
    this.showCourseNameInput = !this.showCourseNameInput;
    if (this.showCourseNameInput) {
      this.addForm.addControl('courseName', new FormControl(''));

    } else {
      this.addForm.removeControl('courseName');
    }
  }
} 