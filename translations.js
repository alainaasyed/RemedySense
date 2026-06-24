const translations = {
    en: {
        "RemedySense": "RemedySense",
        "Camera Analysis": "Camera Analysis",
        "Upload Image": "Upload Image",
        "Dashboard": "Dashboard",
        "Start Camera": "Start Camera",
        "Capture & Analyze": "Capture & Analyze",
        "Stop Camera": "Stop Camera",
        "Please allow camera access": "Please allow camera access",
        "Choose Image": "Choose Image",
        "or drag and drop": "or drag and drop",
        "Analyze Image": "Analyze Image",
        "Skin Issues & Remedies": "Skin Issues & Remedies",
        "Select a skin issue": "Select a skin issue",
        "Analysis Results": "Analysis Results",
        "Analyzing...": "Analyzing...",
        "Detected Skin Issue": "Detected Skin Issue",
        "Confidence": "Confidence",
        "Recommended Remedy": "Recommended Remedy",
        "Ingredients": "Ingredients",
        "Instructions": "Instructions",
        "Precautions": "Precautions",
        "acne": "Acne",
        "eczema": "Eczema",
        "psoriasis": "Psoriasis",
        "dermatitis": "Dermatitis",
        "rosacea": "Rosacea",
        "vitiligo": "Vitiligo",
        "fungal_infection": "Fungal Infection",
        "urticaria": "Urticaria (Hives)",
        "warts": "Warts",
        "moles": "Moles"
    },
    ta: {
        "RemedySense": "நிவாரணம்உணர்வு",
        "Camera Analysis": "கேமரா பகுப்பாய்வு",
        "Upload Image": "படத்தை பதிவேற்று",
        "Dashboard": "பிரதான பலகை",
        "Start Camera": "கேமராவைத் தொடங்கவும்",
        "Capture & Analyze": "பிடித்து பகுப்பாய்வு செய்",
        "Stop Camera": "கேமராவை நிறுத்து",
        "Please allow camera access": "கேமரா அணுகலை அனுமதிக்கவும்",
        "Choose Image": "படத்தைத் தேர்ந்தெடுக்கவும்",
        "or drag and drop": "அல்லது இழுத்து விடவும்",
        "Analyze Image": "படத்தை பகுப்பாய்வு செய்",
        "Skin Issues & Remedies": "தோல் சிக்கல்கள் & நிவாரணங்கள்",
        "Select a skin issue": "ஒரு தோல் சிக்கலைத் தேர்ந்தெடுக்கவும்",
        "Analysis Results": "பகுப்பாய்வு முடிவுகள்",
        "Analyzing...": "பகுப்பாய்வு செய்யப்படுகிறது...",
        "Detected Skin Issue": "கண்டறியப்பட்ட தோல் சிக்கல்",
        "Confidence": "நம்பிக்கை",
        "Recommended Remedy": "பரிந்துரைக்கப்பட்ட நிவாரணம்",
        "Ingredients": "பொருட்கள்",
        "Instructions": "வழிமுறைகள்",
        "Precautions": "எச்சரிக்கைகள்",
        "acne": "முகப்பருக்கள்",
        "eczema": "ஆறினை",
        "psoriasis": "தோல் விஷம்",
        "dermatitis": "தோல் அழற்சி",
        "rosacea": "ரோசாசியா",
        "vitiligo": "வெள்ளை தேமல்",
        "fungal_infection": "பூஞ்சை தொற்று",
        "urticaria": "வீக்கமான புள்ளிகள்",
        "warts": "மருக்கள்",
        "moles": "மதுரை"
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    updatePageLanguage();
    localStorage.setItem('selectedLanguage', lang);
}

function updatePageLanguage() {
    document.querySelectorAll('[data-en]').forEach(element => {
        const key = element.getAttribute('data-en');
        const translation = translations[currentLanguage][key] || key;
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = translation;
        } else if (element.tagName === 'SELECT') {
            element.options[0].text = translation;
        } else {
            element.textContent = translation;
        }
    });

    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        const key = element.getAttribute('data-en-placeholder');
        const translation = translations[currentLanguage][key] || key;
        element.placeholder = translation;
    });

    document.querySelectorAll('[data-ta-placeholder]').forEach(element => {
        const key = element.getAttribute('data-ta-placeholder');
        const translation = translations[currentLanguage][key] || key;
        if (currentLanguage === 'ta') {
            element.placeholder = translation;
        }
    });
}

function translate(key) {
    return translations[currentLanguage][key] || key;
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            setLanguage(e.target.getAttribute('data-lang'));
        });
    });
});
