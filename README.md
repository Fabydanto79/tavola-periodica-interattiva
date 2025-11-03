# 🧪 Tavola Periodica Interattiva

Applicazione web interattiva della tavola periodica degli elementi chimici, completa di 118 elementi con informazioni dettagliate incluse **valenze** e stati di ossidazione. Creata per studenti di chimica con HTML, CSS e JavaScript puro.

## ✨ Funzionalità

### 🔍 Ricerca Intelligente
- Cerca elementi per nome (es: "Idrogeno", "Ossigeno")
- Cerca per simbolo chimico (es: "H", "O", "Fe")
- Cerca per numero atomico (es: "1", "8", "26")
- Ricerca in tempo reale con evidenziazione

### 🎨 Filtri per Categoria
Visualizza solo gli elementi di una specifica categoria:
- **Metalli Alcalini** (Li, Na, K, Rb, Cs, Fr)
- **Metalli Alcalino-terrosi** (Be, Mg, Ca, Sr, Ba, Ra)
- **Metalli di Transizione** (Sc → Zn, Y → Cd, Lu → Hg, Lr → Cn)
- **Metalli Post-transizione** (Al, Ga, In, Sn, Tl, Pb, Bi, Nh, Fl, Mc, Lv)
- **Metalloidi** (B, Si, Ge, As, Sb, Te, Po)
- **Non Metalli** (H, C, N, O, P, S, Se)
- **Alogeni** (F, Cl, Br, I, At, Ts)
- **Gas Nobili** (He, Ne, Ar, Kr, Xe, Rn, Og)
- **Lantanoidi** (La → Lu)
- **Attinoidi** (Ac → Lr)

### 📊 Dettagli Completi per Ogni Elemento
Clicca su qualsiasi elemento per visualizzare:
- Numero atomico e peso atomico
- Categoria di appartenenza
- **⚡ Valenze / Stati di ossidazione** (es: Fe: +2, +3; Cl: ±1, +3, +5, +7)
- Configurazione elettronica
- Elettronegatività (scala di Pauling)
- Stato della materia (STP)
- Punto di fusione e ebollizione (°C)
- Densità (g/cm³)
- Anno di scoperta

### 🎨 Codifica a Colori
Ogni categoria ha un colore distintivo per facilitare l'apprendimento visivo:
- Rosso: Metalli Alcalini
- Giallo: Alcalino-terrosi
- Arancione: Metalli di Transizione
- Celeste: Post-transizione
- Verde chiaro: Metalloidi
- Verde: Non Metalli
- Azzurro: Alogeni
- Viola: Gas Nobili
- Rosa: Lantanoidi
- Rosa scuro: Attinoidi

## 📦 Struttura del Progetto

```
tavola-periodica/
│
├── index.html      # Struttura HTML e layout
├── style.css       # Design moderno dark theme
├── script.js       # Database elementi (con valenze) e logica
└── README.md       # Documentazione
```

## 🚀 Caratteristiche Tecniche

- ✅ **118 elementi completi** - Tutti gli elementi dalla tavola periodica
- ✅ **Valenze complete** - Stati di ossidazione per ogni elemento
- ✅ **Database dettagliato** - Oltre 10 proprietà per elemento
- ✅ **Layout autentico** - Posizionamento corretto con lantanoidi e attinoidi separati
- ✅ **Responsive** - Funziona su desktop, tablet e smartphone
- ✅ **Dark Theme** - Design moderno per ridurre l'affaticamento visivo
- ✅ **Zero dipendenze** - Solo HTML, CSS, JavaScript vanilla
- ✅ **Lightweight** - Caricamento rapido, nessun backend richiesto

## 💻 Installazione

### Metodo 1: Apertura Diretta
1. Scarica tutti i file
2. Apri `index.html` nel browser
3. Inizia ad esplorare!

### Metodo 2: Server Locale
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx http-server

# Con PHP
php -S localhost:8000
```

Poi visita: `http://localhost:8000`

## 🌐 Deploy su GitHub Pages

1. **Crea un repository su GitHub**
   ```bash
   git init
   git add .
   git commit -m "Tavola periodica interattiva con valenze - Dati Zanichelli"
   git branch -M main
   git remote add origin https://github.com/tuousername/tavola-periodica.git
   git push -u origin main
   ```

2. **Attiva GitHub Pages**
   - Vai in **Settings** → **Pages**
   - Source: **main branch**
   - Salva

3. **La tua app sarà online su:**
   `https://tuousername.github.io/tavola-periodica/`

## 🎯 Come Usare

### Navigazione Base
1. **Esplora** - Passa il mouse sopra gli elementi per l'effetto zoom
2. **Clicca** - Clicca su un elemento per vedere tutti i dettagli incluse le valenze
3. **Cerca** - Usa la barra di ricerca in alto per trovare elementi specifici
4. **Filtra** - Clicca sui bottoni colorati per visualizzare categorie specifiche

### Scorciatoie da Tastiera
- **ESC** - Chiudi il modal dei dettagli
- **Ricerca** - Digita per cercare in tempo reale

### Esempi di Ricerca
- Cerca "oro" → Mostra l'oro (Au) con valenze +1, +3
- Cerca "Fe" → Mostra il ferro con valenze +2, +3
- Cerca "8" → Mostra l'ossigeno (numero atomico 8) con valenza -2
- Cerca "cloro" → Mostra il cloro con valenze ±1, +3, +5, +7

## 📚 Informazioni sugli Elementi

