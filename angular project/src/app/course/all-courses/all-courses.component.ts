
import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { NgFor, NgIf } from '@angular/common';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class CoursesComponent implements OnInit {
  public coursesList!: Course[];
  public filteredCourses: Course[] | undefined;
  public selectedCourse: Course | undefined;
  public learningModeFilter: string | undefined;
  public categories: Category[] = [];
  public categoryFilter?: string;
  constructor(private router: Router, private _courseService: CourseService, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    this._courseService.getCourseFromServer().subscribe({
      next: (res) => {
        this.coursesList = res;
        this.filteredCourses = res;
      }
    });
    this._categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      }
    })
  }

  public showDetails(c: Course) {
    if (sessionStorage.getItem("user.name")) {
      this.router.navigate(['/courseDetails', c.id]);
    } else {
      alert("You are not allowed to watch the courses without registering on the website");
    }
  }

  public filterCourses(): void {
    this.filteredCourses = this.coursesList;
    if (this.categoryFilter) {
      this.filteredCourses = this.filteredCourses?.filter(course => course.category?.categoryName === this.categoryFilter);
    }
    if (this.learningModeFilter) {
      this.filteredCourses = this.filteredCourses?.filter(course => course.learningMode == this.learningModeFilter);
    }
  }
}

