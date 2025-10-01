# 📄 Dynamic Page Title Configuration

## ✨ Overview
RepairApp ใช้ระบบ **Dynamic Page Title** ที่เปลี่ยนแปลงอัตโนมัติตาม route ที่ผู้ใช้เข้าชม เพื่อเพิ่ม SEO และ User Experience

---

## 🎯 How It Works

### Angular Router Title Strategy
Angular จะอัพเดท page title อัตโนมัติเมื่อมีการกำหนด `title` property ใน route configuration

```typescript
// app.routes.ts
{ 
  path: 'login', 
  component: LoginComponent,
  title: 'Login - RepairApp | Sign In to Your Account'
}
```

เมื่อผู้ใช้เข้าหน้า `/login` → Browser title จะเปลี่ยนเป็น:
```
Login - RepairApp | Sign In to Your Account
```

---

## 📋 Page Titles

### 🏠 Home Page
**Route:** `/` or `/welcome`
```
Home - RepairApp | Professional Device Repair Services
```
**Purpose:** หน้าแรก, Landing page

---

### ℹ️ About Us Page
**Route:** `/about-us`
```
About Us - RepairApp | Our Story & Team
```
**Purpose:** เรื่องราว, ทีมงาน, ค่านิยม

---

### ⚙️ Services Page
**Route:** `/our-services`
```
Our Services - RepairApp | Phone, Tablet & Laptop Repair
```
**Purpose:** บริการที่ให้บริการทั้งหมด

---

### 💰 Pricing Page
**Route:** `/pricing`
```
Pricing - RepairApp | Transparent & Affordable Rates
```
**Purpose:** แพ็กเกจ, ราคา, FAQ

---

### 📞 Contact Page
**Route:** `/contact`
```
Contact Us - RepairApp | Get in Touch Today
```
**Purpose:** ฟอร์มติดต่อ, ข้อมูลการติดต่อ

---

### 👤 Login Page
**Route:** `/login`
```
Login - RepairApp | Sign In to Your Account
```
**Purpose:** เข้าสู่ระบบ

---

### ✨ Register Page
**Route:** `/register`
```
Register - RepairApp | Create New Account
```
**Purpose:** สมัครสมาชิก

---

## 🎨 Title Format

### Pattern:
```
[Page Name] - RepairApp | [Description/CTA]
```

### Components:
1. **Page Name** - ชื่อหน้าที่ชัดเจน (Login, Pricing, Services)
2. **Brand Name** - RepairApp (สม่ำเสมอทุกหน้า)
3. **Description/CTA** - คำอธิบายหรือ Call-to-Action

---

## 🔍 SEO Benefits

### ✅ Better Search Engine Ranking
- Descriptive titles ช่วยให้ Google เข้าใจเนื้อหา
- Unique titles สำหรับแต่ละหน้า
- Keywords ที่เกี่ยวข้อง (Repair, Services, Pricing)

### ✅ Improved User Experience
- ผู้ใช้รู้ว่าอยู่หน้าไหนจาก browser tab
- ง่ายต่อการจดจำและแชร์
- Professional และน่าเชื่อถือ

### ✅ Social Media Sharing
- Title แสดงเมื่อแชร์ใน Facebook, Twitter
- ดูมืออาชีพและน่าสนใจ

---

## 📱 Browser Tab Display

### Example:
```
┌──────────────────────────────────────┐
│ 🔧 Login - RepairApp | Sign In to... │  ← Browser Tab
└──────────────────────────────────────┘
```

### On Different Pages:
```
📱 Mobile View:
┌─────────────────────┐
│ 🔧 Login - Repair...│
└─────────────────────┘

💻 Desktop View:
┌──────────────────────────────────────────────────┐
│ 🔧 Login - RepairApp | Sign In to Your Account  │
└──────────────────────────────────────────────────┘
```

---

## 🛠️ Implementation

### 1. Route Configuration (`app.routes.ts`)
```typescript
export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    title: 'Login - RepairApp | Sign In to Your Account'
  },
  // ... other routes
];
```

### 2. Default Title (`index.html`)
```html
<title>RepairApp - Professional Device Repair Services</title>
```
- Used when app first loads
- Fallback if route has no title

### 3. Meta Tags (`index.html`)
```html
<meta name="description" content="Professional repair services...">
<meta name="keywords" content="repair, phone repair, tablet repair...">
```
- Enhances SEO
- Provides context to search engines

