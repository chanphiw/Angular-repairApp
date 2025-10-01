import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  pricingPlans = [
    {
      name: 'Basic',
      price: '$49',
      period: 'per service',
      description: 'Perfect for simple repairs',
      features: [
        'Screen protector installation',
        'Basic cleaning',
        'Software updates',
        'Minor adjustments',
        '30-day warranty'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Standard',
      price: '$99',
      period: 'per service',
      description: 'Most popular choice',
      features: [
        'Screen replacement',
        'Battery replacement',
        'Charging port repair',
        'Camera repair',
        '90-day warranty',
        'Priority support'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Premium',
      price: '$199',
      period: 'per service',
      description: 'For complex repairs',
      features: [
        'Motherboard repair',
        'Water damage repair',
        'Data recovery',
        'Complete diagnostics',
        '1-year warranty',
        'Express service',
        'Free pickup & delivery'
      ],
      popular: false,
      color: 'indigo'
    }
  ];

  devicePricing = [
    { device: 'iPhone Screen Replacement', price: '$99 - $299' },
    { device: 'Samsung Screen Replacement', price: '$89 - $249' },
    { device: 'iPad Screen Replacement', price: '$149 - $399' },
    { device: 'MacBook Battery Replacement', price: '$129 - $199' },
    { device: 'Laptop Hard Drive Upgrade', price: '$79 - $149' },
    { device: 'Gaming Console Repair', price: '$69 - $149' },
    { device: 'Smart Watch Screen', price: '$49 - $99' },
    { device: 'Water Damage Repair', price: '$99 - $299' }
  ];

  faqs = [
    {
      question: 'Do you offer a warranty on repairs?',
      answer: 'Yes! All our repairs come with a warranty ranging from 30 days to 1 year depending on the service.'
    },
    {
      question: 'How long does a typical repair take?',
      answer: 'Most repairs are completed within 24-48 hours. Express service is available for an additional fee.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, debit cards, and digital payments including Apple Pay and Google Pay.'
    },
    {
      question: 'Can I get a quote before the repair?',
      answer: 'Absolutely! We provide free diagnostics and quotes before proceeding with any repair work.'
    }
  ];
}
