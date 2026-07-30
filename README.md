# Kubilay Kendirci — Kişisel Portfolyo

Kubilay Kendirci için hazırlanmış, tek sayfalı ve production-ready bir portfolyo/CV web sitesidir. Site; eğitim, ilgi alanları, teknik beceriler, dil bilgisi, taşınabilir hoparlör projesi ve güvenli iletişim bağlantılarını sunar.

## Teknolojiler

- Next.js 16 (15+ gereksinimiyle uyumlu)
- TypeScript ve App Router
- Tailwind CSS 4
- Framer Motion
- Lucide React
- ESLint
- Prettier
- Sites uyumlu Vinext/Cloudflare Workers çıktısı

## Kurulum

Node.js 22.13 veya üzeri gerekir.

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde açılır.

## Kontroller ve production build

```bash
npm run lint
npm run format:check
npm run build
npm test
```

Vercel için standart Next.js çıktısını ayrıca kontrol etmek isterseniz:

```bash
npm run build:vercel
```

## İçerik ve bağlantıları güncelleme

Tüm kişisel içerik merkezi dosyalardan yönetilir:

- LinkedIn: `src/config/site.ts` içindeki `siteConfig.social.linkedin`
- Instagram: `src/config/site.ts` içindeki `siteConfig.social.instagram`
- E-posta: `src/config/site.ts` içindeki `siteConfig.email`
- Site adresi: `src/config/site.ts` içindeki `siteConfig.siteUrl`
- Eğitim, proje, beceriler ve diller: `src/data/portfolio.ts`

Sosyal bağlantılar boş, geçersiz veya yer tutucu olarak bırakılırsa ikonlar güvenli biçimde devre dışı görünür ve uygulama hata vermez.

## Vercel ile yayınlama

1. Projeyi bir Git deposuna gönderin.
2. Vercel panelinden **New Project** seçip depoyu içe aktarın.
3. Framework Preset alanını **Next.js** olarak bırakın.
4. Build Command alanını `npm run build:vercel` olarak ayarlayın.
5. Node.js sürümünü 22 olarak seçin.
6. `src/config/site.ts` içindeki `siteUrl` değerini gerçek yayın adresiyle güncelleyin.
7. Deploy işlemini başlatın.

Bu çalışma alanındaki varsayılan `npm run build` komutu Sites/Cloudflare Workers dağıtımı için optimize edilmiştir.

## Gizlilik

Bu projede telefon numarası bulunmaz ve eklenmemelidir. Kaynak CV içinde böyle bir bilgi varsa doğrudan `public` klasörüne kopyalanmamalıdır. İndirilebilir bir CV daha sonra eklenecekse önce güvenli bir kopya hazırlanmalı ve bu kişisel bilgi tamamen kaldırılmalıdır.

Site yalnızca e-posta, LinkedIn ve Instagram üzerinden iletişim sunar. Profil görseli ve indirilebilir CV eklenmemiştir.

## Kalan yapılandırma alanları

- `LINKEDIN_URL_BURAYA`
- `INSTAGRAM_URL_BURAYA`
- `SITE_URL_BURAYA`

Bu değerler doğrulanmış gerçek bağlantılar sağlandığında `src/config/site.ts` içinde değiştirilmelidir.
