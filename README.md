# CO – PQ / RESPO / SDSA Runtime

CO ist ein modular aufgebautes Runtime‑System bestehend aus:

- PQ (Priority Queue)
- RESPO (Response Flow)
- SDSA (81‑Achsenvektor)
- XTOM (Transformation Layer)
- MEAT (Execution Layer)
- HDF (Local TMP Storage)

Ziel:
Dieses Repository ist so strukturiert, dass GitHub Copilot im Browser (github.dev)
alle Module verstehen, analysieren und optimieren kann.

## Struktur

/docs  
Enthält die technische Dokumentation (Architektur, Achsen, Flows).

/src  
Enthält die Runtime‑Module (PQ, RESPO, SDSA, XTOM, MEAT, HDF).

/github  
Enthält Copilot‑Instructions und Agents, damit Copilot das Projekt versteht.

## Ziel des Projekts

CO soll als KI‑unterstützte Runtime dienen, die lokal ausgeführt wird,
während Copilot im Browser als Analyse‑Operator arbeitet.
