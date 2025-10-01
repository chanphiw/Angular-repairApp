# Background Images for RepairApp# Images Directory



## 🖼️ วิธีเพิ่มรูปพื้นหลังเองThis directory contains background images for the RepairApp welcome page.



### ขั้นตอนที่ 1: ดาวน์โหลดรูปฟรี## Required Images:



**แหล่งรูปฟรีที่แนะนำ:**1. `hero-bg.jpg` - Hero section background (1920x1080 recommended)

- [Unsplash](https://unsplash.com/) - รูปคุณภาพสูง ฟรี 100%   - Should be a tech/repair related image

- [Pixabay](https://pixabay.com/) - รูปฟรี ไม่ต้องสมัคร   - Suggested: Tools, electronics, workshop scene

- [Pexels](https://pexels.com/) - รูปฟรี คุณภาพดี

## Free Image Sources:

### ขั้นตอนที่ 2: ค้นหารูปที่ต้องการ

- Pixabay: https://pixabay.com/

**คำค้นหาที่แนะนำ:**- Unsplash: https://unsplash.com/

- "electronics repair"- Pexels: https://pexels.com/

- "smartphone repair"

- "computer workshop"## Download Instructions:

- "technology repair"

- "laptop repair"1. Go to Pixabay.com

- "mobile phone repair"2. Search for "electronics repair" or "technology workshop"

- "electronic technician"3. Download a free image (1920x1080 or larger)

4. Rename it to `hero-bg.jpg`

### ขั้นตอนที่ 3: ดาวน์โหลดและบันทึก5. Place it in this directory



1. เลือกรูปที่ชอบ## Alternative Solution:

2. ดาวน์โหลดขนาด **1920x1080 พิกเซลขึ้นไป**

3. เปลี่ยนชื่อไฟล์เป็น `hero-bg.jpg`If you don't want to download images, you can replace the background-image with CSS gradients by removing the background-image property entirely.
4. วางไฟล์ใน folder นี้: `src/assets/images/hero-bg.jpg`

### ขั้นตอนที่ 4: อัปเดตโค้ด

เปิดไฟล์ `welcome.component.html` และเปลี่ยนจาก:
```html
<img src="https://images.unsplash.com/photo-..." alt="Repair Workshop">
```

เป็น:
```html
<img src="assets/images/hero-bg.jpg" alt="Repair Workshop">
```

### 📏 ข้อมูลขนาดรูปที่แนะนำ

| ชื่อไฟล์ | ขนาด | จุดประสงค์ |
|---------|------|-----------|
| hero-bg.jpg | 1920x1080px | Hero section background |
| features-bg.jpg | 1920x1080px | Features section (optional) |
| services-bg.jpg | 1920x1080px | Services section (optional) |

### 🎨 เคล็ดลับการเลือกรูป

1. **สีที่เข้ากัน:** เลือกรูปที่มีโทนสีน้ำเงิน-ม่วง หรือสีที่เข้ากับธีมของแอป
2. **ความละเอียด:** ควรมีความละเอียดสูง (HD หรือ Full HD)
3. **เนื้อหา:** รูปที่เกี่ยวกับเทคโนโลยี, การซ่อม, อิเลคทรอนิกส์
4. **ไม่ยุ่งเกินไป:** รูปที่ไม่มีรายละเอียดเยอะเกินไป เพื่อให้อ่านข้อความได้ง่าย

### ⚡ วิธีดาวน์โหลดด้วย Command Line (สำหรับ macOS/Linux)

```bash
# ดาวน์โหลดรูปจาก Unsplash
curl -L "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" \
  -o src/assets/images/hero-bg.jpg

# หรือใช้ wget
wget -O src/assets/images/hero-bg.jpg \
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
```

### 🔄 หมายเหตุ

- ปัจจุบันแอปใช้รูปจาก Unsplash CDN ซึ่งโหลดเร็วและใช้งานได้ดี
- หากต้องการใช้รูปท้องถิ่น (local) เพื่อลดการพึ่งพาอินเทอร์เน็ต ให้ทำตามขั้นตอนข้างบน
- รูปท้องถิ่นจะทำให้แอปโหลดเร็วขึ้นเล็กน้อย และใช้งานได้แม้ไม่มีอินเทอร์เน็ต
