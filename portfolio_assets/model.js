export const TYPED_STRINGS = [
  'Fachinformatiker Anwendungsentwicklung.',
  'Junior Software Developer.',
  'Full-Stack Developer.',
  'Softwareentwicklung mit Fokus auf Web & APIs.',
  'Verfügbar ab sofort.'
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend',
    color: 'accent3',
    skills: [
      { name: 'HTML5 / CSS3', level: 0.88 },
      { name: 'JavaScript ES6+', level: 0.82 },
      { name: 'TypeScript', level: 0.72 },
      { name: 'React', level: 0.70 }
    ]
  },
  {
    title: 'Backend',
    color: 'accent2',
    skills: [
      { name: 'Node.js / Express', level: 0.80 },
      { name: 'REST API Design', level: 0.78 },
      { name: 'Java 17', level: 0.72 },
      { name: 'Python', level: 0.65 }
    ]
  },
  {
    title: 'Datenbank & DevOps',
    color: 'accent',
    skills: [
      { name: 'SQL / SQLite', level: 0.79 },
      { name: 'Git / GitHub', level: 0.85 },
      { name: 'Maven', level: 0.63 },
      { name: 'Scrum / Kanban', level: 0.80 }
    ]
  },
  {
    title: 'Soft Skills',
    color: 'accent',
    skills: [
      { name: 'Teamführung', level: 0.92 },
      { name: 'Kundenkommunikation', level: 0.95 },
      { name: 'Problemlösung', level: 0.90 },
      { name: 'Mehrsprachigkeit', level: 0.97 }
    ]
  }
];

export const TIMELINE_ENTRIES = [
  {
    period: '04/2024 – 07/2026',
    role: 'Fachinformatiker Anwendungsentwicklung (Umschulung)',
    company: 'BBQ Baumann Bildung und Qualifizierung, Düsseldorf',
    description: 'Vollzeit-Umschulung mit Schwerpunkten auf Java, Python, Web-Entwicklung, Datenbanken und agilen Methoden. Abschlussprojekt: Inventar- und Bestandsverwaltungssystem (IHK 2026).',
    tags: ['Java', 'Python', 'HTML/CSS/JS', 'SQL', 'Scrum', 'IHK']
  },
  {
    period: '01/2024 – 03/2024',
    role: 'Full-Stack Web Development Bootcamp',
    company: 'Le Wagon Köln',
    description: 'Intensives 12-Wochen-Bootcamp. Teamprojekte: FoodBook (Rezept-App) und AirBnB-Klon. Fokus auf praxisorientierte Webentwicklung mit modernen Tools.',
    tags: ['Ruby on Rails', 'JavaScript', 'Git', 'REST API', 'UI/UX']
  },
  {
    period: '04/2018 – 09/2019',
    role: 'ROV-Pilot — Industrielle Unterwasserrobotik',
    company: 'Diving Service Chile',
    description: 'Steuerung ferngesteuerter Unterwasserroboter für industrielle Inspektionen in der Aquakultur. Wartung und Kalibrierung technischer Systeme, Reporting ans Management.',
    tags: ['Technisches System', 'Präzisionsarbeit', 'Inspektion', 'Reporting']
  },
  {
    period: '01/2016 – 09/2017',
    role: 'Technischer Support-Agent – 1st & 2nd Level',
    company: 'Movistar Chile, Santiago',
    description: 'Technischer Kundensupport für Internet, Festnetz und TV. Fehleranalyse, Troubleshooting, CRM-Dokumentation. Hohe Erstlösungsquote.',
    tags: ['IT-Support', 'CRM', 'Troubleshooting', 'Telekommunikation']
  },
  {
    period: '12/2014 – 11/2015',
    role: 'Technical Backoffice Agent',
    company: 'VTR Chile, Santiago',
    description: 'Bearbeitung technischer Tickets, Netzwerkanalyse, Zusammenarbeit mit Fachabteilungen. Strukturierte Fallbearbeitung im B2C-Umfeld.',
    tags: ['Backoffice', 'Netzwerk', 'B2C-Support', 'Analyse']
  },
  {
    period: '2009 – 2020',
    role: 'Operations Manager / Schichtleiter',
    company: 'Gastronomie — Berlin · Essen · Santiago · Puerto Varas',
    description: 'Teamführung (bis 10 Mitarbeitende), Personalplanung, Inventar, Einkauf, Kassenführung. Operative Leitung in internationalen, hochdynamischen Umgebungen.',
    tags: ['Teamführung', 'Operations', 'Internationale Erfahrung', 'Prozesse']
  }
];