---

## 🎯 Title Guidelines

### ✅ DO:
- Keep titles under 60 characters for full display
- Include brand name (RepairApp)
- Use clear, descriptive language
- Add relevant keywords
- Include CTA or benefit

### ❌ DON'T:
- Use all caps
- Stuff keywords
- Make titles too long
- Use special characters excessively
- Copy titles from other pages

---

## 📊 Analytics Benefits

### Google Analytics
- Track which pages users visit
- See bounce rates per page title
- Understand user journey

### Search Console
- See which titles rank best
- Optimize titles based on click-through rate
- Monitor search performance

---

## 🔄 Dynamic Title Update Flow

```
User navigates to /login
        ↓
Angular Router activates route
        ↓
Reads title from route config
        ↓
Updates document.title
        ↓
Browser tab shows new title
        ↓
✅ "Login - RepairApp | Sign In..."
```

---

## 🌐 Multi-Language Support (Future)

### Possible Enhancement:
```typescript
{ 
  path: 'login',
  component: LoginComponent,
  title: translate('login.title'),
  data: {
    titleKey: 'login.title',
    defaultTitle: 'Login - RepairApp'
  }
}
```

### Thai Version:
```
เข้าสู่ระบบ - RepairApp | ลงชื่อเข้าใช้บัญชีของคุณ
```

---

## 📝 Customization

### To Change a Title:
1. Open `app.routes.ts`
2. Find the route
3. Update the `title` property
4. Save and reload

### Example:
```typescript
// Before
{ path: 'login', title: 'Login - RepairApp' }

// After
{ path: 'login', title: 'Sign In - RepairApp | Access Your Dashboard' }
```

---

## 🧪 Testing

### Manual Testing:
1. Navigate to each page
2. Check browser tab title
3. Verify title is descriptive and correct

### Test Checklist:
- [ ] Home page title
- [ ] About Us title
- [ ] Services title
- [ ] Pricing title
- [ ] Contact title
- [ ] Login title
- [ ] Register title

---

## 📈 SEO Optimization Tips

### 1. **Include Keywords**
```
✅ Login - RepairApp | Sign In to Your Account
❌ Login Page
```

### 2. **Add Value Proposition**
```
✅ Pricing - RepairApp | Transparent & Affordable Rates
❌ Pricing
```

### 3. **Keep Brand Consistent**
```
✅ All titles include "- RepairApp"
❌ Different branding on each page
```

---

## 🎉 Benefits Summary

| Feature | Benefit |
|---------|---------|
| **Dynamic Titles** | Better UX - users know where they are |
| **SEO Optimized** | Higher search rankings |
| **Brand Consistency** | Professional appearance |
| **Descriptive** | Clear value proposition |
| **Unique Per Page** | Better indexing by search engines |
| **CTA Included** | Encourages action |

---

## 🔗 Related Files

- `app.routes.ts` - Route configurations with titles
- `index.html` - Default fallback title
- `app.config.ts` - Router provider configuration

---

## 📚 Examples in Action

### User Journey:
```
1. Opens app → "RepairApp - Professional Device Repair Services"
2. Clicks "Login" → "Login - RepairApp | Sign In to Your Account"
3. Clicks "Pricing" → "Pricing - RepairApp | Transparent & Affordable Rates"
4. Clicks "Register" → "Register - RepairApp | Create New Account"
```

### Browser Tabs:
```
Tab 1: 🔧 Home - RepairApp | Professional Device...
Tab 2: 🔧 Login - RepairApp | Sign In to Your...
Tab 3: 🔧 Pricing - RepairApp | Transparent & Aff...
```

---

**Status:** ✅ Implemented  
**Date:** October 1, 2025  
**Version:** 1.0 - Dynamic Page Titles

---

## 🎯 Quick Reference

| Page | Title |
|------|-------|
| Home | Home - RepairApp \| Professional Device Repair Services |
| Welcome | Welcome - RepairApp \| Your Trusted Repair Partner |
| About | About Us - RepairApp \| Our Story & Team |
| Services | Our Services - RepairApp \| Phone, Tablet & Laptop Repair |
| Pricing | Pricing - RepairApp \| Transparent & Affordable Rates |
| Contact | Contact Us - RepairApp \| Get in Touch Today |
| Login | Login - RepairApp \| Sign In to Your Account |
| Register | Register - RepairApp \| Create New Account |
