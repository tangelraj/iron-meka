
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      services: "Services",
      whyChoose: "Why Choose Us",
      reviews: "Reviews",
      contact: "Contact",
      book: "Book a Service",
      language: "English",
      offer: "Get 10% OFF on your first saree polishing order",
      offerBadge: "SHOP OPENING OFFER",
      heroHeading: "Expert Care for Every Fabric",
      heroDescription:
        "Professional saree care, ironing, steaming and finishing — handled with care and precision.",
      viewServices: "View Services",
    },
  },

  ta: {
    translation: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      services: "சேவைகள்",
      whyChoose: "எங்களை ஏன் தேர்வு செய்ய வேண்டும்",
      reviews: "வாடிக்கையாளர் கருத்துகள்",
      contact: "தொடர்பு",
      book: "சேவையை முன்பதிவு செய்யுங்கள்",
      language: "தமிழ்",
      offer: "உங்கள் முதல் புடவை பாலிஷ் சேவைக்கு 10% தள்ளுபடி",
      offerBadge: "கடை திறப்பு சிறப்புச் சலுகை",
      heroHeading: "ஒவ்வொரு துணிக்கும் சிறந்த பராமரிப்பு",
      heroDescription:
        "புடவை பராமரிப்பு, இஸ்திரி, நீராவி மற்றும் நேர்த்தியான துணி பராமரிப்பு சேவைகள்.",
      viewServices: "சேவைகளைப் பார்க்க",
    },
  },

  fr: {
    translation: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      whyChoose: "Pourquoi nous choisir",
      reviews: "Avis clients",
      contact: "Contact",
      book: "Réserver un service",
      language: "Français",
      offer: "Profitez de 10 % de réduction sur votre premier polissage de sari",
      offerBadge: "OFFRE D'OUVERTURE",
      heroHeading: "Un soin expert pour chaque tissu",
      heroDescription:
        "Entretien professionnel des saris, repassage, défroissage à la vapeur et finitions soignées.",
      viewServices: "Voir les services",
    },
  },
};

const savedLanguage = localStorage.getItem("ironMekaLanguage");

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("ironMekaLanguage") || "en",
  supportedLngs: ["en", "ta", "fr"],
  fallbackLng: "en",
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;