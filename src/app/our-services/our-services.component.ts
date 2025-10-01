import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
  services = [
    {
      title: 'Smartphone Repair',
      icon: '📱',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Screen replacement, battery replacement, charging port repair, camera repair, and more.',
      features: ['Screen Replacement', 'Battery Service', 'Water Damage Repair', 'Software Issues'],
      price: 'Starting from $49'
    },
    {
      title: 'Laptop & Computer Repair',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Hardware upgrades, virus removal, data recovery, motherboard repair, and performance optimization.',
      features: ['Hardware Upgrade', 'Virus Removal', 'Data Recovery', 'Performance Boost'],
      price: 'Starting from $79'
    },
    {
      title: 'Tablet Repair',
      icon: '📲',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'iPad and Android tablet repairs including screen, battery, and charging issues.',
      features: ['Screen Repair', 'Battery Replacement', 'Charging Issues', 'Button Repair'],
      price: 'Starting from $59'
    },
    {
      title: 'Gaming Console Repair',
      icon: '🎮',
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'PlayStation, Xbox, Nintendo Switch repairs. HDMI port, controller, and more.',
      features: ['HDMI Port Repair', 'Controller Fix', 'Overheating Issues', 'Software Update'],
      price: 'Starting from $69'
    },
    {
      title: 'Smart Watch Repair',
      icon: '⌚',
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Apple Watch, Samsung Galaxy Watch, and other smartwatch repairs.',
      features: ['Screen Replacement', 'Battery Service', 'Water Resistance', 'Strap Replacement'],
      price: 'Starting from $39'
    },
    {
      title: 'Audio Equipment Repair',
      icon: '🎧',
      image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Headphones, speakers, and audio device repairs. Cable replacement and driver repair.',
      features: ['Cable Replacement', 'Driver Repair', 'Bluetooth Fix', 'Sound Quality'],
      price: 'Starting from $29'
    }
  ];

  whyChooseUs = [
    { icon: '✅', title: 'Certified Technicians', description: 'All our technicians are certified and experienced' },
    { icon: '⚡', title: 'Quick Turnaround', description: 'Most repairs completed within 24-48 hours' },
    { icon: '🔧', title: 'Quality Parts', description: 'We use only genuine or high-quality replacement parts' },
    { icon: '🛡️', title: 'Warranty Included', description: 'All repairs come with our 1-year warranty' }
  ];
}
