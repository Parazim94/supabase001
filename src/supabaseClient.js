import { createClient } from '@supabase/supabase-js'

// Hier müssen Sie Ihre eigenen Supabase-Projekt-URL und den anon/public key eintragen
const supabaseUrl = 'https://qaprhsbepwhhaxqoephn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhcHJoc2JlcHdoaGF4cW9lcGhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3MDM3NjUsImV4cCI6MjA2MDI3OTc2NX0.PfmU8RGkq4b_MAxWzcJmLYS1HuTj0apwpilkvyriHlk'

// Erstellen des Supabase-Clients
export const supabase = createClient(supabaseUrl, supabaseKey)

// Tipp: Speichern Sie die URL und den Key in einer .env-Datei für mehr Sicherheit
// und laden Sie sie mit dotenv oder ähnlichen Paketen 