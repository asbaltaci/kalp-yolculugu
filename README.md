# Kalp Yolculuğu – 30 Gün

Android uyumlu, internetsiz çalışabilen PWA ilk sürümü.

## Çalıştırma

Bu klasörde `python -m http.server 8000` komutunu çalıştırıp bilgisayarda `http://localhost:8000` adresini açın.

**Android ana ekranına kurulum:** Dosyaları HTTPS sunan bir statik web sunucusuna (ör. GitHub Pages, Netlify) yükleyin. Android Chrome'da siteyi açın ve menüden **Uygulamayı yükle** veya **Ana ekrana ekle** seçeneğini kullanın. Telefonda doğrudan `file://` üzerinden PWA kurulumu yapılamaz.

## Özellikler
- 30 gün / 5 günlük görev ve gün seçimi
- 8 zikir için bağımsız sayaç ve hedef
- Günlük okuma listesi
- 5, 10, 12, 15 dakikalık murakabe zamanlayıcısı
- Günlük muhasebe notları ve toplamlar
- localStorage ile cihazda saklama, JSON yedek alma/yükleme
- Service worker ile temel çevrimdışı çalışma

## Sınırlar
- Sayaç ve notlar aynı tarayıcıda saklanır, cihazlar arası otomatik eşitleme yoktur.
- Zamanlayıcı uygulama arka planda kaldığında güvenilir çalışmayabilir.
- Bildirim ve otomatik gün değişimi ilk sürümde yoktur; gün elle seçilir.
- İçerikler eğitim ve kişisel takip amaçlıdır, dini icazet veya özel manevi sonuç iddiası içermez.
