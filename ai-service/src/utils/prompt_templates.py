def generate_prompt(text: str) -> str:
    return (
        f"Aşağıdaki metnin duygusunu analiz et:\n\n'{text}'\n\n"
        "Cevabı şu formatta ver:\n"
        "Label: (olumlu/olumsuz/nötr)\n"
        "Explanation: (kısa açıklama)\n"
        "Confidence: (0.0 - 1.0 arasında tahmini güven)\n"
    )
def generate_supportive_prompt(label: str, explanation: str, confidence: float, user_text: str) -> str:
    # GÜNCELLEME: Daha fazla duygu durumunu tanıyabilmek için genişletilmiş duygu listesi
    negative_emotions = ["üzgün", "depresif", "kötü", "hüzünlü", "olumsuz", "sıkıntılı", "mutsuz", "karamsar"]

    # GÜNCELLEME: Explanation içinde de olumsuz ifade kontrolü eklendi
    if any(emotion in label.lower() for emotion in negative_emotions) or "olumsuz" in explanation.lower():
        return (
            f"Kullanıcı şu metni yazdı: '{user_text}'.\n"
            f"Duygu analizi sonucu: {label} ({confidence*100:.1f}%) - {explanation}\n\n"
            "Sen bir psikolog rolündesin. Karşındaki kişi zor bir dönemden geçiyor ve yalnızca yanında birinin olduğunu hissetmek istiyor. "
            "Ona herhangi bir yönlendirme, seçenek sunma veya çözüm üretme. Cevapların tamamen moral verici, içten, duygusal olarak destekleyici ve empatik olsun. "
            "Maddeler halinde sıralama yapma. Sohbeti kısa tut. Bu bir terapi seansı değil, iki dostun derin ve sıcak bir anı gibi olsun. Kişinin hislerine odaklan ve sadece varlığının bir rahatlık olduğunu hissettir. "
            "Cevaba herhangi bir giriş cümlesi ('Elbette, işte o kişiye verilebilecek nazik ve samimi bir cevap:' gibi) ekleme; doğrudan mesajı ilet."
        )
    else:
        # GÜNCELLEME: Nötr durumlarda da giriş cümlesi eklenmemesi için güncelleme
        return (
            f"Kullanıcı şu metni yazdı: '{user_text}'.\n"
            f"Duygu analizi sonucu: {label} ({confidence*100:.1f}%) - {explanation}\n\n"
            "Bu kişi normal ya da nötr bir duygu durumunda. Ona nazik ve samimi bir sohbet cevabı yaz. Cevaba herhangi bir giriş cümlesi ekleme; doğrudan mesajı ilet."
        )
