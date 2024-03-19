import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { NgIf } from '@angular/common';
// import { LearningMode } from '../models/course.model';
import { IconPipe } from "../icon.pipe";
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-details',
  // standalone: false,
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  constructor(private route: ActivatedRoute, public _courseService: CourseService, private _categoryService: CategoryService, private router: Router) { }
  public course!: Course;
  public courseId?: number;
  public categories: Category[] = [];
  // public x=this.course?.learningMode;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.courseId = parseInt(id);
      console.log(this.courseId);
      this._courseService.getCourseById(this.courseId).subscribe(
        (course) => {
          this.course = course;
        },
        (error) => {
          console.error('Error fetching course:', error);
        }
      );
    }

    else {
      // Handle the case where 'id' is null
    }

    this._categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      }
    })
  

  }

  editCourse(course: Course) {
   
      // this.router.navigate(['addCourse'], { queryParams: { data: JSON.stringify(course), editMode: true } });
      this.router.navigate(['addCourse'], { queryParams: { data: JSON.stringify(course), syllabus: JSON.stringify(course.syllabus), editMode: true } });

  }
  public showDetails(c: Course) {
    if (sessionStorage.getItem("courseName")) {
      this.router.navigate(['/courseDetails', c.id]);
    } else {
      alert("You are not allowed to watch the courses without registering on the website");
    }
  }
  isLecturer(): boolean {

    if (sessionStorage.getItem("courseName") == this?.course?.courseName) 
      return true;
    else 
      return false;
  }








  // getLearningModeString(learningMode: LearningMode | undefined): string {
  //   if (learningMode === undefined) {
  //     return 'Undefined';
  //   }
  //   return learningMode.toString();
  // }
}