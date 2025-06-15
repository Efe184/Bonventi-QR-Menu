# 🍽️ Bonvénti QR Menü Sistemi

Bonvénti Restaurant için premium dijital menü deneyimi - Next.js 13+ ile geliştirilmiş modern, responsive QR menü sistemi.

![Bonvénti Logo](https://img.shields.io/badge/Bonvénti-Premium%20Menü-0E2944?style=for-the-badge&logo=restaurant)

## ✨ Özellikler

### 🎨 **Premium Tasarım**
- **Lüks Marka Kimliği**: Orijinal Bonvénti logosu ve "by the sea" sloganı
- **Mavi Marka Teması**: Tutarlı marka renkleri (#0E2944) 
- **Glass Morphism**: Modern cam efektleri ve premium animasyonlar
- **Otantik Fotoğrafçılık**: Unsplash'ten yüksek kaliteli yemek görselleri
- **Responsive Tasarım**: Mobil, tablet ve masaüstünde mükemmel görünüm

### 🍴 **Menü Kategorileri**
- **Kahvaltı** - 8 ürün
- **Plaj** - Pizza, makarna, burger dahil 17 ürün
- **Kokteyl** - 11 özel kokteyl
- **İçecek** - 19 içecek ve hafif yemek
- **Yemek** - 16 ana yemek (19:00-01:00)
- **Oda Servisi** - 25 ürün
- **Şarap** - 16 şarap çeşidi

### 🚀 **Teknik Özellikler**
- **Next.js 13+** App Router ile
- **TypeScript** tip güvenliği için
- **Tailwind CSS** stil için
- **Optimize Görseller** Next.js Image bileşeni ile
- **SEO Optimize** uygun meta etiketleri ile
- **Mobil Öncelikli** responsive tasarım
- **Hızlı Yükleme** optimize edilmiş varlıklar ile

## 🛠️ Teknoloji Yığını

- **Framework**: Next.js 13+ (App Router)
- **Dil**: TypeScript
- **Stil**: Tailwind CSS
- **Fontlar**: Google Fonts (Playfair Display, Inter, Dancing Script)
- **Görseller**: Unsplash API entegrasyonu
- **Deployment**: Vercel hazır

## 📱 Ekran Görüntüleri

### Masaüstü Görünümü
- Kategori kartları ile premium ana sayfa
- Glass morphism efektleri ve mavi marka teması
- Otantik yemek fotoğrafçılığı

### Mobil Görünümü
- QR kod tarama için optimize
- Dokunmatik dostu navigasyon
- Mobil ağlarda hızlı yükleme

## 🚀 Hızlı Başlangıç

### Ön Koşullar
- Node.js 18+ 
- npm veya yarn

### Kurulum

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/efe184/bonventi-menu.git
cd bonventi-menu
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu çalıştırın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

### 📱 Mobil Erişim (Aynı Ağ)

Aynı WiFi ağında mobil test için:

1. **Ağ erişimi ile başlatın**
```bash
npm run dev
```

2. **IP adresinizi bulun**
```bash
# Windows
ipconfig | findstr "IPv4"

# Mac/Linux  
ifconfig | grep "inet "
```

3. **Mobilden erişin**
```
http://IP_ADRESINIZ:3000
```

## 🌐 Deployment

### Vercel 

1. **Vercel CLI yükleyin**
```bash
npm install -g vercel
```

2. **Deploy edin**
```bash
vercel --prod
```

### Diğer Platformlar
- **Netlify**: GitHub repo'sunu bağlayın
- **Railway**: Tek tıkla deploy
- **DigitalOcean**: App Platform

## 📁 Proje Yapısı

```
bonventi-menu/
├── app/
│   ├── [category]/
│   │   └── page.tsx          # Kategori sayfaları
│   ├── globals.css           # Global stiller
│   ├── layout.tsx           # Ana layout
│   └── page.tsx             # Ana sayfa
├── data/
│   └── menu.json            # Menü verisi
├── public/
│   └── next.svg             # Statik varlıklar
├── next.config.js           # Next.js yapılandırması
├── tailwind.config.ts       # Tailwind yapılandırması
└── package.json
```

## 🎨 Özelleştirme

### Marka Renkleri
```css
:root {
  --brand-blue: #0E2944;
  --brand-red: #F6564A;
  --brand-blue-light: #1A3A5C;
  --brand-blue-lighter: #2A4A6C;
}
```

### Menü Verisi
Menü öğelerini güncellemek için `data/menu.json` dosyasını düzenleyin:
```json
{
  "name": "Ürün Adı",
  "price": "45₺",
  "description": "Ürün açıklaması"
}
```

### Görseller
Kategori görsellerini `app/page.tsx` dosyasında güncelleyin:
```typescript
imageUrl: 'https://images.unsplash.com/photo-id'
```

## 🔧 Yapılandırma

### Next.js Yapılandırması
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}
```

## 📊 Performans

- **Lighthouse Skoru**: Tüm metriklerde 95+
- **İlk İçerik Boyası**: < 1.5s
- **En Büyük İçerik Boyası**: < 2.5s
- **Kümülatif Layout Kayması**: < 0.1

## 🤝 Katkıda Bulunma

1. Repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/harika-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Harika özellik ekle'`)
4. Branch'inizi push edin (`git push origin feature/harika-ozellik`)
5. Pull Request açın



## 🏢 Bonvénti Hakkında

Bonvénti, "deniz kenarında" premium restaurant deneyimi sunar - Gventis Group'un bir parçasıdır. Bu QR menü sistemi, geleneksel misafirperverliği modern teknoloji ile birleştirme taahhüdümüzü temsil eder.

## 📞 Destek

Destek ve sorular için:
- GitHub'da issue oluşturun
- İletişim: [efesiltak77@gmail.com]

---

**Bonvénti Restaurant için ❤️ ile yapıldı**

![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=flat-square&logo=tailwind-css)
