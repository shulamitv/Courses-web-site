import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
 public getCourseFromServer():Observable<Course[]>{
    console.log("get course")
    return this.http.get<Course[]>('https://localhost:7215/api/Course');
  }
  public getCourseById(id:number):Observable<Course>{
    return this.http.get<Course>(`https://localhost:7215/api/Course/${id}`);
  }
  public addCourse(course:Course):Observable<Course>{
    return this.http.post<Course>('https://localhost:7215/api/Course', course)
  }
  updateCourse(id: number, course: Course): Observable<any> {
    return this.http.put(`https://localhost:7215/api/Course/${id}`, course);
  }
 }

