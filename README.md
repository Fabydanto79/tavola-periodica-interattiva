# 🧪 Tavola Periodica Interattiva

Applicazione web interattiva della tavola periodica degli elementi chimici, completa di 118 elementi con informazioni dettagliate. Creata per studenti di chimica con HTML, CSS e JavaScript puro.

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

### 📊 Dettagli Completi
Clicca su qualsiasi elemento per visualizzare:
- Numero atomico e peso atomico
- Categoria di appartenenza
- Configurazione elettronica
- Elettronegatività (scala di Pauling)
- Stato della materia (STP)
- Punto di fusione e ebollizione
- Densità
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
├── script.js       # Database elementi e logica
└── README.md       # Documentazione
```

## 🚀 Caratteristiche Tecniche

- ✅ **118 elementi completi** - Tutti gli elementi dalla tavola periodica
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
   git commit -m "Tavola periodica interattiva"
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
2. **Clicca** - Clicca su un elemento per vedere tutti i dettagli
3. **Cerca** - Usa la barra di ricerca in alto per trovare elementi specifici
4. **Filtra** - Clicca sui bottoni colorati per visualizzare categorie specifiche

### Scorciatoie da Tastiera
- **ESC** - Chiudi il modal dei dettagli
- **Ricerca** - Digita per cercare in tempo reale

### Esempi di Ricerca
- Cerca "oro" → Mostra l'oro (Au)
- Cerca "Fe" → Mostra il ferro
- Cerca "8" → Mostra l'ossigeno (numero atomico 8)
- Cerca "gas" → Mostra tutti i gas nobili

## 📚 Informazioni sugli Elementi

Ogni elemento include:
- **Numero Atomico (Z)** - Numero di protoni nel nucleo
- **Simbolo Chimico** - Abbreviazione universale (1-2 lettere)
- **Nome** - Nome completo in italiano
- **Peso Atomico** - Massa atomica relativa in unità u
- **Configurazione Elettronica** - Distribuzione degli elettroni
- **Elettronegatività** - Tendenza ad attrarre elettroni (scala Pauling)
- **Punti di Fusione/Ebollizione** - Temperature di cambio di stato in °C
- **Densità** - Massa per unità di volume in g/cm³
- **Anno di Scoperta** - Quando l'elemento è stato isolato/scoperto

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
    // ... proprietà esistenti ...
    tuaNuovaProprietà: 'valore'
}
```

### Modifica il Layout
Il layout della griglia è controllato da:
```css
.periodic-table {
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    gap: 4px;
}
```

## 🧑‍🎓 Utilizzo Didattico

Perfetto per:
- **Studio individuale** - Memorizza simboli e proprietà
- **Laboratori** - Consulta rapidamente informazioni sugli elementi
- **Compiti a casa** - Trova velocemente dati per esercizi
- **Preparazione esami** - Ripassa categorie e configurazioni elettroniche
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
- [ ] Quiz interattivi
- [ ] Modelli 3D delle strutture atomiche
- [ ] Download dati in formato PDF/CSV
- [ ] Audio pronuncia dei nomi
- [ ] Timeline storica delle scoperte
- [ ] Applicazioni pratiche di ogni elemento

## 📖 Risorse di Apprendimento

- [IUPAC](https://iupac.org/) - Nomenclatura ufficiale
- [WebElements](https://www.webelements.com/) - Database completo
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) - Informazioni chimiche

---

⭐ Se questo progetto ti è utile, lascia una stella su GitHub!

📚 Buono studio di chimica! 🧪
