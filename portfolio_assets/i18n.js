const SUPPORTED_LOCALES = ['de', 'en', 'es'];

const CONTENT = {
  de: {
    meta: {
      title: 'Damian Antonio Avila — Dev & Creative',
      description: 'Portfolio von Damian Antonio Avila – Fachinformatiker Anwendungsentwicklung, Full-Stack Developer, Musiker, Düsseldorf.'
    },
    nav: {
      about: 'Über mich',
      skills: 'Skills',
      experience: 'Erfahrung',
      projects: 'Projekte',
      music: 'Musik',
      contact: 'Kontakt'
    },
    hero: {
      eyebrow: 'Düsseldorf, Deutschland — Ab sofort verfügbar!',
      ctaPrimary: 'Projekte ansehen',
      ctaSecondary: 'Kontakt aufnehmen',
      scrollHint: 'scroll',
      stats: {
        years: 'Jahre Berufserfahrung',
        instruments: 'Instrumente',
        languages: 'Sprachen'
      }
    },
    sections: {
      profile: { label: '01 — Profil', title: 'Wer ich bin' },
      skills: { label: '02 — Kompetenzen', title: 'Tech Stack & Skills' },
      experience: { label: '03 — Werdegang', title: 'Erfahrung & Ausbildung' },
      projects: { label: '04 — Portfolio', title: 'Projekte' },
      music: { label: '05 — Kreativität', title: 'Musik & Kunst' },
      contact: { label: '06 — Kontakt', title: 'Lass uns reden.' }
    },
    about: {
      paragraphs: [
        'Ich bin <strong>Damian</strong> — gebürtig aus Neuquén, Argentinien, aufgewachsen in Südchile, heute in <strong>Düsseldorf</strong> verwurzelt. Mein Weg in die IT ist kein geradliniger, aber ein ehrlicher: 19 Jahre internationale Berufserfahrung, zwei Kontinente, und eine echte Leidenschaft für das Bauen von Dingen, die funktionieren.',
        'Aktuell schließe ich meine <strong>Umschulung zum Fachinformatiker Anwendungsentwicklung</strong> bei BBQ Düsseldorf ab (IHK 2026). Parallel dazu habe ich ein vollständiges Inventar- und Bestandsverwaltungssystem für das BBQ-Labor entwickelt — von der Konzeption bis zur Implementierung.',
        'Ich bringe mit, was man nicht aus Büchern lernt: <strong>Stressresistenz</strong>, echte Teamführung, internationale Kommunikation und die Fähigkeit, komplexe Probleme pragmatisch zu lösen. Tech ist mein neues Handwerk — und ich nehme es genauso ernst wie alles andere in meinem Leben.'
      ],
      tags: ['TypeScript', 'Node.js', 'Express.js', 'SQL', 'REST APIs', 'Scrum', 'Git', 'Java', 'Python', 'Linux CLI'],
      cards: {
        international: {
          title: 'International',
          text: 'Chile · Deutschland · — gelebt, gearbeitet, aufgetreten. Multilingualität ist Alltag, nicht Skill-Badge.'
        },
        depth: {
          title: 'Quereinsteiger mit Tiefe',
          text: 'Technischer Support, Telekommunikation, ROV-Pilotage, Gastronomie-Management — jede Rolle hat mein Denken geschärft.'
        },
        creative: {
          title: 'Musiker & Kreativer',
          text: '25+ Jahre Musikerfahrung, 7 Instrumente, Live-Auftritte auf Festivals in Europa und Chile. Kreativität ist keine Dekoration — sie ist Denkweise.'
        },
        ai: {
          title: 'AI-Native Workflow',
          text: 'Ich kombiniere klassische Softwareentwicklung mit KI-gestützten Tools (Claude, Copilot, ChatGPT) für schnelleres Prototyping und besseres Debugging.'
        }
      }
    },
    music: {
      yearsLabel: 'Jahre aktive Musikerfahrung',
      instruments: ['🎸 Gitarre', '🎻 Cello', '🥁 Schlagzeug', '🎺 Trompete', '🎻 Kontrabass', '🎸 Bass', '🎤 Gesang', '+ mehr'],
      description1: 'Ausgebildet an der Stadtmusikakademie Puerto Varas (2002–2007). Aktiver Session-Musiker, eigene Band sowie Mitwirkung in anderen Projekten. Live-Erfahrung in Europa und Chile.',
      description2: 'Teilnahme an Festivals wie <span style="color:var(--accent)">Under the Black Sun</span> und <span style="color:var(--accent)">Hole in the Sun</span> usw. Musik ist nicht Hobby — es ist ein fundamentaler Teil meines Denkens.'
    },
    contact: {
      intro: 'Ich bin offen für Junior-Stellen in Softwareentwicklung, Web, IT-Support und Quereinsteigerpositionen ab Sommer 2026. Kurze Nachricht reicht.',
      cvLabel: 'CV herunterladen',
      backToTop: 'Nach oben'
    },
    footer: {
      copy: '© 2026 Damian Antonio Avila — gebaut mit <span>♥</span> & TypeScript'
    },
    typedStrings: [
      'Fachinformatiker Anwendungsentwicklung.',
      'Full-Stack-Web-Entwickler.',
      'IT-Quereinsteiger mit 19 Jahren Erfahrung.',
      'Musiker. Problemlöser. Teamplayer.',
      'Verfügbar ab sofort.'
    ],
    skillGroups: [
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
    ],
    timeline: [
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
    ],
    projects: [
      {
        featured: true,
        icon: '📦',
        title: 'Inventar- & Bestandsverwaltungssystem',
        summary: 'Praxisnahes Projekt mit Fokus auf Rollenverwaltung, Geräteverwaltung und automatisierten Berichten.',
        description: 'Full-Stack-Webanwendung zur Verwaltung von Inventar und Beständen für eine IT-Lernumgebung.',
        features: ['Benutzerrollen (Admin / Lehrer)', 'Geräteverwaltung', 'Bestandsbewegungen', 'E-Mail-Benachrichtigungen', 'PDF-Berichte', 'CSV Export'],
        stack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'bcrypt', 'Nodemailer', 'PDFKit'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/bbq-inventory-management', type: 'primary' },
          { label: 'Live Demo', href: 'https://your-demo-link.example', type: 'secondary' }
        ],
        badge: 'Professionelles Projekt',
        highlightsLabel: 'Highlights'
      },
      {
        featured: false,
        icon: '🐶',
        title: 'HundeSalon',
        summary: 'Desktop-Anwendung mit CRUD-Funktionalität, Kunden- und Hundeverwaltung sowie persistenter Speicherung.',
        description: 'Java Desktop Anwendung zur Verwaltung eines Hundesalons mit Datenbankanbindung.',
        features: ['Kundenverwaltung', 'Hundeverwaltung', 'Persistente Speicherung', 'CRUD Operationen', 'Datenbankintegration'],
        stack: ['Java 17', 'Maven', 'JPA / EclipseLink', 'SQL', 'Swing GUI'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/hundesalon', type: 'primary' },
          { label: 'Demo Video', href: 'https://your-demo-video.example', type: 'secondary' }
        ],
        highlightsLabel: 'Highlights'
      },
      {
        featured: false,
        icon: '🍽️',
        title: 'FoodBook',
        summary: 'Rezeptverwaltung, einfache Benutzerführung und praktische Web-App-Funktionalität.',
        description: 'Webanwendung zur Verwaltung und Organisation von Rezepten.',
        features: ['Rezeptverwaltung', 'Einkaufslisten', 'Responsive UI', 'Datenbankanbindung'],
        stack: ['Ruby on Rails', 'SQL', 'HTML/CSS', 'JavaScript'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/foodbook', type: 'primary' }
        ],
        highlightsLabel: 'Highlights'
      }
    ],
    musicEvents: [
      { title: 'Festival: Under the Black Sun', detail: 'Thüringen, Deutschland' },
      { title: 'Festival: Hole in the Sun', detail: 'Rauschenberg, Deutschland' },
      { title: 'Live in Antwerpen', detail: 'Belgien — eigene Band' },
      { title: 'Auftritte in Den Haag & Marl', detail: 'Niederlande & Deutschland' },
      { title: 'Session-Musiker, Santiago', detail: 'Chile — diverse Projekte' },
      { title: 'Stadtmusikakademie Puerto Varas', detail: 'Ausbildung 2002–2007' }
    ]
  },
  en: {
    meta: {
      title: 'Damian Antonio Avila — Dev & Creative',
      description: 'Portfolio of Damian Antonio Avila — application developer, full-stack developer, musician, based in Düsseldorf.'
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      music: 'Music',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Düsseldorf, Germany — available now!',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Get in touch',
      scrollHint: 'scroll',
      stats: {
        years: 'Years of experience',
        instruments: 'Instruments',
        languages: 'Languages'
      }
    },
    sections: {
      profile: { label: '01 — Profile', title: 'Who I am' },
      skills: { label: '02 — Skills', title: 'Tech stack & skills' },
      experience: { label: '03 — Journey', title: 'Experience & training' },
      projects: { label: '04 — Portfolio', title: 'Projects' },
      music: { label: '05 — Creativity', title: 'Music & art' },
      contact: { label: '06 — Contact', title: 'Let’s talk.' }
    },
    about: {
      paragraphs: [
        'I am <strong>Damian</strong> — born in Neuquén, Argentina, raised in southern Chile, now rooted in <strong>Düsseldorf</strong>. My path into IT has not been straight, but it has been honest: 19 years of international professional experience, two continents, and a real passion for building things that work.',
        'At the moment I am completing my <strong>training as an application developer</strong> at BBQ Düsseldorf (IHK 2026). In parallel, I developed a complete inventory and stock management system for the BBQ lab — from concept to implementation.',
        'I bring what you cannot learn from books: <strong>stress resilience</strong>, real team leadership, international communication, and the ability to solve complex problems pragmatically. Tech is my new craft — and I take it as seriously as anything else in my life.'
      ],
      tags: ['TypeScript', 'Node.js', 'Express.js', 'SQL', 'REST APIs', 'Scrum', 'Git', 'Java', 'Python', 'Linux CLI'],
      cards: {
        international: {
          title: 'International',
          text: 'Chile · Germany · — lived, worked, performed. Multilingualism is everyday life, not a badge.'
        },
        depth: {
          title: 'Career changer with depth',
          text: 'Technical support, telecommunications, ROV piloting, hospitality management — every role sharpened my thinking.'
        },
        creative: {
          title: 'Musician & creative',
          text: '25+ years of musical experience, 7 instruments, live performances at festivals in Europe and Chile. Creativity is not decoration — it is a mindset.'
        },
        ai: {
          title: 'AI-native workflow',
          text: 'I combine classic software development with AI-powered tools such as Claude, Copilot, and ChatGPT for faster prototyping and better debugging.'
        }
      }
    },
    music: {
      yearsLabel: 'Years of active musical experience',
      instruments: ['🎸 Guitar', '🎻 Cello', '🥁 Drums', '🎺 Trumpet', '🎻 Double bass', '🎸 Bass', '🎤 Voice', '+ more'],
      description1: 'Trained at the Puerto Varas City Music Academy (2002–2007). Active session musician, own band, and collaborations in other projects. Live experience in Europe and Chile.',
      description2: 'Participation in festivals such as <span style="color:var(--accent)">Under the Black Sun</span> and <span style="color:var(--accent)">Hole in the Sun</span>. Music is not a hobby — it is a fundamental part of my thinking.'
    },
    contact: {
      intro: 'I am open to junior roles in software development, web, IT support, and career-change positions from summer 2026 onward. A short message is enough.',
      cvLabel: 'Download CV',
      backToTop: 'Back to top'
    },
    footer: {
      copy: '© 2026 Damian Antonio Avila — built with <span>♥</span> & TypeScript'
    },
    typedStrings: [
      'Application developer.',
      'Full-stack web developer.',
      'Career changer with 19 years of experience.',
      'Musician. Problem solver. Team player.',
      'Available now.'
    ],
    skillGroups: [
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
        title: 'Databases & DevOps',
        color: 'accent',
        skills: [
          { name: 'SQL / SQLite', level: 0.79 },
          { name: 'Git / GitHub', level: 0.85 },
          { name: 'Maven', level: 0.63 },
          { name: 'Scrum / Kanban', level: 0.80 }
        ]
      },
      {
        title: 'Soft skills',
        color: 'accent',
        skills: [
          { name: 'Team leadership', level: 0.92 },
          { name: 'Customer communication', level: 0.95 },
          { name: 'Problem solving', level: 0.90 },
          { name: 'Multilingualism', level: 0.97 }
        ]
      }
    ],
    timeline: [
      {
        period: '04/2024 – 07/2026',
        role: 'Application developer apprenticeship',
        company: 'BBQ Baumann Bildung und Qualifizierung, Düsseldorf',
        description: 'Full-time apprenticeship focused on Java, Python, web development, databases, and agile methods. Final project: inventory and stock management system (IHK 2026).',
        tags: ['Java', 'Python', 'HTML/CSS/JS', 'SQL', 'Scrum', 'IHK']
      },
      {
        period: '01/2024 – 03/2024',
        role: 'Full-Stack Web Development Bootcamp',
        company: 'Le Wagon Cologne',
        description: 'Intensive 12-week bootcamp. Team projects: FoodBook and an AirBnB clone. Focus on practical web development with modern tools.',
        tags: ['Ruby on Rails', 'JavaScript', 'Git', 'REST API', 'UI/UX']
      },
      {
        period: '04/2018 – 09/2019',
        role: 'ROV pilot — industrial underwater robotics',
        company: 'Diving Service Chile',
        description: 'Operating remote underwater robots for industrial inspections in aquaculture. Maintenance and calibration of technical systems, reporting to management.',
        tags: ['Technical systems', 'Precision work', 'Inspection', 'Reporting']
      },
      {
        period: '01/2016 – 09/2017',
        role: 'Technical support agent — 1st & 2nd level',
        company: 'Movistar Chile, Santiago',
        description: 'Technical customer support for internet, landline, and TV. Fault analysis, troubleshooting, CRM documentation. High first-contact resolution rate.',
        tags: ['IT support', 'CRM', 'Troubleshooting', 'Telecommunications']
      },
      {
        period: '12/2014 – 11/2015',
        role: 'Technical backoffice agent',
        company: 'VTR Chile, Santiago',
        description: 'Handling technical tickets, network analysis, collaboration with specialist departments. Structured case handling in a B2C environment.',
        tags: ['Backoffice', 'Network', 'B2C support', 'Analysis']
      },
      {
        period: '2009 – 2020',
        role: 'Operations manager / shift leader',
        company: 'Hospitality — Berlin · Essen · Santiago · Puerto Varas',
        description: 'Team leadership (up to 10 employees), staffing, inventory, purchasing, cash handling. Operational leadership in international, fast-paced environments.',
        tags: ['Leadership', 'Operations', 'International experience', 'Processes']
      }
    ],
    projects: [
      {
        featured: true,
        icon: '📦',
        title: 'Inventory & stock management system',
        summary: 'Practical project focused on role management, device tracking, and automated reporting.',
        description: 'Full-stack web application for managing inventory and stock in an IT learning environment.',
        features: ['User roles (admin / teacher)', 'Device management', 'Stock movements', 'Email notifications', 'PDF reports', 'CSV export'],
        stack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'bcrypt', 'Nodemailer', 'PDFKit'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/bbq-inventory-management', type: 'primary' },
          { label: 'Live demo', href: 'https://your-demo-link.example', type: 'secondary' }
        ],
        badge: 'Professional project',
        highlightsLabel: 'Highlights'
      },
      {
        featured: false,
        icon: '🐶',
        title: 'HundeSalon',
        summary: 'Desktop application with CRUD functionality, customer and dog management, and persistent storage.',
        description: 'Java desktop application for managing a dog salon with database integration.',
        features: ['Customer management', 'Dog management', 'Persistent storage', 'CRUD operations', 'Database integration'],
        stack: ['Java 17', 'Maven', 'JPA / EclipseLink', 'SQL', 'Swing GUI'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/hundesalon', type: 'primary' },
          { label: 'Demo video', href: 'https://your-demo-video.example', type: 'secondary' }
        ],
        highlightsLabel: 'Highlights'
      },
      {
        featured: false,
        icon: '🍽️',
        title: 'FoodBook',
        summary: 'Recipe management, intuitive navigation, and practical web app functionality.',
        description: 'Web application for managing and organizing recipes.',
        features: ['Recipe management', 'Shopping lists', 'Responsive UI', 'Database connectivity'],
        stack: ['Ruby on Rails', 'SQL', 'HTML/CSS', 'JavaScript'],
        links: [{ label: 'GitHub', href: 'https://github.com/your-username/foodbook', type: 'primary' }],
        highlightsLabel: 'Highlights'
      }
    ],
    musicEvents: [
      { title: 'Festival: Under the Black Sun', detail: 'Thuringia, Germany' },
      { title: 'Festival: Hole in the Sun', detail: 'Rauschenberg, Germany' },
      { title: 'Live in Antwerpen', detail: 'Belgium — own band' },
      { title: 'Performances in The Hague & Marl', detail: 'Netherlands & Germany' },
      { title: 'Session musician, Santiago', detail: 'Chile — various projects' },
      { title: 'Puerto Varas City Music Academy', detail: 'Training 2002–2007' }
    ]
  },
  es: {
    meta: {
      title: 'Damian Antonio Avila — Dev & Creative',
      description: 'Portafolio de Damian Antonio Avila — desarrollador de aplicaciones, full-stack, músico, basado en Düsseldorf.'
    },
    nav: {
      about: 'Sobre mí',
      skills: 'Skills',
      experience: 'Experiencia',
      projects: 'Proyectos',
      music: 'Música',
      contact: 'Contacto'
    },
    hero: {
      eyebrow: 'Düsseldorf, Alemania — ¡disponible ahora!',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Contactar',
      scrollHint: 'desplazar',
      stats: {
        years: 'Años de experiencia',
        instruments: 'Instrumentos',
        languages: 'Idiomas'
      }
    },
    sections: {
      profile: { label: '01 — Perfil', title: 'Quién soy' },
      skills: { label: '02 — Competencias', title: 'Stack tecnológico y skills' },
      experience: { label: '03 — Trayectoria', title: 'Experiencia y formación' },
      projects: { label: '04 — Portafolio', title: 'Proyectos' },
      music: { label: '05 — Creatividad', title: 'Música y arte' },
      contact: { label: '06 — Contacto', title: 'Hablemos.' }
    },
    about: {
      paragraphs: [
        'Soy <strong>Damian</strong> — nacido en Neuquén, Argentina, criado en el sur de Chile y hoy arraigado en <strong>Düsseldorf</strong>. Mi camino hacia la TI no ha sido recto, pero sí honesto: 19 años de experiencia profesional internacional, dos continentes, y una auténtica pasión por construir cosas que funcionan.',
        'Actualmente estoy finalizando mi <strong>formación como técnico informático en desarrollo de aplicaciones</strong> en BBQ Düsseldorf (IHK 2026). En paralelo, desarrollé un sistema completo de gestión de inventario y stock para el laboratorio de BBQ: desde la concepción hasta la implementación.',
        'Aporto lo que no se aprende de los libros: <strong>resistencia al estrés</strong>, liderazgo real de equipos, comunicación internacional y la capacidad de resolver problemas complejos de forma pragmática. La tecnología es mi nuevo oficio — y lo tomo tan en serio como cualquier otra cosa en mi vida.'
      ],
      tags: ['TypeScript', 'Node.js', 'Express.js', 'SQL', 'REST APIs', 'Scrum', 'Git', 'Java', 'Python', 'Linux CLI'],
      cards: {
        international: {
          title: 'Internacional',
          text: 'Chile · Alemania · — vivido, trabajado, actuado. El multilingüismo es algo cotidiano, no una insignia.'
        },
        depth: {
          title: 'Cambiador de carrera con profundidad',
          text: 'Soporte técnico, telecomunicaciones, pilotaje ROV, gestión de hostelería: cada rol afiló mi forma de pensar.'
        },
        creative: {
          title: 'Músico y creativo',
          text: 'Más de 25 años de experiencia musical, 7 instrumentos, actuaciones en festivales de Europa y Chile. La creatividad no es decoración: es una forma de pensar.'
        },
        ai: {
          title: 'Flujo de trabajo con IA',
          text: 'Combino el desarrollo clásico de software con herramientas potenciadas por IA como Claude, Copilot y ChatGPT para prototipar más rápido y depurar mejor.'
        }
      }
    },
    music: {
      yearsLabel: 'Años de experiencia musical activa',
      instruments: ['🎸 Guitarra', '🎻 Chelo', '🥁 Batería', '🎺 Trompeta', '🎻 Contrabajo', '🎸 Bajo', '🎤 Voz', '+ más'],
      description1: 'Formación en la Academia de Música de Puerto Varas (2002–2007). Músico de sesión activo, banda propia y participación en otros proyectos. Experiencia en vivo en Europa y Chile.',
      description2: 'Participación en festivales como <span style="color:var(--accent)">Under the Black Sun</span> y <span style="color:var(--accent)">Hole in the Sun</span>. La música no es un hobby: es una parte fundamental de mi forma de pensar.'
    },
    contact: {
      intro: 'Estoy abierto a puestos junior en desarrollo de software, web, soporte IT y posiciones de cambio de carrera a partir del verano de 2026. Un mensaje breve basta.',
      cvLabel: 'Descargar CV',
      backToTop: 'Volver arriba'
    },
    footer: {
      copy: '© 2026 Damian Antonio Avila — construido con <span>♥</span> & TypeScript'
    },
    typedStrings: [
      'Desarrollador de aplicaciones.',
      'Desarrollador web full-stack.',
      'Cambiador de carrera con 19 años de experiencia.',
      'Músico. Solucionador de problemas. Team player.',
      'Disponible ahora.'
    ],
    skillGroups: [
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
        title: 'Bases de datos & DevOps',
        color: 'accent',
        skills: [
          { name: 'SQL / SQLite', level: 0.79 },
          { name: 'Git / GitHub', level: 0.85 },
          { name: 'Maven', level: 0.63 },
          { name: 'Scrum / Kanban', level: 0.80 }
        ]
      },
      {
        title: 'Soft skills',
        color: 'accent',
        skills: [
          { name: 'Liderazgo de equipo', level: 0.92 },
          { name: 'Comunicación con clientes', level: 0.95 },
          { name: 'Resolución de problemas', level: 0.90 },
          { name: 'Multilingüismo', level: 0.97 }
        ]
      }
    ],
    timeline: [
      {
        period: '04/2024 – 07/2026',
        role: 'Formación como técnico informático en desarrollo de aplicaciones',
        company: 'BBQ Baumann Bildung und Qualifizierung, Düsseldorf',
        description: 'Formación a tiempo completo con foco en Java, Python, desarrollo web, bases de datos y métodos ágiles. Proyecto final: sistema de gestión de inventario y stock (IHK 2026).',
        tags: ['Java', 'Python', 'HTML/CSS/JS', 'SQL', 'Scrum', 'IHK']
      },
      {
        period: '01/2024 – 03/2024',
        role: 'Bootcamp de desarrollo web full-stack',
        company: 'Le Wagon Colonia',
        description: 'Bootcamp intensivo de 12 semanas. Proyectos en equipo: FoodBook y un clon de AirBnB. Enfoque en desarrollo web práctico con herramientas modernas.',
        tags: ['Ruby on Rails', 'JavaScript', 'Git', 'REST API', 'UI/UX']
      },
      {
        period: '04/2018 – 09/2019',
        role: 'Piloto ROV — robótica submarina industrial',
        company: 'Diving Service Chile',
        description: 'Manejo de robots submarinos remotos para inspecciones industriales en acuicultura. Mantenimiento y calibración de sistemas técnicos, reportes al management.',
        tags: ['Sistema técnico', 'Trabajo preciso', 'Inspección', 'Reporting']
      },
      {
        period: '01/2016 – 09/2017',
        role: 'Agente de soporte técnico — 1st & 2nd level',
        company: 'Movistar Chile, Santiago',
        description: 'Soporte técnico a clientes para internet, teléfono fijo y TV. Análisis de fallos, troubleshooting, documentación CRM. Alta tasa de resolución en primera instancia.',
        tags: ['IT support', 'CRM', 'Troubleshooting', 'Telecomunicaciones']
      },
      {
        period: '12/2014 – 11/2015',
        role: 'Agente de backoffice técnico',
        company: 'VTR Chile, Santiago',
        description: 'Gestión de tickets técnicos, análisis de red, colaboración con departamentos especializados. Manejo estructurado de casos en entorno B2C.',
        tags: ['Backoffice', 'Red', 'Soporte B2C', 'Análisis']
      },
      {
        period: '2009 – 2020',
        role: 'Operations manager / líder de turno',
        company: 'Hostelería — Berlín · Essen · Santiago · Puerto Varas',
        description: 'Liderazgo de equipo (hasta 10 personas), planificación del personal, inventario, compras, caja. Dirección operativa en entornos internacionales y de alta dinámica.',
        tags: ['Liderazgo', 'Operaciones', 'Experiencia internacional', 'Procesos']
      }
    ],
    projects: [
      {
        featured: true,
        icon: '📦',
        title: 'Sistema de gestión de inventario y stock',
        summary: 'Proyecto práctico enfocado en gestión de roles, control de dispositivos y reportes automatizados.',
        description: 'Aplicación web full-stack para la gestión de inventario y stock en un entorno de aprendizaje de TI.',
        features: ['Roles de usuario (admin / profesor)', 'Gestión de dispositivos', 'Movimientos de stock', 'Notificaciones por correo', 'Informes PDF', 'Exportación CSV'],
        stack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'SQLite', 'JWT', 'bcrypt', 'Nodemailer', 'PDFKit'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/bbq-inventory-management', type: 'primary' },
          { label: 'Demo en vivo', href: 'https://your-demo-link.example', type: 'secondary' }
        ],
        badge: 'Proyecto profesional',
        highlightsLabel: 'Destacados'
      },
      {
        featured: false,
        icon: '🐶',
        title: 'HundeSalon',
        summary: 'Aplicación de escritorio con funcionalidad CRUD, gestión de clientes y perros, y almacenamiento persistente.',
        description: 'Aplicación Java de escritorio para gestionar un salón de perros con conexión a base de datos.',
        features: ['Gestión de clientes', 'Gestión de perros', 'Almacenamiento persistente', 'Operaciones CRUD', 'Integración con base de datos'],
        stack: ['Java 17', 'Maven', 'JPA / EclipseLink', 'SQL', 'Swing GUI'],
        links: [
          { label: 'GitHub', href: 'https://github.com/your-username/hundesalon', type: 'primary' },
          { label: 'Video demo', href: 'https://your-demo-video.example', type: 'secondary' }
        ],
        highlightsLabel: 'Destacados'
      },
      {
        featured: false,
        icon: '🍽️',
        title: 'FoodBook',
        summary: 'Gestión de recetas, navegación intuitiva y funcionalidad práctica de web app.',
        description: 'Aplicación web para gestionar y organizar recetas.',
        features: ['Gestión de recetas', 'Listas de compra', 'UI responsive', 'Conexión con base de datos'],
        stack: ['Ruby on Rails', 'SQL', 'HTML/CSS', 'JavaScript'],
        links: [{ label: 'GitHub', href: 'https://github.com/your-username/foodbook', type: 'primary' }],
        highlightsLabel: 'Destacados'
      }
    ],
    musicEvents: [
      { title: 'Festival: Under the Black Sun', detail: 'Turingia, Alemania' },
      { title: 'Festival: Hole in the Sun', detail: 'Rauschenberg, Alemania' },
      { title: 'Live in Antwerpen', detail: 'Bélgica — propia banda' },
      { title: 'Actuaciones en La Haya y Marl', detail: 'Países Bajos & Alemania' },
      { title: 'Músico de sesión, Santiago', detail: 'Chile — diversos proyectos' },
      { title: 'Academia de Música de Puerto Varas', detail: 'Formación 2002–2007' }
    ]
  }
};

