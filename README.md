# Supabase Tutorial Projekt 🚀

Dieses Projekt demonstriert die grundlegende Einrichtung und Verwendung von Supabase, einer modernen Alternative zu Firebase.

## 📚 Was wir bisher gelernt haben

### 1. Projekt-Setup
- [x] Supabase-Projekt erstellt
- [x] Lokales Node.js-Projekt initialisiert
- [x] Supabase-Client konfiguriert

### 2. Datenbank-Grundlagen
- [x] Erste Tabelle erstellt (`meine_tabelle`)
- [x] Automatische Spalten verstanden:
  - `id` (int8) - Primärschlüssel
  - `created_at` (timestamptz) - Erstellungszeitpunkt

### 3. Sicherheit
- [x] Row Level Security (RLS) kennengelernt
- [x] Grundlegende Zugriffsrechte eingerichtet

## 🗂 Projektstruktur
```
supabase001/
├── src/
│   ├── index.js         # Hauptdatei mit Datenbankoperationen
│   └── supabaseClient.js # Supabase-Konfiguration
├── package.json         # Projektabhängigkeiten
└── README.md           # Projektdokumentation
```

## 🔧 Installation

1. Repository klonen:
```bash
git clone [repository-url]
cd supabase001
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Supabase-Konfiguration:
   - Erstelle eine `.env` Datei (später)
   - Füge deine Supabase-URL und API-Key hinzu

## 🚀 Erste Schritte

1. **Supabase-Projekt erstellen**
   - Besuche [supabase.com](https://supabase.com)
   - Erstelle ein neues Projekt
   - Speichere die Projekt-URL und den API-Key

2. **Client konfigurieren**
   - Öffne `src/supabaseClient.js`
   - Füge deine Projekt-URL und API-Key ein

3. **Erste Datenbankabfrage**
   - Führe das Beispiel aus:
   ```bash
   npm start
   ```

## 📝 Code-Beispiele

### Verbindung testen
```javascript
import { supabase } from './supabaseClient.js'

async function testConnection() {
  const { data, error } = await supabase
    .from('meine_tabelle')
    .select('*')
  
  if (error) {
    console.error('Fehler:', error.message)
  } else {
    console.log('Daten:', data)
  }
}
```

## 🔐 Sicherheitshinweise

1. **API-Keys**
   - Niemals API-Keys im Code committen
   - Später: Umgebungsvariablen verwenden

2. **Row Level Security (RLS)**
   - Standardmäßig aktiviert
   - Policies für Zugriffskontrolle definieren

## 📈 Nächste Schritte

- [ ] Tabelle um weitere Spalten erweitern
- [ ] CRUD-Operationen implementieren
- [ ] Authentifizierung einrichten
- [ ] Echtzeit-Subscriptions testen
- [ ] Datei-Upload mit Storage
- [ ] Umgebungsvariablen einrichten

## 🤝 Mitmachen

1. Fork das Repository
2. Erstelle einen Feature Branch
3. Committe deine Änderungen
4. Pushe zum Branch
5. Erstelle einen Pull Request

## 📚 Ressourcen

- [Supabase Dokumentation](https://supabase.com/docs)
- [JavaScript Client API](https://supabase.com/docs/reference/javascript)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

## 🐛 Troubleshooting

### Häufige Probleme und Lösungen

1. **RLS-Fehler**
   - Überprüfe die Row Level Security Einstellungen
   - Stelle sicher, dass Policies korrekt konfiguriert sind

2. **Verbindungsprobleme**
   - Überprüfe URL und API-Key
   - Stelle sicher, dass das Projekt online ist

## 📫 Support

Bei Fragen oder Problemen:
1. Überprüfe die [Supabase Docs](https://supabase.com/docs)
2. Erstelle ein Issue im Repository
3. Suche im [Supabase Forum](https://github.com/supabase/supabase/discussions)

---
Erstellt mit 💚 für die Supabase-Community 