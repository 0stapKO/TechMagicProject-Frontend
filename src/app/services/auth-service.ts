import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): void {
    console.log(email, password);
    // localStorage.setItem('token', token);

    // const payload = JSON.parse(atob(token.split('.')[1]));
    // this.role = payload.role;
      // this.role = token;
    this.role = password;
    if (this.role === 'admin') {
      console.log('admin');
      this.router.navigate(['/admin/home']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  getRole(): string | null {
    return this.role;
  }

  isAdmin(): boolean {
    return this.role === 'admin';
  }
}
