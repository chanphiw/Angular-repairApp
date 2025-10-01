import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: '15+ years of experience in electronics repair industry'
    },
    {
      name: 'Sarah Johnson',
      position: 'Lead Technician',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Certified expert in smartphone and laptop repairs'
    },
    {
      name: 'Mike Chen',
      position: 'Technical Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Specialist in gaming console and tablet repairs'
    },
    {
      name: 'Emily Davis',
      position: 'Customer Service Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Dedicated to providing exceptional customer experience'
    }
  ];

  milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a small workshop and a big dream' },
    { year: '2015', title: '10,000+ Repairs', description: 'Reached our first major milestone' },
    { year: '2020', title: 'Expanded Services', description: 'Added new repair services and locations' },
    { year: '2025', title: 'Industry Leader', description: 'Recognized as the top repair service provider' }
  ];

  values = [
    { icon: '🎯', title: 'Quality First', description: 'We never compromise on quality of service or parts' },
    { icon: '💡', title: 'Innovation', description: 'Staying updated with latest repair techniques' },
    { icon: '🤝', title: 'Integrity', description: 'Transparent pricing and honest recommendations' },
    { icon: '❤️', title: 'Customer Care', description: 'Your satisfaction is our top priority' }
  ];
}
