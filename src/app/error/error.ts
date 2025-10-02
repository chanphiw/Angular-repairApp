import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class ErrorComponent implements OnInit {
  errorCode: string = '404';
  errorTitle: string = 'Page Not Found';
  errorMessage: string = 'Oops! The page you are looking for does not exist or has been moved.';

  constructor(
    private router: Router,
    private location: Location,
    private titleService: Title
  ) {}

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('Error 404 - RepairApp | Page Not Found');

    // Check if there's error data passed through router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      const state = navigation.extras.state;
      this.errorCode = state['errorCode'] || '404';
      this.errorTitle = state['errorTitle'] || 'Page Not Found';
      this.errorMessage = state['errorMessage'] || 'Oops! The page you are looking for does not exist or has been moved.';
    }
  }

  goBack() {
    this.location.back();
  }
}
