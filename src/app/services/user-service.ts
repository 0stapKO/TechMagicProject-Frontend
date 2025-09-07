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

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    const headers = this.token
      ? new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
      : undefined;
    return this.http.get<User[]>(this.apiUrl, { headers });
  }

  deleteUser(userId: string): Observable<void> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `http://localhost:5000/api/users/delete/${userId}`;
    return this.http.delete<void>(url, { headers });
  }

  updateUser(user: User): Observable<User> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `http://localhost:5000/api/users/update/${user.id}`;
      return this.http.put<User>(url, user, {headers})
  }

  addUser(user: User): Observable<string> {
    const headers = this.token
      ? new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
      const url = `http://localhost:5000/api/users/add`;
      return this.http.post<string>(url, user, {headers});
  }
}
