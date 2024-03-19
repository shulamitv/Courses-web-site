import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  public getCategories(): Observable<Category[]> {
    console.log("get category")
    return this.http.get<Category[]>('https://localhost:7215/api/Category');
  }
  public getCategotyById(id: number): Observable<Category> {
    return this.http.get<Category>(`https://localhost:7215/api/Category/${id}`);
  }
  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>('https://localhost:7215/api/Category', category)
  }
}