import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  };

  showPassword = false;
  showConfirmPassword = false;
  isLoading = false;
  passwordStrength = 0;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  checkPasswordStrength() {
    const password = this.registerData.password;
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    this.passwordStrength = strength;
  }

  getPasswordStrengthText(): string {
    if (this.passwordStrength === 0) return '';
    if (this.passwordStrength <= 2) return 'Weak';
    if (this.passwordStrength <= 3) return 'Medium';
    if (this.passwordStrength <= 4) return 'Strong';
    return 'Very Strong';
  }

  getPasswordStrengthColor(): string {
    if (this.passwordStrength <= 2) return '#ef4444';
    if (this.passwordStrength <= 3) return '#f59e0b';
    if (this.passwordStrength <= 4) return '#10b981';
    return '#059669';
  }

  passwordsMatch(): boolean {
    return this.registerData.password === this.registerData.confirmPassword;
  }

  onSubmit() {
    if (!this.passwordsMatch()) {
      alert('Passwords do not match!');
      return;
    }

    if (!this.registerData.agreeToTerms) {
      alert('Please agree to terms and conditions');
      return;
    }

    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Register data:', this.registerData);
      alert('Registration successful! Please check your email for verification.');
      this.isLoading = false;
      // Reset form
      this.registerData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
      };
      this.passwordStrength = 0;
    }, 1500);
  }

  // Social registration methods
  registerWithGoogle() {
    alert('Google registration coming soon!');
  }

  registerWithFacebook() {
    alert('Facebook registration coming soon!');
  }

  registerWithApple() {
    alert('Apple registration coming soon!');
  }
}