let activeLocale = 'de';
let typedTimer = null;

function getInitialLocale() {
  const stored = window.localStorage.getItem('portfolio-lang');
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    return stored;
  }
  const browser = navigator.language.slice(0, 2);
  if (SUPPORTED_LOCALES.includes(browser)) {
    return browser;
  }
  return 'de';
}

function getContent(locale = activeLocale) {
  return CONTENT[locale] || CONTENT.de;
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function updateActiveLanguageButtons() {
  document.querySelectorAll('.lang-switch').forEach((button) => {
    const isActive = button.dataset.lang === activeLocale;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function applyStaticContent() {
  const content = getContent();
  document.documentElement.lang = activeLocale;
  document.title = content.meta.title;

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', content.meta.description);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(content, key);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html');
    const value = getNestedValue(content, key);
    if (typeof value === 'string') {
      element.innerHTML = value;
    }
  });

  const aboutTags = document.getElementById('aboutTags');
  if (aboutTags) {
    aboutTags.innerHTML = content.about.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');
  }

  const instrumentChips = document.getElementById('instrumentChips');
  if (instrumentChips) {
    instrumentChips.innerHTML = content.music.instruments.map((instrument) => `<div class="instrument-chip">${instrument}</div>`).join('');
  }

  const musicDescription1 = document.getElementById('musicDescription1');
  if (musicDescription1) {
    musicDescription1.innerHTML = content.music.description1;
  }

  const musicDescription2 = document.getElementById('musicDescription2');
  if (musicDescription2) {
    musicDescription2.innerHTML = content.music.description2;
  }

  updateActiveLanguageButtons();
}

function renderSkills() {
  const content = getContent();
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = content.skillGroups.map((group) => `
    <div class="skill-group reveal">
      <div class="skill-group-title">${group.title}</div>
      <div class="skill-list">
        ${group.skills.map((skill) => `
          <div class="skill-item">
            <span class="skill-name">${skill.name}</span>
            <div class="skill-bar">
              <div class="skill-fill ${group.color !== 'accent' ? group.color : ''}" style="--target:${skill.level}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-item').forEach((item, index) => {
          setTimeout(() => item.classList.add('animated'), index * 80);
        });
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-group').forEach((group) => observer.observe(group));
}