Ogni elemento include:
- **Numero Atomico (Z)** - Numero di protoni nel nucleo
- **Simbolo Chimico** - Abbreviazione universale (1-2 lettere)
- **Nome** - Nome completo in italiano
- **Peso Atomico** - Massa atomica relativa in unità u
- **Valenze/Stati di Ossidazione** - Numeri di ossidazione possibili (es: +2, +3, -1)
- **Configurazione Elettronica** - Distribuzione degli elettroni
- **Elettronegatività** - Tendenza ad attrarre elettroni (scala Pauling)
- **Punti di Fusione/Ebollizione** - Temperature di cambio di stato in °C
- **Densità** - Massa per unità di volume in g/cm³
- **Anno di Scoperta** - Quando l'elemento è stato isolato/scoperto

## 🔢 Esempi di Valenze

### Valenze Fisse
- **Metalli Alcalini**: sempre +1 (Li, Na, K, Rb, Cs, Fr)
- **Alcalino-terrosi**: sempre +2 (Be, Mg, Ca, Sr, Ba, Ra)
- **Alluminio**: +3
- **Ossigeno**: -2
- **Fluoro**: -1
- **Gas Nobili**: 0 (He, Ne, Ar, Kr, Xe, Rn, Og)

### Valenze Multiple
- **Ferro (Fe)**: +2, +3
- **Rame (Cu)**: +1, +2
- **Cloro (Cl)**: ±1, +3, +5, +7
- **Zolfo (S)**: -2, +4, +6
- **Azoto (N)**: ±3, +2, +4, +5
- **Carbonio (C)**: +2, ±4
- **Manganese (Mn)**: +2, +3, +4, +6, +7
- **Cromo (Cr)**: +2, +3, +6

## 🎨 Personalizzazione

### Modifica i Colori
Apri `style.css` e modifica le classi delle categorie:

```css
.metalli-alcalini { background: #ff6b6b; }
.gas-nobili { background: #c7ceea; }
/* ... altre categorie ... */
```

### Aggiungi Proprietà
Apri `script.js` e aggiungi nuove proprietà agli elementi:

```javascript
{ 
    numero: 1, 
    simbolo: 'H', 
    nome: 'Idrogeno',
    valenze: '±1',
    // ... proprietà esistenti ...
    tuaNuovaProprietà: 'valore'
}
```

## 🧑‍🎓 Utilizzo Didattico

Perfetto per:
- **Studio individuale** - Memorizza simboli, valenze e proprietà
- **Laboratori** - Consulta rapidamente informazioni sugli elementi
- **Compiti a casa** - Trova velocemente valenze per bilanciare equazioni
- **Preparazione esami** - Ripassa categorie, configurazioni elettroniche e valenze
- **Progetti scolastici** - Integra nei tuoi lavori di chimica

## 📱 Compatibilità

- ✅ Chrome / Edge (versione 90+)
- ✅ Firefox (versione 88+)
- ✅ Safari (versione 14+)
- ✅ Opera (versione 76+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributi

Contributi sono benvenuti! Puoi:
- Segnalare errori nei dati
- Suggerire nuove funzionalità
- Migliorare il design
- Aggiungere traduzioni
- Ottimizzare il codice

## 📝 Licenza

Questo progetto è open source e disponibile sotto licenza MIT.

## 👨‍💻 Autore

Creato per studenti di chimica con passione per il web development.

## 🔮 Roadmap Futuri Sviluppi

- [ ] Modalità chiara/scura selezionabile
- [ ] Grafici delle proprietà periodiche
- [ ] Comparazione tra elementi
- [ ] Quiz interattivi sulle valenze
- [ ] Modelli 3D delle strutture atomiche
- [ ] Download dati in formato PDF/CSV
- [ ] Audio pronuncia dei nomi
- [ ] Timeline storica delle scoperte
- [ ] Applicazioni pratiche di ogni elemento
- [ ] Calcolatore di formule con valenze

## 📖 Fonti e Risorse

### Fonte Principale dei Dati
- **[Tavola Periodica Zanichelli](https://tavolaperiodica.zanichelli.it/assets/zanichelli_tavola_periodica.pdf)** - Dati ufficiali su numeri di ossidazione, configurazioni elettroniche, proprietà fisiche e chimiche

### Risorse di Apprendimento
- [IUPAC](https://iupac.org/) - Nomenclatura ufficiale
- [WebElements](https://www.webelements.com/) - Database completo
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) - Informazioni chimiche
- [Khan Academy - Chimica](https://www.khanacademy.org/science/chemistry) - Tutorial e lezioni

### Standard e Nomenclatura
- [NIST](https://www.nist.gov/) - Standard scientifici
- [Royal Society of Chemistry](https://www.rsc.org/) - Periodic Table

---

⭐ Se questo progetto ti è utile, lascia una stella su GitHub!

📚 Buono studio di chimica! 🧪

## 🔍 Note sulle Valenze

Le valenze (o stati di ossidazione) sono fondamentali per:
- Bilanciare equazioni chimiche
- Scrivere formule corrette dei composti
- Prevedere la reattività degli elementi
- Comprendere i legami chimici
- Nomenclatura IUPAC

**I dati sulle valenze sono stati verificati con la [Tavola Periodica Zanichelli](https://tavolaperiodica.zanichelli.it/assets/zanichelli_tavola_periodica.pdf), fonte autorevole e aggiornata per l'insegnamento della chimica in Italia.**

### Crediti
Questa applicazione utilizza i dati ufficiali dalla Tavola Periodica edita da Zanichelli Editore, una delle più autorevoli case editrici italiane per la didattica scientifica. I numeri di ossidazione, le configurazioni elettroniche e le proprietà fisiche sono stati verificati e corrispondono agli standard IUPAC più recenti.
