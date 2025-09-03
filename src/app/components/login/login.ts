import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService) {} 

  login() {
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    this.authService.login(this.email, this.password);
    // this.router.navigate(['/home']);
  }
}