function renderTimeline() {
  const content = getContent();
  const container = document.getElementById('timeline');
  if (!container) return;

  container.innerHTML = content.timeline.map((entry) => `
    <div class="timeline-entry">
      <div class="timeline-dot"></div>
      <div class="timeline-period">${entry.period}</div>
      <div class="timeline-role">${entry.role}</div>
      <div class="timeline-company">${entry.company}</div>
      <p class="timeline-desc">${entry.description}</p>
      <div class="timeline-tags">
        ${entry.tags.map((tag) => `<span class="timeline-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.timeline-entry').forEach((entry) => observer.observe(entry));
}

function renderProjects() {
  const content = getContent();
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const featured = content.projects.filter((project) => project.featured);
  const rest = content.projects.filter((project) => !project.featured);

  const buildLinks = (project) => {
    const links = project.links || [{ label: 'GitHub', href: project.github, type: 'primary' }];
    return links.map((link) => `
      <a href="${link.href}" class="project-link ${link.type === 'primary' ? 'primary' : 'secondary'}" target="_blank" rel="noopener">${link.label}</a>
    `).join('');
  };

  const featuredHTML = featured.map((project) => `
    <div class="project-card project-featured">
      <div class="project-header">
        <div>
          <div class="project-icon">${project.icon}</div>
          <div class="project-title">${project.title}</div>
          <div class="project-featured-badge">${project.badge || 'Professional Project'}</div>
          <p class="project-desc">${project.summary}</p>
        </div>
        <div class="project-links">${buildLinks(project)}</div>
      </div>
      <div class="project-body">
        <p class="project-desc">${project.description}</p>
        <div class="project-features">
          <div class="project-features-title">${project.highlightsLabel || 'Highlights'}</div>
          <ul class="project-feature-list">
            ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div class="project-stack">
          ${project.stack.map((item) => `<span class="stack-item">${item}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const restHTML = rest.map((project) => `
    <div class="project-card">
      <div class="project-header">
        <div>
          <div class="project-icon">${project.icon}</div>
          <div class="project-title">${project.title}</div>
          <p class="project-desc">${project.summary}</p>
        </div>
        <div class="project-links">${buildLinks(project)}</div>
      </div>
      <div class="project-body">
        <p class="project-desc">${project.description}</p>
        <div class="project-features">
          <div class="project-features-title">${project.highlightsLabel || 'Highlights'}</div>
          <ul class="project-feature-list">
            ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        <div class="project-stack">
          ${project.stack.map((item) => `<span class="stack-item">${item}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  grid.innerHTML = featuredHTML + restHTML;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), index * 100);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card').forEach((entry) => observer.observe(entry));
}

function renderMusic() {
  const content = getContent();
  const container = document.getElementById('musicTimeline');
  if (!container) return;

  container.innerHTML = content.musicEvents.map((event) => `
    <div class="music-event">
      <div class="music-event-title">${event.title}</div>
      <div class="music-event-detail">${event.detail}</div>
    </div>
  `).join('');
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }, 100);
}

