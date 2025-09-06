import { Injectable } from '@angular/core';
import { ExpenseType } from '../models/expenseType.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseTypeService {
  private token: string | null = localStorage.getItem('token');
  private apiUrl = 'http://localhost:5000/api/expense-types';
  public types: ExpenseType[] = [];

  constructor(private http: HttpClient) {}

  getExpenseTypes(): Observable<ExpenseType[]> {
    const headers = this.token
          ? new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
          : undefined;
        return this.http.get<ExpenseType[]>(this.apiUrl, { headers });
  }

  deleteExpenseType(typeId: string): Observable<void> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/delete/${typeId}`;
    return this.http.delete<void>(url, { headers });
  }
  updateExpenseType(type: ExpenseType): Observable<ExpenseType> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
      console.log('Updating type with ID:', type.id);
    const url = `${this.apiUrl}/update/${type.id}`;
    return this.http.put<ExpenseType>(url, type, { headers });
  }
  addExpenseType(type: ExpenseType): Observable<string> {
    const headers = this.token
      ? new HttpHeaders({
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        })
      : new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl}/add`;
    return this.http.post<string>(url, type, { headers });
  }
}
