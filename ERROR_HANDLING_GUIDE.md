# Error Handling Component Guide

## Overview
Error component สำหรับจัดการและแสดง error pages ต่างๆ เช่น 404 Not Found, 500 Internal Server Error และ error อื่นๆ ที่เกิดขึ้นในแอปพลิเคชัน

## Features

### 1. **404 Page Not Found**
- แสดงเมื่อผู้ใช้พยายามเข้าถึง URL ที่ไม่มีอยู่ในระบบ
- มี wildcard route (`**`) ที่จะดัก URL ทั้งหมดที่ไม่ตรงกับ routes อื่น

### 2. **Custom Error Messages**
- สามารถส่ง error code, title และ message แบบ custom ได้
- รองรับ error codes: 404, 500, 403, etc.

### 3. **Beautiful UI Design**
- Gradient background animation
- Glass morphism alert card
- Animated icons และ floating elements
- Responsive design สำหรับทุกขนาดหน้าจอ

### 4. **User Actions**
- **Back to Home** - กลับไปหน้าแรก
- **Go Back** - กลับไปหน้าก่อนหน้า
- **Contact Support** - ติดต่อทีมสนับสนุน

## Usage

### Basic Usage (404 Error)
เมื่อผู้ใช้กรอก URL ที่ไม่มีอยู่:
```
http://localhost:4200/invalid-page
```
จะแสดง Error 404 Page โดยอัตโนมัติ

### Navigate to Error Page Programmatically
```typescript
import { Router } from '@angular/router';

constructor(private router: Router) {}

// Navigate to error page with custom error
navigateToError() {
  this.router.navigate(['/error'], {
    state: {
      errorCode: '500',
      errorTitle: 'Internal Server Error',
      errorMessage: 'Something went wrong on our end. Please try again later.'
    }
  });
}
```

### Error Types Supported

#### 404 - Page Not Found
```typescript
{
  errorCode: '404',
  errorTitle: 'Page Not Found',
  errorMessage: 'Oops! The page you are looking for does not exist or has been moved.'
}
```

#### 500 - Internal Server Error
```typescript
{
  errorCode: '500',
  errorTitle: 'Internal Server Error',
  errorMessage: 'Something went wrong on our end. Please try again later.'
}
```

#### 403 - Forbidden
```typescript
{
  errorCode: '403',
  errorTitle: 'Access Denied',
  errorMessage: 'You do not have permission to access this resource.'
}
```

#### 503 - Service Unavailable
```typescript
{
  errorCode: '503',
  errorTitle: 'Service Unavailable',
  errorMessage: 'The service is temporarily unavailable. Please try again in a few moments.'
}
```

## File Structure

```
src/app/error/
├── error.html          # Template with alert UI
├── error.css           # Styles with animations
└── error.ts            # Component logic
```

## Component Properties

### error.ts
```typescript
export class ErrorComponent implements OnInit {
  errorCode: string = '404';           // Error code to display
  errorTitle: string = 'Page Not Found';  // Error title
  errorMessage: string = '...';        // Error description
  
  goBack() {                          // Navigate to previous page
    this.location.back();
  }
}
```

## Routing Configuration

### app.routes.ts
```typescript
{
  path: 'error',
  component: ErrorComponent,
  title: 'Error - RepairApp | Page Not Found'
},
{
  path: '**',                         // Wildcard route for 404
  component: ErrorComponent,
  title: 'Error 404 - RepairApp | Page Not Found'
}
```

## Styling Features

### Animations
1. **Background Animation** - Gradient shifting animation
2. **Card Slide Up** - Entry animation for alert card
3. **Icon Bounce** - Warning icon bouncing effect
4. **Pulse Effect** - Pulsing circle behind icon
5. **Floating Elements** - Decorative tool icons floating
6. **Border Glow** - Animated gradient border

### Colors
- **Primary Gradient**: `#667eea → #764ba2 → #f093fb`
- **Text Colors**: 
  - Title: `#1f2937`
  - Message: `#6b7280`
  - Links: `#667eea`

### Responsive Breakpoints
- **Desktop**: Full size (> 1023px)
- **Tablet**: Reduced sizes (768px - 1023px)
- **Mobile**: Stacked buttons, smaller text (< 768px)
- **Small Mobile**: Compact layout (< 375px)

## Accessibility

### Features
1. **Focus States** - Clear focus indicators for keyboard navigation
2. **Reduced Motion** - Respects `prefers-reduced-motion` setting
3. **Semantic HTML** - Proper heading hierarchy
4. **ARIA Labels** - Screen reader friendly

### Focus States
```css
.btn-home:focus,
.btn-back:focus,
.help-link:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}
```

## Testing Error Pages

### Method 1: Direct URL
```
http://localhost:4200/nonexistent-page
http://localhost:4200/random-url
http://localhost:4200/abc123
```

### Method 2: Navigation
```typescript
// In any component
this.router.navigate(['/error']);
```

### Method 3: Custom Error
```typescript
this.router.navigate(['/error'], {
  state: {
    errorCode: '500',
    errorTitle: 'Server Error',
    errorMessage: 'Unable to connect to the server.'
  }
});
```

## Future Enhancements

### Planned Features
1. **Error Logging** - Log errors to backend
2. **Analytics** - Track error occurrences
3. **Auto-retry** - Retry failed requests
4. **Offline Detection** - Special UI for offline state
5. **Multiple Languages** - i18n support for error messages

### API Integration
```typescript
// Future: Log error to backend
logError(error: ErrorInfo) {
  this.http.post('/api/errors', error).subscribe();
}
```

## Best Practices

### Do's ✅
- Always provide clear, user-friendly error messages
- Include actionable buttons (Go Back, Home)
- Use appropriate error codes
- Test all error scenarios
- Make error pages responsive

### Don'ts ❌
- Don't expose technical details to users
- Don't use redirect for error handling (breaks back button)
- Don't forget to set page title
- Don't make error pages confusing
- Don't forget accessibility features

## Support

For issues or questions:
- Check routing configuration in `app.routes.ts`
- Verify ErrorComponent is properly imported
- Test with different error codes
- Check browser console for errors
- Contact support team if needed

## Examples

### Example 1: Handle API Error
```typescript
this.apiService.getData().subscribe({
  error: (err) => {
    this.router.navigate(['/error'], {
      state: {
        errorCode: err.status.toString(),
        errorTitle: 'Unable to Load Data',
        errorMessage: 'There was a problem loading the data. Please try again.'
      }
    });
  }
});
```

### Example 2: Handle Authentication Error
```typescript
if (!this.authService.isAuthenticated()) {
  this.router.navigate(['/error'], {
    state: {
      errorCode: '403',
      errorTitle: 'Access Denied',
      errorMessage: 'Please log in to access this page.'
    }
  });
}
```

### Example 3: Maintenance Mode
```typescript
if (maintenanceMode) {
  this.router.navigate(['/error'], {
    state: {
      errorCode: '503',
      errorTitle: 'Under Maintenance',
      errorMessage: 'We are currently performing maintenance. Please check back soon.'
    }
  });
}
```

## Version History

- **v1.0.0** - Initial release with 404 error page
  - Animated UI with gradient background
  - Responsive design
  - Navigation buttons
  - Custom error messages support

---

**Created**: October 2, 2025  
**Last Updated**: October 2, 2025  
**Component**: ErrorComponent  
**Location**: `/src/app/error/`
