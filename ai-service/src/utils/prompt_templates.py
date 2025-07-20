def generate_prompt(text: str) -> str:
    return (
        f"Aşağıdaki metnin duygusunu analiz et:\n\n'{text}'\n\n"
        "Cevabı şu formatta ver:\n"
        "Label: (olumlu/olumsuz/nötr)\n"
        "Explanation: (kısa açıklama)\n"
        "Confidence: (0.0 - 1.0 arasında tahmini güven)\n"
    )

def generate_supportive_prompt(label: str, explanation: str, confidence: float, user_text: str) -> str:
    if label.lower() in ["üzgün", "depresif", "kötü", "hüzünlü"] and confidence > 0.6:
        return (
            f"Kullanıcı şu metni yazdı: '{user_text}'.\n"
            f"Duygu analizi sonucu: {label} ({confidence*100:.1f}%) - {explanation}\n\n"
            "Bu kişi üzgün ve depresif görünüyor. Ona nazik, destekleyici, cesaret verici ve yardımcı olacak bir mesaj yaz.\n"
            "Unutma, empatik ve pozitif ol, moral verici ifadeler kullan."
        )
    else:
        return (
            f"Kullanıcı şu metni yazdı: '{user_text}'.\n"
            f"Duygu analizi sonucu: {label} ({confidence*100:.1f}%) - {explanation}\n\n"
            "Bu kişi normal ya da nötr bir duygu durumunda. Ona nazik ve samimi bir sohbet cevabı yaz."
        )
