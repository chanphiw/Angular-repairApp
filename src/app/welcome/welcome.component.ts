import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  features = [
    {
      icon: '🔧',
      title: 'Expert Repairs',
      description: 'Professional repair services for all your electronic devices with certified technicians.'
    },
    {
      icon: '⚡',
      title: 'Fast Service',
      description: 'Quick turnaround times to get your devices back up and running in no time.'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing and no hidden fees.'
    },
    {
      icon: '🛡️',
      title: 'Warranty Protected',
      description: 'All repairs come with a comprehensive warranty for your peace of mind.'
    }
  ];

  services = [
    'Smartphone Repair',
    'Laptop & Computer Repair',
    'Tablet Repair',
    'Gaming Console Repair',
    'Smart Watch Repair',
    'Audio Equipment Repair'
  ];
}