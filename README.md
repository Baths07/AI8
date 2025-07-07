# Emotia – Depresyonla Mücadelede Yapay Zeka Destekli Duygusal İyi Oluş Platformu

## Takım ve Ürün Adı
**Grup 8 & Emotia**

## Takım ve Ürün Hakkında Bilgi

### Takım Üyeleri
| Name | Title |
|------|-------|
| -- | Scrum Master |
| -- | Developer |
| -- | Developer |
| -- | Developer |
| -- | Developer |

### Ürün Açıklaması
Emotia, depresyonla mücadele eden bireylerin duygusal iyi oluşlarını desteklemek ve duygusal farkındalıklarını artırmak amacıyla tasarlanmış yenilikçi bir yapay zeka platformudur. Platformumuz, kullanıcının psikolojik durumunu bilimsel tabanlı bir test ile değerlendirerek kişiselleştirilmiş bir başlangıç noktası sunar. Ardından, kullanıcının yazılı ifadelerinden duygu analizi yaparak, nazik ve empatik geri bildirimler sunar.

Amacımız, depresyonun getirdiği duygusal karmaşayı ve donukluğu yaşayan kullanıcıların kendi duygularını daha iyi tanımlamalarına, anlamalarına ve yönetmelerine yardımcı olmaktır. Bu sayede, daha dengeli ve bilinçli bir duygusal yaşam sürmeleri için onlara destek olmayı hedefleriz. Emotia, özellikle depresyon tanısı almış veya depresif belirtiler gösteren bireyler için, mevcut terapi ve destek süreçlerine ek olarak değerli bir araç olmayı amaçlar.

## Ürün Özellikleri

- **Bilimsel Değerlendirme**: Depresif belirtiler gösteren bireylerin psikolojik durumunu bilimsel tabanlı bir test ile değerlendirerek ilk duygusal analizi başlatma.

- **Yapay Zeka Destekli Analiz**: Yapay zekâ destekli analizlerle kullanıcının yazılı duygu ifadelerinden duygu durumunu tanıma ve nazik, yönlendirici geri bildirimler sunma.

- **Duygusal Farkındalık Geliştirme**: Kullanıcının kendi duygu tahminleri ile yapay zekâ analizlerini karşılaştırarak, depresyonun getirdiği duygusal donukluğu veya karışıklığı azaltmaya yönelik duygusal farkındalık ve öz-anlayışı geliştirme.

- **Gelişim Takibi**: Zaman içinde kullanıcıların duygusal farkındalık ve iyileşme gelişimini takip etme ve görsel raporlarla sunarak motivasyonlarını artırma.

## Yapay Zekâ Motoru

Emotia projesinin yapay zekâ motoru olarak **Google Gemini API** kullanılacaktır. Gemini'nin gelişmiş doğal dil işleme ve anlamsal anlama yetenekleri, depresyon bağlamındaki kullanıcı ifadelerinden doğru duygu çıkarımları yapmamızı ve kişiselleştirilmiş, empatik geri bildirimler sunmamızı sağlayacaktır.

## Sprint Planı – Detaylar

🎯 **Teslim Tarihi**: 3 Ağustos 2025, 23:59

Projemizi üç aşamalı sprint planı ile geliştireceğiz. Her sprint sonunda belirlenen hedeflere ulaşılmış ve bir rapor teslim edilmiş olacaktır.

