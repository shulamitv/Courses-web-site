import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.module';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',

})
export class SignUpComponent implements OnInit {
  public usersList: User[] | undefined;
  public addForm2!: FormGroup;
  public user!: User;
  constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService) {
  }
  ngOnInit(): void {
    this.addForm2 = new FormGroup({
      name: new FormControl(""),
      password: new FormControl(),
      address: new FormControl(),
      email: new FormControl(),
    });
    let name = this.route.snapshot.paramMap.get('name');
    this.addForm2.patchValue({
      name: name
    });
  }
  public save() {
    this.user = this.addForm2.value;

    console.log(this.user);
    this._userService.getUserByName(this.addForm2.value.name).subscribe((data) => {
      alert("this name user alredy is exist")
      this.addForm2.patchValue({
        name: ''
      });
    },
      (err: any) => {
        if (err.status === 404) {
          this._userService.post(this.user)
            .subscribe((data) => {
              sessionStorage.setItem("user.name", this.user.name ?? '');
              this.router.navigate(['/Courses']);
            },
              (err: any) => {
                console.error("", err)
              });
        } else {
          console.error("An error occurred:", err);
        }
      }
    )
  }
}
