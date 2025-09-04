import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string | null = localStorage.getItem('token');
  private apiUrl = 'http://localhost:5000/api/users/all';
  public departments: User[] = [];

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    const headers = this.token
      ? new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
      : undefined;
    return this.http.get<User[]>(this.apiUrl, { headers });
  }
}