export const PROJECTS = [
  {
    featured: true,
    icon: '📦',
    title: 'BBQ Inventory Management System',
    description: 'Full-Stack Webanwendung zur Verwaltung von Inventar und Beständen für eine IT-Lernumgebung.',
    summary: 'Praxisnahes Projekt mit Fokus auf Rollenverwaltung, Geräteverwaltung und automatisierten Berichten.',
    stack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'bcrypt', 'Nodemailer', 'PDFKit'],
    features: ['Benutzerrollen (Admin / Lehrer)', 'Geräteverwaltung', 'Bestandsbewegungen', 'E-Mail-Benachrichtigungen', 'PDF-Berichte', 'CSV Export'],
    links: [
      { label: 'GitHub', href: 'https://github.com/your-username/bbq-inventory-management', type: 'primary' },
      { label: 'Live Demo', href: 'https://your-demo-link.example', type: 'secondary' }
    ],
    badge: 'Professional Project',
    previewLabel: 'Screenshot Placeholder'
  },
  {
    featured: false,
    icon: '🐶',
    title: 'HundeSalon',
    description: 'Java Desktop Anwendung zur Verwaltung eines Hundesalons mit Datenbankanbindung.',
    summary: 'Desktop-Anwendung mit CRUD-Funktionalität, Kunden- und Hundeverwaltung sowie persistenter Speicherung.',
    stack: ['Java 17', 'Maven', 'JPA / EclipseLink', 'SQL', 'Swing GUI'],
    features: ['Kundenverwaltung', 'Hundeverwaltung', 'Persistente Speicherung', 'CRUD Operationen', 'Datenbankintegration'],
    links: [
      { label: 'GitHub', href: 'https://github.com/your-username/hundesalon', type: 'primary' },
      { label: 'Demo Video', href: 'https://your-demo-video.example', type: 'secondary' }
    ],
    previewLabel: 'Desktop UI Placeholder'
  },
  {
    featured: false,
    icon: '🍽️',
    title: 'FoodBook',
    description: 'Webanwendung zur Verwaltung und Organisation von Rezepten.',
    summary: 'Rezeptverwaltung, einfache Benutzerführung und praktische Web-App-Funktionalität.',
    stack: ['Ruby on Rails', 'SQL', 'HTML/CSS', 'JavaScript'],
    features: ['Rezeptverwaltung', 'Einkaufslisten', 'Responsive UI', 'Datenbankanbindung'],
    links: [
      { label: 'GitHub', href: 'https://github.com/your-username/foodbook', type: 'primary' }
    ],
    previewLabel: 'Web App Placeholder'
  }
];

export const MUSIC_EVENTS = [
  { title: 'Festival: Under the Black Sun', detail: 'Thüringen, Deutschland' },
  { title: 'Festival: Hall in the Sun', detail: 'Novahausen, Deutschland' },
  { title: 'Live in Antwerpen & Brüssel', detail: 'Belgien — eigene Band' },
  { title: 'Auftritte in Den Haag & Marl', detail: 'Niederlande & Deutschland' },
  { title: 'Session-Musician, Santiago', detail: 'Chile — diverse Projekte' },
  { title: 'Stadtmusikakademie Puerto Varas', detail: 'Ausbildung 2002–2007' }
];
