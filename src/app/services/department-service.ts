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
    return this.http.get<Department[]>(this.apiUrl, { headers });
  }
}
