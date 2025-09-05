import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private token: string | null = localStorage.getItem('token');
  private apiUrl = 'http://localhost:5000/api/departments';
  public departments: Department[] = [];

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    const headers = this.token
      ? new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
      : undefined;
    console.log(this.token);
    return this.http.get<Department[]>(this.apiUrl, { headers });
  }

  deleteDepartment(departmentId: string): Observable<void> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/delete/${departmentId}`;
    return this.http.delete<void>(url, { headers });
  }

  updateDepartment(department: Department): Observable<Department> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/update/${department.id}`;
    return this.http.put<Department>(url, department, { headers });
  }

  addDepartment(department: Department): Observable<string> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/add`;
    return this.http.post<string>(url, department, { headers });
  }
}
