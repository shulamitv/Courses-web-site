import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.module';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  public getUserFromServer():Observable<User[]>{
    console.log("get")
    return this.http.get<User[]>('https://localhost:7215/api/User');
  }
public getUserByName(name: string): Observable<User>{
  console.log("get by name")
  return this.http.get<User>(`https://localhost:7215/api/User/${name}`);
}
public post(u: User):Observable<any>{
  return this.http.post('https://localhost:7215/api/User',u)
}
}