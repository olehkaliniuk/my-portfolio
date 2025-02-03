import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Home: "Home",
        Projects: "Projects",
        Contacts: "Contacts",
        button: "Englisch",
        h1: "Hi, my name is",
        h2: "Oleh Kaliniuk",
        h3: "I'm Full-Stack-Developer",
        h4: "with a passion for crafting exceptional web experiences. I bring creativity and technical expertise to every project I work on.",
        h5: "My Projects",


        c1: "Contacts",
        c2: "Name",
        c3: "Email",
        c4: "Message",
        c5: "Send",
        c6: "I am always open to new collaborations and exciting projects. My goal is to create innovative and efficient solutions. I look forward to your feedback and our exchange!",

      },
    },
    de: {
      translation: {
        Home: "Startseite",
        Projects: "Projekte",
        Contacts: "Kontakte",
        button: "Deutsch",
        h1: "Hi, mein Name ist",
        h2: "Oleh Kaliniuk",
        h3: "Ich bin Full-Stack-Entwickler",
        h4: "mit einer Leidenschaft für die Gestaltung außergewöhnlicher Web-Erlebnisse. Ich bringe Kreativität und technisches Fachwissen in jedes Projekt ein, an dem ich arbeite.",
        h5: "Meine Projekte",

        c1: "Kontakt",  
        c2: "Name",  
        c3: "E-Mail",  
        c4: "Nachricht",  
        c5: "Senden",  
        c6: "Ich bin immer offen für neue Kooperationen und spannende Projekte. Mein Ziel ist es, innovative und effiziente Lösungen zu schaffen. Ich freue mich auf Ihr Feedback und unseren Austausch!"  

      },
    },
  },
  lng: "en", 
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
