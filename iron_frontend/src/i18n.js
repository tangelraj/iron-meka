
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
      viewServices: "View Services",

      heroEyebrow: "SAREE CARE",
      heroTitle: "Expert Care for Every Fabric",
      heroDescription:
        "Professional saree care, ironing, steaming and finishing — handled with care and precision.",

      aboutEyebrow: "ABOUT US",
      aboutHeading: "Care That Makes Every Fabric Feel Special",
      aboutDescription:
        "At Iron Me·Ka, we believe every garment deserves special care. Our trained team handles each fabric carefully, choosing the right heat, steam and finish for its weave.\n\nWith respect for traditional wear and attention to detail, we deliver garments that look, feel and drape their very best.",

      qualityFinishing: "Quality Finishing",
      gentleCare: "Gentle Fabric Care",
      professionalHandling: "Professional Handling",

      servicesEyebrow: "WHAT WE DO",
      servicesHeading: "Our Fabric Care Services",
      servicesDescription:
        "Specialized care and finishing for your everyday wear and traditional fabrics.",
      bookNow: "Book Now",
      from: "FROM",
      contactForPrice: "Contact for price",

      whyHeading: "Why Choose IRON Me.Ka?",
      whyEyebrow: "WHY CHOOSE US",
      whyReasons: [
      {
          title: "Premium Quality Finish",
          description:
            'A "ready-to-wear" and "ready-to-dress" result thanks to our traditional ironing techniques.',  
      },
      {
          title: "Local Expertise",
          description:
            "Your trusted local workshop, proud to serve the community and local economy of Pondicherry.",
      },
      {
          title: "Reliable & Customized Care",
          description:
            "Every item, from a delicate silk saree to a king-size bed set, is handled with the highest standards.",
      },    
      ],
      b2bEyebrow: "FOR PROFESSIONALS",
      b2bHeading: "Hotels, Guesthouses, and Airbnb (B2B Service)",
      b2bDescription:
        "Do you manage a tourist accommodation, a luxury villa, or a short-term rental in Pondicherry? Your guests' experience begins with flawless bedding and household linen.",
      b2bLastDescription:
        "IRON Me.Ka offers a dedicated B2B ironing service for hotels, guesthouses, and Airbnb concierge services.",
      b2bServices: [
        {
          title: "Bed and Bath Linen Care",
          description:
            "Impeccable pressing of your bedsheets, duvet covers, pillowcases, tablecloths, and towels to guarantee your guests a prestigious hotel experience.",
        },
        {
          title: "Bulk Ironing and Pro Rates",
          description:
            "Customized packages adapted to the large volumes and regular needs of property managers and tourism professionals.",
        },
        {
          title: "Quality and Responsiveness",
          description:
            "We understand your turnover constraints and guarantee perfectly fresh linen, sanitized with our professional steam technology, ready to be presented.",
        },
      ],
      contactEyebrow: "BOOK TODAY",
      phoneLabel: "PHONE",
      whatsappLabel: "WHATSAPP",
      addressLabel: "ADDRESS",
      hoursLabel: "BUSINESS HOURS",
      footerDescription:
        "Premium saree and fabric care — rolling, pleating, polishing, starching and steaming, done by hand with precision.",
      footerServices: "Services",
      footerContact: "Contact",
      footerServiceNames: [
        "Saree Rolling",
        "Towel Ironing & Refreshing",
        "Coat & Delicate Fabric Steam Refresh",
        "Cotton Veshti Starching & Polishing",
        "Silk Veshti Polishing",
        "Bed Sheet & Cover Ironing",
      ],
      howEyebrow: "HOW IT WORKS",
      howHeading: "Simple, Careful, Complete",

      howStep1Title: "Choose Your Service",
      howStep1Description: "Select the service you need.",

      howStep2Title: "Hand Over Your Clothes",
      howStep2Description:
        "Give us your garments for professional care.",

      howStep3Title: "Expert Care & Finishing",
      howStep3Description:
        "Our team carefully handles and finishes them.",

      howStep4Title: "Ready to Wear",
      howStep4Description:
        "Receive your fresh, neat and beautifully finished clothes.",
      openingOffer: "SHOP OPENING OFFER",
      openingOfferDescription:
        "Get 10% OFF on your first saree polishing order",
      serviceCards: {
        "Saree Rolling": {
          name: "Saree Rolling",
          description: "Neat and professional rolling for easy storage and handling."
        },
        "Towel Ironing & Refreshing": {
          name: "Towel Ironing & Refreshing",
          description: "Fresh, neat and comfortable finishing for towels."
        },
        "Coat & Delicate Fabric Steam Refresh": {
          name: "Coat & Delicate Fabric Steam Refresh",
          description: "Gentle steam treatment for coats and delicate fabrics."
        },
        "Cotton Veshti Starching & Polishing": {
          name: "Cotton Veshti Starching & Polishing",
          description: "Crisp starching and polished finishing for cotton veshti."
        },
        "Silk Veshti Polishing": {
          name: "Silk Veshti Polishing",
          description: "Careful polishing to maintain the premium silk appearance."
        }
      },
      specialtyEyebrow: "OUR SPECIALTY",
      specialtyHeading: "Premium Saree Polish",

      specialtyDescriptionBefore:
        "The saree is an exceptional garment that requires specific textile care. Our exclusive ",

      specialtyDescriptionHighlight: "Saree Polish service",

      specialtyDescriptionAfter:
        " is designed to revive the shine, color, and stiffness of your traditional fabrics, whether they are woven from silk, cotton, or blended materials.",

      specialtyItems: [
        {
          title: "Silk Saree Polish",
          description:
            "A gentle smoothing and polishing technique, ideal for bridal and party wear sarees, that protects delicate threads while restoring their original luster.",
        },
        {
          title: "Perfect Fall and Drape",
          description:
            "A targeted treatment that eliminates deep creases and ensures an elegant, flawless drape for your garment.",
        },
      ],
      testimonialsEyebrow: "TESTIMONIALS",
      outOfFiveStars: "out of 5 stars",

      testimonialReviews: [
        "My Kanjivaram silks came back beautifully polished and rolled. They treat every saree like it's their own.",
        "My wedding silk veshti has recovered its original luster after polishing. I weared for my family wedding, it was flawless. Crisp, shining and on time.",
        "Pre-pleating has saved me so much time before functions. Perfect pleats every single time!",
        "Gentle with delicate fabrics and very professional. My go-to for all traditional wear.",
      ],
      testimonialsHeading: "Loved by Our Customers",
      verifiedCustomer: "Verified customer",

      contactHeading: "Give Your Clothes the Care They Deserve",
      contactDescription:
        "From everyday ironing to delicate saree and traditional wear care, we make every piece look its best.",
      whatsappUs: "WhatsApp Us",

      followUs: "Follow Us",
      followDescription:
        "Stay connected for offers, saree care tips and our latest work.",
      quickLinks: "Quick Links",
      allRightsReserved: "All rights reserved.",
    },
  },

  ta: {
    translation: {
      home: "முகப்பு",
      about: "எங்களைப் பற்றி",
      services: "சேவைகள்",
      whyChoose: "ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்",
      reviews: "வாடிக்கையாளர் கருத்துகள்",
      contact: "தொடர்பு",
      book: "சேவையை முன்பதிவு செய்யவும்",
      viewServices: "சேவைகளைப் பார்க்கவும்",

      heroEyebrow: "சேலை பராமரிப்பு",
      heroTitle: "ஒவ்வொரு துணிக்கும் சிறப்பான பராமரிப்பு",
      heroDescription:
        "தொழில்முறை சேலை பராமரிப்பு, இஸ்திரி, நீராவி சீராக்குதல் மற்றும் நேர்த்தியான முடித்தல் — மிகுந்த கவனத்துடனும் துல்லியத்துடனும் செய்யப்படுகிறது.",

      aboutEyebrow: "எங்களைப் பற்றி",
      aboutHeading: "ஒவ்வொரு துணியையும் சிறப்பாக உணரச் செய்யும் பராமரிப்பு",
      aboutDescription:
        "ஐரன் மீ·காவில், ஒவ்வொரு ஆடையும் சிறப்பான பராமரிப்புக்கு உரியது என்று நாங்கள் நம்புகிறோம். எங்கள் பயிற்சி பெற்ற குழுவினர் ஒவ்வொரு துணியின் நெசவுக்கு ஏற்ற வெப்பம், நீராவி மற்றும் முடித்தல் முறையைத் தேர்ந்தெடுத்து கவனமாகக் கையாளுகிறார்கள்.\n\nபாரம்பரிய ஆடைகளுக்கு மரியாதையும் நுணுக்கங்களுக்கு கவனமும் செலுத்தி, சிறந்த தோற்றம், மென்மை மற்றும் அழகான மடிப்புடன் ஆடைகளை வழங்குகிறோம்.",

      qualityFinishing: "தரமான நேர்த்தி",
      gentleCare: "மென்மையான துணி பராமரிப்பு",
      professionalHandling: "நிபுணத்துவ கையாளுதல்",

      servicesEyebrow: "எங்கள் சேவைகள்",
      servicesHeading: "எங்கள் துணி பராமரிப்பு சேவைகள்",
      servicesDescription:
        "அன்றாட ஆடைகள் மற்றும் பாரம்பரிய துணிகளுக்கான சிறப்பான பராமரிப்பும் நேர்த்தியான முடித்தலும்.",
      bookNow: "இப்போதே முன்பதிவு செய்யவும்",
      from: "தொடக்க விலை",
      contactForPrice: "விலைக்கு தொடர்பு கொள்ளவும்",

      whyHeading: "ஏன் ஐரன் மீ·காவைத் தேர்வு செய்ய வேண்டும்?",
      whyEyebrow: "ஏன் எங்களைத் தேர்வு செய்ய வேண்டும்",
      whyReasons: [
      {
        title: "உயர்தர நேர்த்தியான முடித்தல்",
        description:
          "எங்கள் பாரம்பரிய இஸ்திரி முறைகளால் உடனே அணியத் தயாரான நேர்த்தியான ஆடைகளை வழங்குகிறோம்.",
      },
      {
        title: "உள்ளூர் நிபுணத்துவம்",
        description:
          "புதுச்சேரி மக்களுக்கும் உள்ளூர் பொருளாதாரத்திற்கும் பெருமையுடன் சேவை செய்யும் நம்பகமான நிறுவனம்.",
      },
      {
        title: "நம்பகமான தனிப்பயன் பராமரிப்பு",
        description:  
          "மென்மையான பட்டுச் சேலை முதல் பெரிய படுக்கை விரிப்பு வரை ஒவ்வொரு துணியையும் மிகுந்த கவனத்துடன் பராமரிக்கிறோம்.",
      },
      ],
      b2bEyebrow: "வணிக நிறுவனங்களுக்காக",
      b2bHeading: "ஹோட்டல்கள், விருந்தினர் இல்லங்கள் மற்றும் Airbnb சேவைகள்",
      b2bDescription:
        "புதுச்சேரியில் சுற்றுலா விடுதி, சொகுசு வில்லா அல்லது குறுகிய கால வாடகை விடுதியை நடத்துகிறீர்களா? உங்கள் விருந்தினர்களின் சிறந்த அனுபவம் நேர்த்தியான படுக்கை விரிப்புகள் மற்றும் வீட்டுத் துணிகளிலிருந்து தொடங்குகிறது.",
      b2bLastDescription:
        "ஹோட்டல்கள், விருந்தினர் இல்லங்கள் மற்றும் Airbnb சேவைகளுக்காக IRON Me.Ka சிறப்பான B2B இஸ்திரி சேவையை வழங்குகிறது.",
      b2bServices: [
        {
          title: "படுக்கை மற்றும் குளியல் துணி பராமரிப்பு",
          description:
            "படுக்கை விரிப்புகள், போர்வை உறைகள், தலையணை உறைகள், மேசை விரிப்புகள் மற்றும் துண்டுகளை நேர்த்தியாக இஸ்திரி செய்து வழங்குகிறோம்.",
        },
        {
          title: "மொத்த இஸ்திரி மற்றும் சிறப்பு கட்டணங்கள்",
          description:
            "அதிக அளவு துணிகள் மற்றும் தொடர்ச்சியான தேவைகளுக்கு ஏற்ற தனிப்பயன் சேவைத் திட்டங்கள்.",
        },
        {
          title: "தரம் மற்றும் விரைவான சேவை",
          description:
            "உங்கள் நேரக் கட்டுப்பாடுகளைப் புரிந்துகொண்டு தொழில்முறை நீராவி தொழில்நுட்பத்தில் சுத்தப்படுத்தப்பட்ட, புத்துணர்ச்சியான துணிகளை வழங்குகிறோம்.",
        },
      ],
      contactEyebrow: "இன்றே முன்பதிவு செய்யுங்கள்",
      phoneLabel: "தொலைபேசி",
      whatsappLabel: "வாட்ஸ்அப்",
      addressLabel: "முகவரி",
      hoursLabel: "வேலை நேரம்",
      footerDescription:
        "உயர்தர சேலை மற்றும் துணி பராமரிப்பு — சேலை உருட்டுதல், மடிப்பு, பாலிஷ், கஞ்சி போடுதல் மற்றும் நீராவி சீராக்குதல் ஆகியவை மிகுந்த கவனத்துடன் செய்யப்படுகின்றன.",
      footerServices: "சேவைகள்",
      footerContact: "தொடர்பு",
      footerServiceNames: [
        "சேலை உருட்டுதல்",
        "துண்டு இஸ்திரி மற்றும் புத்துணர்வு பராமரிப்பு",
        "கோட் மற்றும் மென்மையான துணிகளுக்கு நீராவி பராமரிப்பு",
        "பருத்தி வேட்டிக்கு கஞ்சி மற்றும் பாலிஷ்",
        "பட்டு வேட்டி பாலிஷ்",
        "படுக்கை விரிப்பு மற்றும் உறைகள் இஸ்திரி",
      ],
      howEyebrow: "எங்கள் சேவை செயல்முறை",
      howHeading: "எளிமை, கவனம், முழுமை",

      howStep1Title: "உங்கள் சேவையைத் தேர்வு செய்யுங்கள்",
      howStep1Description:
        "உங்களுக்குத் தேவையான சேவையைத் தேர்ந்தெடுக்கவும்.",

      howStep2Title: "உங்கள் ஆடைகளை ஒப்படையுங்கள்",
      howStep2Description:
        "தொழில்முறை பராமரிப்பிற்காக உங்கள் ஆடைகளை எங்களிடம் ஒப்படையுங்கள்.",

      howStep3Title: "நிபுணத்துவ பராமரிப்பு மற்றும் நேர்த்தி",
      howStep3Description:
        "எங்கள் குழுவினர் உங்கள் ஆடைகளை கவனமாகக் கையாள்ந்து நேர்த்தியாக முடித்துத் தருவார்கள்.",

      howStep4Title: "அணியத் தயாராக",
      howStep4Description:
        "புத்துணர்ச்சியுடனும் நேர்த்தியுடனும் அழகாக முடிக்கப்பட்ட ஆடைகளைப் பெற்றுக்கொள்ளுங்கள்.",
      openingOffer: "கடை திறப்பு சிறப்புச் சலுகை",
      openingOfferDescription:
        "உங்கள் முதல் சேலை பாலிஷ் ஆர்டருக்கு 10% தள்ளுபடி பெறுங்கள்",
      serviceCards: {
        "Saree Rolling": {
          name: "சேலை உருட்டுதல்",
          description: "எளிதாக சேமிக்கவும் கையாளவும் நேர்த்தியான தொழில்முறை சேலை உருட்டுதல்."
        },
        "Towel Ironing & Refreshing": {
          name: "துண்டு இஸ்திரி மற்றும் புத்துணர்வு பராமரிப்பு",
          description: "துண்டுகளுக்கு புத்துணர்ச்சியான, நேர்த்தியான மற்றும் மென்மையான முடித்தல்."
        },
        "Coat & Delicate Fabric Steam Refresh": {
          name: "கோட் மற்றும் மென்மையான துணிகளுக்கு நீராவி பராமரிப்பு",
          description: "கோட்டுகள் மற்றும் மென்மையான துணிகளுக்கு மென்மையான நீராவி பராமரிப்பு."
        },
        "Cotton Veshti Starching & Polishing": {
          name: "பருத்தி வேட்டிக்கு கஞ்சி மற்றும் பாலிஷ்",
          description: "பருத்தி வேட்டிக்கு மொடமொடப்பான கஞ்சி மற்றும் நேர்த்தியான பாலிஷ்."
        },
        "Silk Veshti Polishing": {
          name: "பட்டு வேட்டி பாலிஷ்",
          description: "பட்டின் உயர்தர தோற்றத்தைப் பாதுகாக்க கவனமான பாலிஷ்."
        }
      },
      specialtyEyebrow: "எங்கள் சிறப்புச் சேவை",
      specialtyHeading: "உயர்தர சேலை பாலிஷ்",

      specialtyDescriptionBefore:
        "சேலை என்பது சிறப்பான துணி பராமரிப்பு தேவைப்படும் ஒரு தனித்துவமான ஆடையாகும். எங்களின் பிரத்யேக ",

      specialtyDescriptionHighlight: "சேலை பாலிஷ் சேவை",

      specialtyDescriptionAfter:
        " பட்டு, பருத்தி அல்லது கலப்புத் துணிகளால் நெய்யப்பட்ட உங்கள் பாரம்பரிய ஆடைகளின் பளபளப்பு, நிறம் மற்றும் மொடமொடப்புத் தன்மையை மீட்டெடுக்க வடிவமைக்கப்பட்டுள்ளது.",

      specialtyItems: [
        {
          title: "பட்டுச் சேலை பாலிஷ்",
          description:
            "மணப்பெண் மற்றும் விழாக்களில் அணியும் சேலைகளுக்கு ஏற்ற மென்மையான சீராக்குதல் மற்றும் பாலிஷ் முறை. இது நுண்ணிய நூல்களைப் பாதுகாத்து, சேலையின் இயற்கையான பளபளப்பை மீட்டெடுக்கிறது.",
        },
        {
          title: "நேர்த்தியான மடிப்பும் அழகான தோற்றமும்",
          description:
            "ஆழமான சுருக்கங்களை நீக்கி, உங்கள் ஆடைக்கு நேர்த்தியான மற்றும் குறையற்ற மடிப்பையும் அழகான தோற்றத்தையும் வழங்கும் சிறப்புப் பராமரிப்பு.",
        },
      ],
      testimonialsEyebrow: "வாடிக்கையாளர் கருத்துகள்",
      outOfFiveStars: "5 நட்சத்திரங்களில்",

      testimonialReviews: [
        "எனது காஞ்சிபுரம் பட்டுச் சேலைகள் அழகாக பாலிஷ் செய்யப்பட்டு உருட்டப்பட்டு திரும்பக் கிடைத்தன. ஒவ்வொரு சேலையையும் தங்களுடையது போல கவனமாகக் கையாளுகிறார்கள்.",
        "எனது திருமணப் பட்டு வேட்டி பாலிஷ் செய்த பிறகு அதன் இயற்கையான பளபளப்பை மீண்டும் பெற்றது. குடும்பத் திருமணத்தில் அணிந்தபோது மிகவும் நேர்த்தியாகவும் பளபளப்பாகவும் இருந்தது. சரியான நேரத்தில் கிடைத்தது.",
        "விழாக்களுக்கு முன் சேலை மடிப்புகளைத் தயாரிப்பது எனக்கு நிறைய நேரத்தை மிச்சப்படுத்தியது. ஒவ்வொரு முறையும் சரியான மடிப்புகள்!",
        "மென்மையான துணிகளை மிகுந்த கவனத்துடன் கையாளுகிறார்கள். மிகவும் தொழில்முறையான சேவை. பாரம்பரிய ஆடைகளுக்கான எனது நம்பகமான தேர்வு.",
      ],
      testimonialsHeading: "வாடிக்கையாளர்களின் அன்பைப் பெற்ற சேவை",
      verifiedCustomer: "சரிபார்க்கப்பட்ட வாடிக்கையாளர்",

      contactHeading: "உங்கள் ஆடைகளுக்குத் தகுதியான பராமரிப்பை வழங்குங்கள்",
      contactDescription:
        "அன்றாட இஸ்திரி முதல் மென்மையான சேலைகள் மற்றும் பாரம்பரிய ஆடைகள் வரை, ஒவ்வொரு துணியையும் சிறப்பாக மாற்றுகிறோம்.",
      whatsappUs: "வாட்ஸ்அப்பில் தொடர்பு கொள்ளவும்",

      followUs: "எங்களைப் பின்தொடருங்கள்",
      followDescription:
        "சலுகைகள், சேலை பராமரிப்பு குறிப்புகள் மற்றும் எங்கள் சமீபத்திய பணிகளை அறிய எங்களுடன் இணைந்திருங்கள்.",
      quickLinks: "விரைவு இணைப்புகள்",
      allRightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
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
      viewServices: "Voir les services",

      heroEyebrow: "ENTRETIEN DES SARIS",
      heroTitle: "Un soin expert pour chaque tissu",
      heroDescription:
        "Entretien professionnel des saris, repassage, défroissage vapeur et finitions soignées — avec précision et délicatesse.",

      aboutEyebrow: "À PROPOS",
      aboutHeading: "Un soin qui rend chaque tissu unique",
      aboutDescription:
        "Chez Iron Me·Ka, nous pensons que chaque vêtement mérite une attention particulière. Notre équipe qualifiée traite chaque tissu avec soin, en choisissant la chaleur, la vapeur et la finition adaptées à son tissage.\n\nDans le respect des vêtements traditionnels et avec le souci du détail, nous rendons vos vêtements élégants, agréables à porter et parfaitement drapés.",

      qualityFinishing: "Finition de qualité",
      gentleCare: "Soin délicat des tissus",
      professionalHandling: "Traitement professionnel",

      servicesEyebrow: "NOS PRESTATIONS",
      servicesHeading: "Nos services d'entretien textile",
      servicesDescription:
        "Des soins spécialisés et des finitions soignées pour vos vêtements quotidiens et vos tissus traditionnels.",
      bookNow: "Réserver",
      from: "À PARTIR DE",
      contactForPrice: "Contactez-nous pour le tarif",

      whyHeading: "Pourquoi choisir IRON Me.Ka ?",
      whyEyebrow: "POURQUOI NOUS CHOISIR",
      whyReasons: [
        {
          title: "Finition de qualité supérieure",
          description:
            "Des vêtements prêts à porter grâce à nos techniques de repassage traditionnelles.",
        },
        {
          title: "Expertise locale",
          description:
            "Votre atelier local de confiance, fier de servir la communauté et l'économie de Pondichéry.",
        },
        {
          title: "Soin fiable et personnalisé",
          description:
            "Chaque pièce, du sari en soie délicat au linge de lit grand format, est traitée avec le plus grand soin.",
        },
      ],
      b2bEyebrow: "POUR LES PROFESSIONNELS",
      b2bHeading: "Hôtels, maisons d'hôtes et Airbnb (Service B2B)",
      b2bDescription:
        "Vous gérez un hébergement touristique, une villa de luxe ou une location de courte durée à Pondichéry ? L'expérience de vos clients commence par un linge de lit et de maison impeccable.",
      b2bLastDescription:
        "IRON Me.Ka propose un service de repassage B2B dédié aux hôtels, maisons d'hôtes et services de conciergerie Airbnb.",
      b2bServices: [
        {
          title: "Entretien du linge de lit et de bain",
          description:
            "Repassage soigné des draps, housses de couette, taies d'oreiller, nappes et serviettes pour offrir une expérience hôtelière prestigieuse.",
        },
        {
          title: "Repassage en volume et tarifs professionnels",
          description:
            "Des forfaits personnalisés adaptés aux volumes importants et aux besoins réguliers des gestionnaires immobiliers et professionnels du tourisme.",
        },
        {
          title: "Qualité et réactivité",
          description:
            "Nous respectons vos contraintes de rotation et garantissons un linge frais, assaini grâce à notre technologie vapeur professionnelle et prêt à être présenté.",
        },
      ],
      contactEyebrow: "RÉSERVEZ AUJOURD'HUI",
      phoneLabel: "TÉLÉPHONE",
      whatsappLabel: "WHATSAPP",
      addressLabel: "ADRESSE",
      hoursLabel: "HORAIRES D'OUVERTURE",
      footerDescription:
        "Entretien haut de gamme des saris et des tissus — roulage, plissage, polissage, amidonnage et défroissage vapeur, réalisés à la main avec précision.",
      footerServices: "Services",
      footerContact: "Contact",
      footerServiceNames: [
        "Roulage de sari",
        "Repassage et rafraîchissement des serviettes",
        "Défroissage vapeur des manteaux et tissus délicats",
        "Amidonnage et polissage du veshti en coton",
        "Polissage du veshti en soie",
        "Repassage des draps et des housses",
      ],
      howEyebrow: "COMMENT ÇA MARCHE",
      howHeading: "Simple, soigné, complet",

      howStep1Title: "Choisissez votre service",
      howStep1Description:
        "Sélectionnez le service dont vous avez besoin.",

      howStep2Title: "Confiez-nous vos vêtements",
      howStep2Description:
        "Remettez-nous vos vêtements pour un entretien professionnel.",

      howStep3Title: "Soin expert et finition",
      howStep3Description:
        "Notre équipe prend soin de vos vêtements et assure une finition impeccable.",

      howStep4Title: "Prêt à porter",
      howStep4Description:
        "Récupérez vos vêtements frais, soignés et parfaitement finis.",
      openingOffer: "OFFRE SPÉCIALE D'OUVERTURE",
      openingOfferDescription:
        "Profitez de 10 % de réduction sur votre première commande de polissage de sari",
      serviceCards: {
        "Saree Rolling": {
          name: "Roulage de sari",
          description: "Roulage soigné et professionnel pour faciliter le rangement et la manipulation."
        },
        "Towel Ironing & Refreshing": {
          name: "Repassage et rafraîchissement des serviettes",
          description: "Une finition fraîche, soignée et agréable pour les serviettes."
        },
        "Coat & Delicate Fabric Steam Refresh": {
          name: "Défroissage vapeur des manteaux et tissus délicats",
          description: "Traitement vapeur doux pour les manteaux et les tissus délicats."
        },
        "Cotton Veshti Starching & Polishing": {
          name: "Amidonnage et polissage du veshti en coton",
          description: "Amidonnage impeccable et finition soignée pour le veshti en coton."
        },
        "Silk Veshti Polishing": {
          name: "Polissage du veshti en soie",
          description: "Polissage délicat pour préserver l'aspect haut de gamme de la soie."
        }
      },
      specialtyEyebrow: "NOTRE SPÉCIALITÉ",
      specialtyHeading: "Polissage haut de gamme des saris",

      specialtyDescriptionBefore:
        "Le sari est un vêtement d'exception qui nécessite un entretien textile spécifique. Notre ",

      specialtyDescriptionHighlight:
        "service exclusif de polissage des saris",

      specialtyDescriptionAfter:
        " est conçu pour raviver l'éclat, la couleur et la tenue de vos tissus traditionnels, qu'ils soient en soie, en coton ou en fibres mélangées.",

      specialtyItems: [
        {
          title: "Polissage des saris en soie",
          description:
            "Une technique douce de lissage et de polissage, idéale pour les saris de mariée et de cérémonie, qui protège les fils délicats tout en leur redonnant leur éclat d'origine.",
        },
        {
          title: "Tombé et drapé parfaits",
          description:
            "Un traitement ciblé qui élimine les plis profonds et garantit un drapé élégant et impeccable à votre vêtement.",
        },
      ],
      testimonialsEyebrow: "TÉMOIGNAGES",
      outOfFiveStars: "étoiles sur 5",

      testimonialReviews: [
        "Mes saris en soie de Kanjivaram m'ont été rendus magnifiquement polis et roulés. Chaque sari est traité avec autant de soin que s'il leur appartenait.",
        "Mon veshti en soie de mariage a retrouvé son éclat d'origine après le polissage. Je l'ai porté lors d'un mariage familial : il était impeccable, bien net, brillant et prêt à temps.",
        "Le préplissage m'a fait gagner énormément de temps avant les cérémonies. Des plis parfaits à chaque fois !",
        "Ils prennent grand soin des tissus délicats et sont très professionnels. C'est mon adresse de confiance pour les vêtements traditionnels.",
      ],
      testimonialsHeading: "Apprécié par nos clients",
      verifiedCustomer: "Client vérifié",

      contactHeading: "Offrez à vos vêtements le soin qu'ils méritent",
      contactDescription:
        "Du repassage quotidien à l'entretien des saris délicats et des tenues traditionnelles, nous sublimons chaque pièce.",
      whatsappUs: "Contactez-nous sur WhatsApp",

      followUs: "Suivez-nous",
      followDescription:
        "Restez informé de nos offres, de nos conseils d'entretien des saris et de nos dernières réalisations.",
      quickLinks: "Liens rapides",
      allRightsReserved: "Tous droits réservés.",
    },
  },
};

const savedLanguage = localStorage.getItem("ironMekaLanguage");

i18n.use(initReactI18next).init({
  resources,
  lng: ["en", "ta", "fr"].includes(savedLanguage)
    ? savedLanguage
    : "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ta", "fr"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
