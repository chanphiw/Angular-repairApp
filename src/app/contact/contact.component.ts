import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    message: ''
  };

  submitted = false;

  contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Repair Street, Tech City, TC 12345',
      link: 'https://maps.google.com'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'info@repairapp.com',
      link: 'mailto:info@repairapp.com'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: 'Mon-Sat: 9AM - 7PM, Sun: 10AM - 5PM',
      link: ''
    }
  ];

  deviceTypes = [
    'Smartphone',
    'Laptop',
    'Tablet',
    'Gaming Console',
    'Smart Watch',
    'Audio Equipment',
    'Other'
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    this.submitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.submitted = false;
      this.contactForm = {
        name: '',
        email: '',
        phone: '',
        device: '',
        issue: '',
        message: ''
      };
    }, 3000);
  }
}
