import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Імпортуй HttpClient
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
  role: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    console.log('AuthService initialized');
  }

  login(email: string, password: string): void {
    console.log(email, password);

    this.http.post<LoginResponse>('http://localhost:5000/api/login', { email, password })
      .subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.role = response.role; 
          localStorage.setItem('token', response.token); 
          localStorage.setItem('userId', response.id); 
          this.redirectUser();
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
  }

  private redirectUser(): void {
    if (this.role === 'admin') {
      this.router.navigate(['/admin/home']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }
}