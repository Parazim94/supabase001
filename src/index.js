import { supabase } from './supabaseClient.js'

// Beispiel für eine einfache Datenbankabfrage
async function testConnection() {
  console.log('🚀 Verbindung zu Supabase wird hergestellt...')
  
  try {
    // Zuerst: Testdaten in die Tabelle einfügen
    const { data: insertData, error: insertError } = await supabase
      .from('meine_tabelle')  // Korrigierter Tabellenname
      .insert([
        { 
          // id wird automatisch generiert
          // created_at wird automatisch gesetzt
        }
      ])
    
    if (insertError) {
      console.error('❌ Fehler beim Einfügen:', insertError.message)
      return
    }
    
    console.log('✅ Testdaten erfolgreich eingefügt!')

    // Dann: Alle Einträge abfragen
    const { data, error } = await supabase
      .from('meine_tabelle')  // Korrigierter Tabellenname
      .select('*')
    
    if (error) {
      console.error('❌ Fehler bei der Abfrage:', error.message)
    } else {
      console.log('✅ Erfolgreich verbunden!')
      console.log('📊 Gefundene Daten:', data)
    }
  } catch (error) {
    console.error('❌ Unerwarteter Fehler:', error.message)
  }
}

// Funktion ausführen
testConnection()

// Tipp: Sie können hier weitere Funktionen für CRUD-Operationen hinzufügen
// (Create, Read, Update, Delete) 