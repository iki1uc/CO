CO/
│
├── DOCS/                     # Architektur & Systemdokumentation
│   ├── architecture.md
│   ├── pq-system.md
│   ├── respo-flow.md
│   ├── sdsA-81.md
│   └── stabilisationsachse.md
│
├── github/agents/            # Agenten-Definitionen
│   ├── pq.agent.md
│   ├── respo.agent.md
│   ├── sdsA.agent.md
│   └── copilot-instructions.md
│
├── src/
│   ├── api/                  # API Layer
│   │   └── api.js
│   │
│   ├── co/                   # CO Kernel
│   │   ├── BOOT.js
│   │   ├── CO.boot
│   │   └── co.js
│   │
│   ├── kg/                   # Knowledge Graph
│   │   └── KG.js
│   │
│   ├── nc/                   # NC Module Hub
│   │   └── master.js
│   │
│   ├── pq/                   # PQ System
│   │   ├── pq-copilot.js
│   │   └── pq.md
│   │
│   ├── respo/                # RESPO Flow Engine
│   │   └── respo-core.js
│   │
│   ├── runtime/              # Runtime Kernel
│   │   ├── RUN.js
│   │   ├── TIME.js
│   │   └── runtime.js
│   │
│   ├── sdsA/                 # SDSA Stabilisationsachse
│   │   ├── sdsa.js
│   │   └── sdsa.md
│   │
│   ├── station/              # Pipeline Station Engine
│   │   └── station.js
│   │
│   └── xtom/                 # XTOM Layer
│       └── xtom.md
│
├── index.html                # Operator Dashboard UI
│
├── README.md                 # (Diese Datei)
│
├── axiom-hardware-6.csv      # Hardware-Axiom Mapping
├── fehler-ursache-5.csv      # Fehleranalyse CSV
├── pipeline-station-11.csv   # Pipeline Stationen
├── respo-master.csv          # RESPO Masterzustände
└── system-status.csv         # Systemstatus für UI
