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
        h6: "As a Full-Stack Developer, I have experience with the technologies listed below and continuously expand my knowledge by learning new tools and frameworks. I am always eager to improve my skills, stay updated with industry trends, and explore innovative solutions. My passion for development drives me to take on challenging projects and optimize performance across both front-end and back-end systems.",


        c1: "Contacts",
        c2: "Name",
        c3: "Email",
        c4: "Message",
        c5: "Send",
        c6: "I am always open to new collaborations and exciting projects. My goal is to create innovative and efficient solutions. I look forward to your feedback and our exchange!",
        c7: "Message sent",


        p1: "My Projects",
        p2: "Here, I’ve gathered some of my learning projects that I’m currently working on. Each project helps me improve my skills and explore new technologies. This list will continue to grow as I take on new challenges, refine my existing work, and implement updates.",
        p3: "Technologies Used:",

        p4: "BlogApp is a social platform where users can create accounts, publish posts, and interact with other users through comments and likes. Built on Node.js and Express, the backend ensures a fast and scalable environment for managing user data and posts. React handles the dynamic UI, while Axios facilitates efficient communication between the frontend and backend. Users can browse posts, like them, comment, and view posts from others in real-time. MySQL is used for storing user profiles, posts, and interactions.",
        p5: "ChatApp is a real-time messaging platform where users can create an account, chat with others in private conversations. Built using PHP for backend handling, JavaScript powers the interactive elements like real-time updates. The app uses MySQL to securely store user data and conversations, ensuring smooth communication between users.",
        p6: "Ecommerce is a fully interactive e-commerce website that allows users to browse products, view details, and make purchasing decisions. Built with React.js, the site features a dynamic, responsive layout that adapts to any screen size. The app allows users to filter products, add items to the cart, and view detailed product information, such as descriptions, prices, and images. While the focus of the app is on the frontend, the logic behind it provides a full, engaging shopping experience. Users can explore products, view categories, and shop effortlessly, with a sleek design powered by CSS.",

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
        h6: "Als Full-Stack-Entwickler habe ich Erfahrung mit den unten aufgeführten Technologien und erweitere mein Wissen kontinuierlich, indem ich neue Tools und Frameworks erlerne. Ich bin stets bestrebt, meine Fähigkeiten zu verbessern, über Branchentrends auf dem Laufenden zu bleiben und innovative Lösungen zu erkunden. Meine Leidenschaft für die Entwicklung treibt mich dazu an, herausfordernde Projekte anzugehen und die Leistung sowohl im Frontend als auch im Backend zu optimieren.",

        c1: "Kontakt",  
        c2: "Name",  
        c3: "E-Mail",  
        c4: "Nachricht",  
        c5: "Senden",  
        c6: "Ich bin immer offen für neue Kooperationen und spannende Projekte. Mein Ziel ist es, innovative und effiziente Lösungen zu schaffen. Ich freue mich auf Ihr Feedback und unseren Austausch!",
        c7: "Nachricht gesendet",

        p1: "Meine Projekte",
        p2: "Hier habe ich einige meiner Lernprojekte zusammengestellt, an denen ich derzeit arbeite. Jedes Projekt hilft mir, meine Fähigkeiten zu verbessern und neue Technologien zu erkunden. Diese Liste wird weiter wachsen, da ich neue Herausforderungen annehme, meine bestehende Arbeit verfeinere und Updates implementiere.",
        p3: "Verwendete Technologien:",

        p4: "BlogApp ist eine soziale Plattform, auf der Benutzer Konten erstellen, Beiträge veröffentlichen und mit anderen Benutzern durch Kommentare und Likes interagieren können. Die Backend-Entwicklung basiert auf Node.js und Express, was eine schnelle und skalierbare Umgebung für die Verwaltung von Benutzerdaten und Beiträgen ermöglicht. React übernimmt die dynamische Benutzeroberfläche, während Axios eine effiziente Kommunikation zwischen Frontend und Backend sicherstellt. Benutzer können Beiträge durchsuchen, liken, kommentieren und in Echtzeit die Beiträge anderer anzeigen. MySQL wird verwendet, um Benutzerprofile, Beiträge und Interaktionen zu speichern.",
        p5: "ChatApp ist eine Echtzeit-Messaging-Plattform, auf der Benutzer ein Konto erstellen und in privaten Gesprächen mit anderen chatten können. Die Backend-Entwicklung erfolgt mit PHP, während JavaScript die interaktiven Elemente wie Echtzeit-Updates steuert. Die App nutzt MySQL, um Benutzerdaten und Gespräche sicher zu speichern und eine reibungslose Kommunikation zwischen den Benutzern zu gewährleisten.",
        p6: "Ecommerce ist eine vollständig interaktive E-Commerce-Website, die es Benutzern ermöglicht, Produkte zu durchsuchen, Details anzusehen und Kaufentscheidungen zu treffen. Die Seite wurde mit React.js erstellt und bietet ein dynamisches, responsives Layout, das sich an jede Bildschirmgröße anpasst. Die App ermöglicht es Benutzern, Produkte zu filtern, Artikel in den Warenkorb zu legen und detaillierte Produktinformationen wie Beschreibungen, Preise und Bilder anzusehen. Während der Fokus der App auf dem Frontend liegt, sorgt die dahinterstehende Logik für ein vollständiges und ansprechendes Einkaufserlebnis. Benutzer können Produkte entdecken, Kategorien anzeigen und mühelos einkaufen, mit einem eleganten Design, das durch CSS unterstützt wird."


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
