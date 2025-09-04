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
}