function initTyped() {
  const element = document.getElementById('typedText');
  if (!element) return;

  clearTimeout(typedTimer);

  let stringIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const strings = getContent().typedStrings;
    const current = strings[stringIndex];

    if (deleting) {
      element.textContent = current.substring(0, charIndex--);
      if (charIndex < 0) {
        deleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typedTimer = setTimeout(tick, 400);
        return;
      }
      typedTimer = setTimeout(tick, 40);
    } else {
      element.textContent = current.substring(0, charIndex++);
      if (charIndex > current.length) {
        deleting = true;
        typedTimer = setTimeout(tick, 2200);
        return;
      }
      typedTimer = setTimeout(tick, 60);
    }
  }

  typedTimer = setTimeout(tick, 800);
}

function animateCount(element, target, suffix = '') {
  let value = 0;
  const step = Math.ceil(target / 40);
  const timer = setInterval(() => {
    value = Math.min(value + step, target);
    element.textContent = `${value}${suffix}`;
    if (value >= target) clearInterval(timer);
  }, 30);
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(document.getElementById('countYears'), 14, '+');
        animateCount(document.getElementById('countInstruments'), 7);
        animateCount(document.getElementById('countLangs'), 3);
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const statsElement = document.querySelector('.hero-stats');
  if (statsElement) observer.observe(statsElement);
}

function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
}

function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!nav || !hamburger || !mobileMenu) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

function bindLanguageSwitcher() {
  document.querySelectorAll('.lang-switch').forEach((button) => {
    button.addEventListener('click', () => {
      const locale = button.dataset.lang;
      if (!locale || !SUPPORTED_LOCALES.includes(locale)) return;
      setLocale(locale);
    });
  });
}

function setLocale(locale) {
  activeLocale = locale;
  window.localStorage.setItem('portfolio-lang', locale);
  applyStaticContent();
  renderSkills();
  renderTimeline();
  renderProjects();
  renderMusic();
  initTyped();
  initReveal();
}

function boot() {
  initCursor();
  initNav();
  bindLanguageSwitcher();
  initCounters();
  setLocale(getInitialLocale());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