**Sprint Board**: [Miro Bağlantısı](https://miro.com/welcomeonboard/UndENS9IVGRlMTlLc1pTK0Y0RC9vaDRHNXI4MXUxU2o1RTIzSDBvUlBGQmZjYVpQK0pFdkZLbENqeVYrOFVWOFpGNG5pWTFaVFhneEsvRk80U2FXdjdmSzRVWUM4MGNFSzhKNCtETDg0Z01VY0hRazkxa0NreUNsS1lUOWtiYzJBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=89999650475)

### Sprint 1: Depresyon Belirti Testi ve İlk Yorumlama

📅 **Tarih Aralığı**: 20 Haziran – 6 Temmuz 2025  

#### Hedefler:

**14 soruluk depresyon belirti testinin belirlenmesi ve web arayüzüne entegrasyonu**: Bilimsel geçerliliği olan bir depresyon ölçeğinin (örn. Beck Depresyon Envanteri (BDI), PHQ-9 veya benzeri) 0-3 puan aralığında cevaplanabilen sorularının seçilmesi ve web arayüzüne entegrasyonu. Bu test, kullanıcının mevcut depresif semptom şiddetini ölçmeyi hedefleyecektir.

- **Örnek**: [Beck Depresyon Envanteri](https://androloji.org.tr/androlojiDATA/Document/25112014164858-10-BECK-DEPRESYON-ENVANTERI.pdf)

**Karakter testi**: Kullanıcının temel karakter özelliklerini anlamaya yönelik bir karakter testinin sisteme dahil edilmesi.

**Skor → yüzdelik hesaplama (depresyon)**: Kullanıcının test yanıtlarına göre toplam skorun hesaplanması ve bu skorun yüzde cinsinden bir depresyon belirtisi yüzdesi olarak ifade edilmesi.

**Basit kullanıcı arayüzü (test ekranı + sonuç ekranı)**: Test sorularını gösterecek ve test bitiminde hesaplanan skoru ve yüzdelik depresyon analizini sunacak temel bir kullanıcı arayüzünün geliştirilmesi.

### Sprint 2: AI Destekli Duygu Tanıma

📅 **Tarih Aralığı**: 7 Temmuz – 20 Temmuz 2025  

#### Hedefler:

**AI ile ilk kişiselleştirilmiş mesajlaşma**: Sprint 1'deki test sonuçlarına dayanarak yapay zekanın kullanıcıya özel, kişiselleştirilmiş ilk karşılama ve sohbet başlatma mesajlarını oluşturabilmesi.

**Kullanıcının yazılı duygu ifadelerini alma**: Kullanıcının serbest metin olarak duygularını ve düşüncelerini ifade edebileceği bir giriş alanının oluşturulması.

**Gemini API ile yazıdan duygu tahmini**: Kullanıcının yazdığı metinleri Google Gemini API aracılığıyla analiz ederek olası duygu durumlarını tahmin edebilme (örn: "Bu ifadeler öfke veya üzgünlük içeriyor olabilir.").

**Kullanıcıya tahminini sor**: Yapay zekanın duygu tahmininden sonra kullanıcıya "Sence ne hissediyorsun?" gibi bir soru yönelterek kendi duygusunu tanımlamasını isteme.

**Günlük verisi olarak sakla (belli bir süre)**: Kullanıcının yazılı girdileri, yapay zeka analizleri, kullanıcının kendi tahminleri ve karşılaştırma sonuçlarının belirlenen bir süre boyunca (örn. son 30 gün) günlük olarak veri tabanında saklanması.

**Günlük saklanan verilere göre zamanla gelişimini ölçeklendirme sistemi**: Günlük olarak saklanan verilere dayanarak kullanıcının duygusal farkındalık ve tahmin doğruluğu gelişimini zaman içinde ölçebilecek temel bir sistemin kurgulanması.

**Backend - Gemini API entegrelerinin tamamlanması**: Google Gemini API ile tüm backend entegrasyonlarının ve ilgili mantığın eksiksiz çalışır hale getirilmesi.

### Sprint 3: Gelişim Takibi + Demo

📅 **Tarih Aralığı**: 21 Temmuz – 3 Ağustos 2025  

#### Hedefler:

**Kullanıcı – AI tahmini → gelişim takibi**: Kullanıcının kendi duygu tahminleri ile yapay zekanın tahminleri arasındaki eşleşme yüzdesinin hesaplanması ve bu oranın zaman içindeki değişiminin takip edilebilmesi için bir modül geliştirilmesi.

**Frontend gösterimlerinin tamamlanması**: Uygulamanın tüm ekranlarının (test, sohbet, günlük, raporlama) kullanıcı dostu ve estetik bir şekilde tasarlanarak frontend geliştirme aşamasının tamamlanması.

**Zaman içinde duygu tahmini doğruluğunu görsel olarak göster (grafik)**: Kullanıcının duygusal farkındalık gelişimini (yapay zeka ile eşleşme yüzdesi veya doğru tahmin oranı) görsel grafiklerle (örn. çizgi grafiği) anlamlı bir şekilde sunma.

**Günlük kaydı arayüzü: geçmiş duygulara erişim**: Kullanıcının geçmiş duygusal girdilerine, yapay zeka analizlerine ve kendi tahminlerine kolayca erişebileceği bir "günlük" veya "geçmiş kayıtlar" arayüzü oluşturma.

**Final ürün testi + sunuma hazırlık**: Uygulamanın uçtan uca kapsamlı testlerinin yapılması, hataların giderilmesi ve projenin potansiyel yatırımcılara veya jüriye sunulmak üzere bir demo ve sunum materyallerinin hazırlanması.
