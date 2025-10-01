import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  showPassword = false;
  isLoading = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login data:', this.loginData);
        alert('Login successful! (Demo mode)');
        this.isLoading = false;
        // Reset form
        this.loginData = {
          email: '',
          password: '',
          rememberMe: false
        };
      }, 1500);
    }
  }

  // Social login methods
  loginWithGoogle() {
    alert('Google login coming soon!');
  }

  loginWithFacebook() {
    alert('Facebook login coming soon!');
  }

  loginWithApple() {
    alert('Apple login coming soon!');
  }
}
