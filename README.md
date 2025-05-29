# Industriell Revolution Projekt

## Projektstruktur
Create-Industrial-Revolution/
├── server/                  # Backend Express-server
│   ├── src/
│   │   ├── controllers/     # Hanterare för olika routes
│   │   ├── models/          # Datamodeller
│   │   ├── routes/          # API-routes
│   │   ├── middleware/      # Middleware-funktioner
│   │   ├── utils/           # Hjälpfunktioner
│   │   └── app.js           # Express app konfiguration
│   ├── server.js            # Server entry point
│   └── package.json         # Server dependencies
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # Återanvändbara komponenter
│   │   ├── pages/           # Sidkomponenter
│   │   ├── services/        # API-tjänster
│   │   ├── utils/           # Hjälpfunktioner
│   │   ├── styles/          # CSS/SCSS filer
│   │   ├── App.js
│   │   └── index.js
│   └── package.json         # Client dependencies
├── package.json             # Root package.json för script och dependencies
├── .gitignore               # Git ignore fil
└── README.md                # Projektdokumentation

## Förutsättningar

För att köra detta projekt behöver du ha följande installerat:

- Node.js (version 14 eller senare)
- npm (kommer med Node.js)

## Installation

Följ dessa steg för att installera och konfigurera projektet:

1. Klona repositoryt:
   ```bash
   git clone https://github.com/ditt-användarnamn/Create-Industrial-Revolution.git
   cd Create-Industrial-Revolution
   npm run install-all
   npm run dev
2. Ladda ner depedencies för backend och frontend:
   ```bash
   npm run install-all
3. Kör frontend och backend samtidigt:
   ```bash
   npm run dev
Detta kommer att starta:

- Backend-servern på http://localhost:5000
- Frontend-utvecklingsservern på http://localhost:3000