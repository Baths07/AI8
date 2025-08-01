import os
import google.generativeai as genai
from dotenv import load_dotenv
import traceback

from utils.prompt_templates import generate_prompt, generate_supportive_prompt

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY not found in .env")

genai.configure(api_key=GEMINI_API_KEY)

print("🔐 Yüklenen GEMINI_API_KEY:", GEMINI_API_KEY)


def analyze_sentiment_with_gemini(text: str) -> dict:
    try:
        
        prompt = generate_prompt(text)
        model = genai.GenerativeModel("models/gemini-2.5-pro")
        #model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
        
        response = model.generate_content(prompt)

        raw = response.text or ""
        result = {"label": "", "explanation": "", "confidence": 0.0}

        for line in raw.splitlines():
            if line.lower().startswith("label"):
                result["label"] = line.split(":")[1].strip()
            elif line.lower().startswith("explanation"):
                result["explanation"] = line.split(":")[1].strip()
            elif line.lower().startswith("confidence"):
                try:
                    result["confidence"] = float(line.split(":")[1].strip())
                except:
                    result["confidence"] = 0.5

        
        support_prompt = generate_supportive_prompt(
            result["label"], result["explanation"], result["confidence"], text
        )

        
        support_response = model.generate_content(support_prompt)
        supportive_message = support_response.text or "Empatik mesaj oluşturulamadı."
         # Gereksiz başlıkları temizle
        prefixes_to_remove = [
            "Elbette, işte o kişiye verilebilecek nazik ve samimi bir cevap:",
            "İşte size nazik ve samimi bir cevap:",
            "Nazik ve samimi cevabım:",
            "Size verebileceğim nazik ve samimi cevap:",
            "İşte cevabım:"
        ]
        
        message = supportive_message.strip()
        for prefix in prefixes_to_remove:
            if message.lower().startswith(prefix.lower()):
                message = message[len(prefix):].strip()
                break

        result["message"] = message
        return result

    except Exception as e:
        return {
            "label": "n/a",
            "explanation": f"Gemini API hatası: {str(e)}",
            "confidence": 0.0,
            "message": traceback.format_exc()
        }
