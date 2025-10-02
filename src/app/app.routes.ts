import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error';

export const routes: Routes = [
  { 
    path: '', 
    component: WelcomeComponent,
    title: 'Home - RepairApp | Professional Device Repair Services'
  },
  { 
    path: 'welcome', 
    component: WelcomeComponent,
    title: 'Welcome-RepairApp'
  },
  { 
    path: 'about-us', 
    component: AboutUsComponent,
    title: 'About Us'
  },
  { 
    path: 'our-services', 
    component: OurServicesComponent,
    title: 'Our Services'
  },
  { 
    path: 'pricing', 
    component: PricingComponent,
    title: 'Pricing'
  },
  { 
    path: 'contact', 
    component: ContactComponent,
    title: 'Contact Us'
  },
  { 
    path: 'login', 
    component: LoginComponent,
    title: 'Login Page'
  },
  { 
    path: 'register', 
    component: RegisterComponent,
    title: 'Register Page'
  },
  { 
    path: 'error', 
    component: ErrorComponent,
    title: 'Error | Page Not Found'
  },
  { 
    path: '**', 
    component: ErrorComponent,
    title: 'Error 404 | Page Not Found'
  }
];
