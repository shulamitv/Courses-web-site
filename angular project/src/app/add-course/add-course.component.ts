
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CourseService } from '../services/course.service';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseForm!: FormGroup;
  categories: Category[] = [];
  selectedCategory: Category | undefined;
  constructor(private formBuilder: FormBuilder, private courseService: CourseService, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) { }
  public courses: Course[] | undefined;
  public selectedCourse: Course | undefined;
  public courseData!: Course ;
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (res) => {
        this.categories = res;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
    this.courseService.getCourseFromServer().subscribe(
      (res) => {
        this.courses = res
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    )
    this.courseForm = this.formBuilder.group({
      courseName: ['', [Validators.required, Validators.minLength(3)]],
      category: [null, Validators.required],
      numLessons: [null, [Validators.required, Validators.min(2)]],
      startDate: [null, Validators.required],
      syllabus: this.formBuilder.array([], this.syllabusValidator()),
      learningMode: [undefined, Validators.required],
      lecturerId: [null, Validators.required],
      picture: [null, Validators.required]
    });
    this.addSyllabus();
    this.selectedCourse = this.courses?.find(c => c.courseName == this.courseForm.value.courseName)

    this.route.queryParams.subscribe(params => {
      this.courseData = JSON.parse(params['data']);
      this.populateFormWithData(this.courseData);
      const editMode = params['editMode'];
      if (editMode) {
        console.log("edit!!!");
        this.onSubmit = this.updateCourse;
      }
    });
  }
  get syllabus() {
    return this.courseForm.get('syllabus') as FormArray;
  }

  addSyllabus() {
    this.syllabus.push(this.formBuilder.control(''));
  }
  removeSyllabus(index: number) {
    this.syllabus.removeAt(index);
  }
  onChangeSyllabus(index: number) {
    const silavoControl = this.syllabus.at(index);
    if (silavoControl && !silavoControl.value) {
      this.removeSyllabus(index);
    } else if (index === this.syllabus.length - 1) {
      this.addSyllabus();
    }
  }
  syllabusValidator(): any {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const silavosArray = control.value as string[];
      for (const silavo of silavosArray) {
        if (!silavo) {
          return { 'emptySilavo': true };
        }
      }
      return null;
    };
  }

  onSubmit() {
    for (let i = this.syllabus.length - 1; i >= 0; i--) {
      if (this.syllabus.at(i)?.value === '') {
        this.removeSyllabus(i);
      }
    }

    if (this.courseForm) {
      this.courseForm.value.learningMode = parseInt(this.courseForm.value.learningMode);
      this.courseService.addCourse(this.courseForm.value).subscribe(
        (response) => {
          alert("Course added successfully!!!");
          this.router.navigate(['/Courses']);
          console.log('Course added successfully:', response);
        },
        (error) => {
          console.error('Error adding course:', error);
        }
      );
    } else {
      console.error('Form is invalid. Cannot add course.');
    }
  }

  populateFormWithData(courseData: any) {
    this.courseForm.patchValue(courseData);
  }
  updateCourse() {
    sessionStorage.setItem("courseName", this.courseForm.get('courseName')?.value ?? '');

    for (let i = this.syllabus.length - 1; i >= 0; i--) {
      if (this.syllabus.at(i)?.value === '') {
        this.removeSyllabus(i);
      }
    }
    if (this.courseForm.valid) {

      this.courseForm.value.learningMode = parseInt(this.courseForm.value.learningMode);
      this.courseService.updateCourse(this.courseData.id, this.courseForm.value).subscribe(
        (response) => {
          alert("Course updated successfully!!!");
          this.router.navigate(['/Courses']);
          console.log('Course updated successfully:', response);
        },
        (error) => {
          console.error('Error updating course:', error);
        }
      );
    } else {
      console.error('Form is invalid. Cannot update course.');
    }
  }
}
