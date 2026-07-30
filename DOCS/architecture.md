# Architektur – CO Runtime

Die CO‑Runtime besteht aus sechs Kernmodulen:

1. PQ – Priority Queue  
   Steuert die Reihenfolge der Ausführung.

2. RESPO – Response Flow  
   Verarbeitet Eingaben über NC‑Module und erzeugt Achsen.

3. SDSA – 81‑Achsenvektor  
   Liefert die Basis für Stabilisation und Achsen‑Routing.

4. XTOM – Transformation Layer  
   Wandelt SDSA‑Achsen in MEAT‑Sequenzen um.

5. MEAT – Execution Layer  
   Führt die transformierten Achsen aus.

6. HDF – Local TMP Storage  
   Speichert SDSA‑ und PQ‑Daten lokal.

## Datenfluss

TMP → SDSA → RESPO → AXIS → XTOM → MEAT → PQ → OUTPUT

## Ziel

Copilot soll diese Architektur verstehen und optimieren können.

