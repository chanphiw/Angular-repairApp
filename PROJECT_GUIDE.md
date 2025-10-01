# RepairApp - Angular Application

## 📱 Overview
RepairApp เป็นเว็บแอปพลิเคชันสำหรับบริการซ่อมอุปกรณ์อิเล็กทรอนิกส์ ที่สร้างด้วย Angular 20 และ Tailwind CSS

## 🎯 Components

### 1. **Welcome Component** (Home Page)
- **Path:** `/` หรือ `/welcome`
- **Features:**
  - Hero section พร้อมภาพพื้นหลัง
  - แสดงคุณสมบัติหลักของบริการ (Features)
  - แสดงบริการที่ให้บริการ (Services)
  - Call-to-action section
  - Footer พร้อม quick links

### 2. **About Us Component**
- **Path:** `/about-us`
- **Features:**
  - เรื่องราวของบริษัท
  - Timeline ของความสำเร็จ (Milestones)
  - ค่านิยมของบริษัท (Values)
  - ทีมงาน (Team Members)

### 3. **Our Services Component**
- **Path:** `/our-services`
- **Features:**
  - รายละเอียดบริการทั้งหมด (6 บริการ)
  - ราคาเริ่มต้นของแต่ละบริการ
  - คุณสมบัติของแต่ละบริการ
  - ขั้นตอนการซ่อม (Repair Process)

### 4. **Pricing Component**
- **Path:** `/pricing`
- **Features:**
  - แพ็กเกจบริการ 3 แบบ (Basic, Standard, Premium)
  - ตารางราคาตามอุปกรณ์
  - FAQ section
  - Price Match Guarantee

### 5. **Contact Component**
- **Path:** `/contact`
- **Features:**
  - ฟอร์มติดต่อ (Contact Form)
  - ข้อมูลการติดต่อ (Address, Phone, Email)
  - แผนที่ (Map placeholder)
  - Quick links และ Social media

### 6. **Login Component** 🆕
- **Path:** `/login`
- **Features:**
  - Login form พร้อม email/password validation
  - Social login buttons (Google, Facebook, Apple)
  - Remember me checkbox
  - Forgot password link
  - Password visibility toggle
  - Responsive design with beautiful gradient background
  - Link to register page

### 7. **Register Component** 🆕
- **Path:** `/register`
- **Features:**
  - Registration form with full validation
  - Password strength indicator
  - Password confirmation matching
  - Social registration buttons (Google, Facebook, Apple)
  - Terms and conditions checkbox
  - Phone number validation
  - Benefits showcase
  - Link to login page

### 8. **Navbar Component**
- **Features:**
  - Navigation menu สำหรับทุกหน้า
  - Responsive (Mobile & Desktop)
  - Active link highlighting
  - **Login & Sign Up buttons** 🆕
  - Beautiful gradient with glass morphism effect

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

### Development Server
```bash
npm start
```
เปิดเบราว์เซอร์ไปที่ `http://localhost:4200`

## 📁 Project Structure
```
repair-app/
├── src/
│   ├── app/
│   │   ├── about-us/           # About Us component
│   │   ├── our-services/       # Services component
│   │   ├── pricing/            # Pricing component
│   │   ├── contact/            # Contact component
│   │   ├── welcome/            # Home/Welcome component
│   │   ├── login/              # Login component 🆕
│   │   ├── register/           # Register component 🆕
│   │   ├── navbar/             # Navigation component
│   │   ├── app.routes.ts       # Routing configuration
│   │   ├── app.ts              # Main app component
│   │   └── app.html            # Main app template
│   ├── assets/
│   │   └── images/             # Image assets
│   ├── index.html
│   └── styles.css              # Global styles
├── package.json
└── README.md
```

## 🎨 Styling
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Custom CSS** - Additional animations and styles

## 🔗 Navigation Links

### Main Navigation
- Home: `/`
- About Us: `/about-us`
- Services: `/our-services`
- Pricing: `/pricing`
- Contact: `/contact`
- **Login: `/login`** 🆕
- **Register: `/register`** 🆕

### Internal Links
- ทุก component มี cross-links ไปยังหน้าอื่นๆ
- CTA buttons link ไป Contact หรือ Pricing
- Footer มี Quick Links ทุกหน้า

## 📱 Responsive Design
- ✅ Mobile-friendly
- ✅ Tablet optimized
- ✅ Desktop responsive
- ✅ Touch-friendly navigation

## 🎯 Features
- ✅ Standalone components (Angular 20)
- ✅ Reactive routing
- ✅ Form validation
- ✅ Smooth animations
- ✅ Image optimization
- ✅ SEO-friendly structure
- ✅ **User authentication UI (Login/Register)** 🆕
- ✅ **Password strength indicator** 🆕
- ✅ **Social login integration ready** 🆕
- ✅ **Dynamic Page Titles (Auto-change per route)** 🆕
- ✅ **SEO Meta Tags** 🆕

## 🛠️ Technologies
- **Frontend:** Angular 20
- **Styling:** Tailwind CSS 4.x + DaisyUI
- **Icons:** Emoji icons
- **Images:** Unsplash API
- **Forms:** Angular FormsModule

## 📝 TODO
- [ ] เพิ่ม backend API integration
- [ ] เพิ่ม authentication
- [ ] เพิ่ม booking system
- [ ] เพิ่ม payment integration
- [ ] เพิ่ม admin dashboard

## 📄 License
Private - All rights reserved

## 👨‍💻 Author
RepairApp Development Team
