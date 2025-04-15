import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

// Laden der Umgebungsvariablen
const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

// Überprüfen, ob die Umgebungsvariablen verfügbar sind
if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase Umgebungsvariablen nicht gefunden!')
  console.error('Bitte stelle sicher, dass die .env Datei existiert und die Variablen SUPABASE_URL und SUPABASE_ANON_KEY enthält.')
  process.exit(1)
}

// Erstellen des Supabase-Clients
export const supabase = createClient(supabaseUrl, supabaseKey)

// Erfolgsmeldung
console.log('✅ Supabase-Client erfolgreich konfiguriert')

// Tipp: Speichern Sie die URL und den Key in einer .env-Datei für mehr Sicherheit
// und laden Sie sie mit dotenv oder ähnlichen Paketen 