// Database completo degli elementi chimici (118 elementi)
const tuttiElementi = [
    { numero: 1, simbolo: 'H', nome: 'Idrogeno', peso: 1.008, categoria: 'non-metalli', pos: [1, 1], 
      elettronegatività: 2.20, puntoFusione: -259.16, puntoEbollizione: -252.87, configurazione: '1s¹', 
      scoperta: '1766', densità: '0.00009', stato: 'Gas' },
    { numero: 2, simbolo: 'He', nome: 'Elio', peso: 4.003, categoria: 'gas-nobili', pos: [1, 18],
      elettronegatività: '—', puntoFusione: -272.20, puntoEbollizione: -268.93, configurazione: '1s²',
      scoperta: '1868', densità: '0.00018', stato: 'Gas' },
    { numero: 3, simbolo: 'Li', nome: 'Litio', peso: 6.941, categoria: 'metalli-alcalini', pos: [2, 1],
      elettronegatività: 0.98, puntoFusione: 180.54, puntoEbollizione: 1342, configurazione: '[He] 2s¹',
      scoperta: '1817', densità: '0.534', stato: 'Solido' },
    { numero: 4, simbolo: 'Be', nome: 'Berillio', peso: 9.012, categoria: 'metalli-alcalino-terrosi', pos: [2, 2],
      elettronegatività: 1.57, puntoFusione: 1287, puntoEbollizione: 2470, configurazione: '[He] 2s²',
      scoperta: '1798', densità: '1.85', stato: 'Solido' },
    { numero: 5, simbolo: 'B', nome: 'Boro', peso: 10.81, categoria: 'metalloidi', pos: [2, 13] },
    { numero: 6, simbolo: 'C', nome: 'Carbonio', peso: 12.01, categoria: 'non-metalli', pos: [2, 14] },
    { numero: 7, simbolo: 'N', nome: 'Azoto', peso: 14.01, categoria: 'non-metalli', pos: [2, 15] },
    { numero: 8, simbolo: 'O', nome: 'Ossigeno', peso: 16.00, categoria: 'non-metalli', pos: [2, 16] },
    { numero: 9, simbolo: 'F', nome: 'Fluoro', peso: 19.00, categoria: 'alogeni', pos: [2, 17] },
    { numero: 10, simbolo: 'Ne', nome: 'Neon', peso: 20.18, categoria: 'gas-nobili', pos: [2, 18] },
    { numero: 11, simbolo: 'Na', nome: 'Sodio', peso: 22.99, categoria: 'metalli-alcalini', pos: [3, 1] },
    { numero: 12, simbolo: 'Mg', nome: 'Magnesio', peso: 24.31, categoria: 'metalli-alcalino-terrosi', pos: [3, 2] },
    { numero: 13, simbolo: 'Al', nome: 'Alluminio', peso: 26.98, categoria: 'metalli-post-transizione', pos: [3, 13] },
    { numero: 14, simbolo: 'Si', nome: 'Silicio', peso: 28.09, categoria: 'metalloidi', pos: [3, 14] },
    { numero: 15, simbolo: 'P', nome: 'Fosforo', peso: 30.97, categoria: 'non-metalli', pos: [3, 15] },
    { numero: 16, simbolo: 'S', nome: 'Zolfo', peso: 32.07, categoria: 'non-metalli', pos: [3, 16] },
    { numero: 17, simbolo: 'Cl', nome: 'Cloro', peso: 35.45, categoria: 'alogeni', pos: [3, 17] },
    { numero: 18, simbolo: 'Ar', nome: 'Argon', peso: 39.95, categoria: 'gas-nobili', pos: [3, 18] },
    { numero: 19, simbolo: 'K', nome: 'Potassio', peso: 39.10, categoria: 'metalli-alcalini', pos: [4, 1] },
    { numero: 20, simbolo: 'Ca', nome: 'Calcio', peso: 40.08, categoria: 'metalli-alcalino-terrosi', pos: [4, 2] },
    { numero: 21, simbolo: 'Sc', nome: 'Scandio', peso: 44.96, categoria: 'metalli-transizione', pos: [4, 3] },
    { numero: 22, simbolo: 'Ti', nome: 'Titanio', peso: 47.87, categoria: 'metalli-transizione', pos: [4, 4] },
    { numero: 23, simbolo: 'V', nome: 'Vanadio', peso: 50.94, categoria: 'metalli-transizione', pos: [4, 5] },
    { numero: 24, simbolo: 'Cr', nome: 'Cromo', peso: 52.00, categoria: 'metalli-transizione', pos: [4, 6] },
    { numero: 25, simbolo: 'Mn', nome: 'Manganese', peso: 54.94, categoria: 'metalli-transizione', pos: [4, 7] },
    { numero: 26, simbolo: 'Fe', nome: 'Ferro', peso: 55.85, categoria: 'metalli-transizione', pos: [4, 8] },
    { numero: 27, simbolo: 'Co', nome: 'Cobalto', peso: 58.93, categoria: 'metalli-transizione', pos: [4, 9] },
    { numero: 28, simbolo: 'Ni', nome: 'Nichel', peso: 58.69, categoria: 'metalli-transizione', pos: [4, 10] },
    { numero: 29, simbolo: 'Cu', nome: 'Rame', peso: 63.55, categoria: 'metalli-transizione', pos: [4, 11] },
    { numero: 30, simbolo: 'Zn', nome: 'Zinco', peso: 65.38, categoria: 'metalli-transizione', pos: [4, 12] },
    { numero: 31, simbolo: 'Ga', nome: 'Gallio', peso: 69.72, categoria: 'metalli-post-transizione', pos: [4, 13] },
    { numero: 32, simbolo: 'Ge', nome: 'Germanio', peso: 72.63, categoria: 'metalloidi', pos: [4, 14] },
    { numero: 33, simbolo: 'As', nome: 'Arsenico', peso: 74.92, categoria: 'metalloidi', pos: [4, 15] },
    { numero: 34, simbolo: 'Se', nome: 'Selenio', peso: 78.96, categoria: 'non-metalli', pos: [4, 16] },
    { numero: 35, simbolo: 'Br', nome: 'Bromo', peso: 79.90, categoria: 'alogeni', pos: [4, 17] },
    { numero: 36, simbolo: 'Kr', nome: 'Kripton', peso: 83.80, categoria: 'gas-nobili', pos: [4, 18] },
    { numero: 37, simbolo: 'Rb', nome: 'Rubidio', peso: 85.47, categoria: 'metalli-alcalini', pos: [5, 1] },
    { numero: 38, simbolo: 'Sr', nome: 'Stronzio', peso: 87.62, categoria: 'metalli-alcalino-terrosi', pos: [5, 2] },
    { numero: 39, simbolo: 'Y', nome: 'Ittrio', peso: 88.91, categoria: 'metalli-transizione', pos: [5, 3] },
    { numero: 40, simbolo: 'Zr', nome: 'Zirconio', peso: 91.22, categoria: 'metalli-transizione', pos: [5, 4] },
    { numero: 41, simbolo: 'Nb', nome: 'Niobio', peso: 92.91, categoria: 'metalli-transizione', pos: [5, 5] },
    { numero: 42, simbolo: 'Mo', nome: 'Molibdeno', peso: 95.96, categoria: 'metalli-transizione', pos: [5, 6] },
    { numero: 43, simbolo: 'Tc', nome: 'Tecnezio', peso: 98.00, categoria: 'metalli-transizione', pos: [5, 7] },
    { numero: 44, simbolo: 'Ru', nome: 'Rutenio', peso: 101.1, categoria: 'metalli-transizione', pos: [5, 8] },
    { numero: 45, simbolo: 'Rh', nome: 'Rodio', peso: 102.9, categoria: 'metalli-transizione', pos: [5, 9] },
    { numero: 46, simbolo: 'Pd', nome: 'Palladio', peso: 106.4, categoria: 'metalli-transizione', pos: [5, 10] },
    { numero: 47, simbolo: 'Ag', nome: 'Argento', peso: 107.9, categoria: 'metalli-transizione', pos: [5, 11] },
    { numero: 48, simbolo: 'Cd', nome: 'Cadmio', peso: 112.4, categoria: 'metalli-transizione', pos: [5, 12] },
    { numero: 49, simbolo: 'In', nome: 'Indio', peso: 114.8, categoria: 'metalli-post-transizione', pos: [5, 13] },
    { numero: 50, simbolo: 'Sn', nome: 'Stagno', peso: 118.7, categoria: 'metalli-post-transizione', pos: [5, 14] },
    { numero: 51, simbolo: 'Sb', nome: 'Antimonio', peso: 121.8, categoria: 'metalloidi', pos: [5, 15] },
    { numero: 52, simbolo: 'Te', nome: 'Tellurio', peso: 127.6, categoria: 'metalloidi', pos: [5, 16] },
    { numero: 53, simbolo: 'I', nome: 'Iodio', peso: 126.9, categoria: 'alogeni', pos: [5, 17] },
    { numero: 54, simbolo: 'Xe', nome: 'Xeno', peso: 131.3, categoria: 'gas-nobili', pos: [5, 18] },
    { numero: 55, simbolo: 'Cs', nome: 'Cesio', peso: 132.9, categoria: 'metalli-alcalini', pos: [6, 1] },
    { numero: 56, simbolo: 'Ba', nome: 'Bario', peso: 137.3, categoria: 'metalli-alcalino-terrosi', pos: [6, 2] },
    { numero: 57, simbolo: 'La', nome: 'Lantanio', peso: 138.9, categoria: 'lantanoidi', pos: [8, 3] },
    { numero: 58, simbolo: 'Ce', nome: 'Cerio', peso: 140.1, categoria: 'lantanoidi', pos: [8, 4] },
    { numero: 59, simbolo: 'Pr', nome: 'Praseodimio', peso: 140.9, categoria: 'lantanoidi', pos: [8, 5] },
    { numero: 60, simbolo: 'Nd', nome: 'Neodimio', peso: 144.2, categoria: 'lantanoidi', pos: [8, 6] },
    { numero: 61, simbolo: 'Pm', nome: 'Promezio', peso: 145.0, categoria: 'lantanoidi', pos: [8, 7] },
    { numero: 62, simbolo: 'Sm', nome: 'Samario', peso: 150.4, categoria: 'lantanoidi', pos: [8, 8] },
    { numero: 63, simbolo: 'Eu', nome: 'Europio', peso: 152.0, categoria: 'lantanoidi', pos: [8, 9] },
    { numero: 64, simbolo: 'Gd', nome: 'Gadolinio', peso: 157.3, categoria: 'lantanoidi', pos: [8, 10] },
    { numero: 65, simbolo: 'Tb', nome: 'Terbio', peso: 158.9, categoria: 'lantanoidi', pos: [8, 11] },
    { numero: 66, simbolo: 'Dy', nome: 'Disprosio', peso: 162.5, categoria: 'lantanoidi', pos: [8, 12] },
    { numero: 67, simbolo: 'Ho', nome: 'Olmio', peso: 164.9, categoria: 'lantanoidi', pos: [8, 13] },
    { numero: 68, simbolo: 'Er', nome: 'Erbio', peso: 167.3, categoria: 'lantanoidi', pos: [8, 14] },
    { numero: 69, simbolo: 'Tm', nome: 'Tulio', peso: 168.9, categoria: 'lantanoidi', pos: [8, 15] },
    { numero: 70, simbolo: 'Yb', nome: 'Itterbio', peso: 173.0, categoria: 'lantanoidi', pos: [8, 16] },
    { numero: 71, simbolo: 'Lu', nome: 'Lutezio', peso: 175.0, categoria: 'lantanoidi', pos: [8, 17] },
    { numero: 72, simbolo: 'Hf', nome: 'Afnio', peso: 178.5, categoria: 'metalli-transizione', pos: [6, 4] },
    { numero: 73, simbolo: 'Ta', nome: 'Tantalio', peso: 180.9, categoria: 'metalli-transizione', pos: [6, 5] },
    { numero: 74, simbolo: 'W', nome: 'Tungsteno', peso: 183.8, categoria: 'metalli-transizione', pos: [6, 6] },
    { numero: 75, simbolo: 'Re', nome: 'Renio', peso: 186.2, categoria: 'metalli-transizione', pos: [6, 7] },
    { numero: 76, simbolo: 'Os', nome: 'Osmio', peso: 190.2, categoria: 'metalli-transizione', pos: [6, 8] },
    { numero: 77, simbolo: 'Ir', nome: 'Iridio', peso: 192.2, categoria: 'metalli-transizione', pos: [6, 9] },
    { numero: 78, simbolo: 'Pt', nome: 'Platino', peso: 195.1, categoria: 'metalli-transizione', pos: [6, 10] },
    { numero: 79, simbolo: 'Au', nome: 'Oro', peso: 197.0, categoria: 'metalli-transizione', pos: [6, 11] },
    { numero: 80, simbolo: 'Hg', nome: 'Mercurio', peso: 200.6, categoria: 'metalli-transizione', pos: [6, 12] },
    { numero: 81, simbolo: 'Tl', nome: 'Tallio', peso: 204.4, categoria: 'metalli-post-transizione', pos: [6, 13] },
    { numero: 82, simbolo: 'Pb', nome: 'Piombo', peso: 207.2, categoria: 'metalli-post-transizione', pos: [6, 14] },
    { numero: 83, simbolo: 'Bi', nome: 'Bismuto', peso: 209.0, categoria: 'metalli-post-transizione', pos: [6, 15] },
    { numero: 84, simbolo: 'Po', nome: 'Polonio', peso: 209.0, categoria: 'metalloidi', pos: [6, 16] },
    { numero: 85, simbolo: 'At', nome: 'Astato', peso: 210.0, categoria: 'alogeni', pos: [6, 17] },
    { numero: 86, simbolo: 'Rn', nome: 'Radon', peso: 222.0, categoria: 'gas-nobili', pos: [6, 18] },
    { numero: 87, simbolo: 'Fr', nome: 'Francio', peso: 223.0, categoria: 'metalli-alcalini', pos: [7, 1] },
    { numero: 88, simbolo: 'Ra', nome: 'Radio', peso: 226.0, categoria: 'metalli-alcalino-terrosi', pos: [7, 2] },
    { numero: 89, simbolo: 'Ac', nome: 'Attinio', peso: 227.0, categoria: 'attinoidi', pos: [9, 3] },
    { numero: 90, simbolo: 'Th', nome: 'Torio', peso: 232.0, categoria: 'attinoidi', pos: [9, 4] },
    { numero: 91, simbolo: 'Pa', nome: 'Protoattinio', peso: 231.0, categoria: 'attinoidi', pos: [9, 5] },
    { numero: 92, simbolo: 'U', nome: 'Uranio', peso: 238.0, categoria: 'attinoidi', pos: [9, 6] },
    { numero: 93, simbolo: 'Np', nome: 'Nettunio', peso: 237.0, categoria: 'attinoidi', pos: [9, 7] },
    { numero: 94, simbolo: 'Pu', nome: 'Plutonio', peso: 244.0, categoria: 'attinoidi', pos: [9, 8] },
    { numero: 95, simbolo: 'Am', nome: 'Americio', peso: 243.0, categoria: 'attinoidi', pos: [9, 9] },
    { numero: 96, simbolo: 'Cm', nome: 'Curio', peso: 247.0, categoria: 'attinoidi', pos: [9, 10] },
    { numero: 97, simbolo: 'Bk', nome: 'Berkelio', peso: 247.0, categoria: 'attinoidi', pos: [9, 11] },
    { numero: 98, simbolo: 'Cf', nome: 'Californio', peso: 251.0, categoria: 'attinoidi', pos: [9, 12] },
    { numero: 99, simbolo: 'Es', nome: 'Einsteinio', peso: 252.0, categoria: 'attinoidi', pos: [9, 13] },
    { numero: 100, simbolo: 'Fm', nome: 'Fermio', peso: 257.0, categoria: 'attinoidi', pos: [9, 14] },
    { numero: 101, simbolo: 'Md', nome: 'Mendelevio', peso: 258.0, categoria: 'attinoidi', pos: [9, 15] },
    { numero: 102, simbolo: 'No', nome: 'Nobelio', peso: 259.0, categoria: 'attinoidi', pos: [9, 16] },
    { numero: 103, simbolo: 'Lr', nome: 'Laurenzio', peso: 262.0, categoria: 'attinoidi', pos: [9, 17] },
    { numero: 104, simbolo: 'Rf', nome: 'Rutherfordio', peso: 267.0, categoria: 'metalli-transizione', pos: [7, 4] },
    { numero: 105, simbolo: 'Db', nome: 'Dubnio', peso: 268.0, categoria: 'metalli-transizione', pos: [7, 5] },
    { numero: 106, simbolo: 'Sg', nome: 'Seaborgio', peso: 271.0, categoria: 'metalli-transizione', pos: [7, 6] },
    { numero: 107, simbolo: 'Bh', nome: 'Bohrio', peso: 272.0, categoria: 'metalli-transizione', pos: [7, 7] },
    { numero: 108, simbolo: 'Hs', nome: 'Hassio', peso: 270.0, categoria: 'metalli-transizione', pos: [7, 8] },
    { numero: 109, simbolo: 'Mt', nome: 'Meitnerio', peso: 276.0, categoria: 'metalli-transizione', pos: [7, 9] },
    { numero: 110, simbolo: 'Ds', nome: 'Darmstadtio', peso: 281.0, categoria: 'metalli-transizione', pos: [7, 10] },
    { numero: 111, simbolo: 'Rg', nome: 'Roentgenio', peso: 280.0, categoria: 'metalli-transizione', pos: [7, 11] },
    { numero: 112, simbolo: 'Cn', nome: 'Copernicio', peso: 285.0, categoria: 'metalli-transizione', pos: [7, 12] },
    { numero: 113, simbolo: 'Nh', nome: 'Nihonio', peso: 284.0, categoria: 'metalli-post-transizione', pos: [7, 13] },
    { numero: 114, simbolo: 'Fl', nome: 'Flerovio', peso: 289.0, categoria: 'metalli-post-transizione', pos: [7, 14] },
    { numero: 115, simbolo: 'Mc', nome: 'Moscovio', peso: 288.0, categoria: 'metalli-post-transizione', pos: [7, 15] },
    { numero: 116, simbolo: 'Lv', nome: 'Livermorio', peso: 293.0, categoria: 'metalli-post-transizione', pos: [7, 16] },
    { numero: 117, simbolo: 'Ts', nome: 'Tennessino', peso: 294.0, categoria: 'alogeni', pos: [7, 17] },
    { numero: 118, simbolo: 'Og', nome: 'Oganesso', peso: 294.0, categoria: 'gas-nobili', pos: [7, 18] },
];

// Genera la tavola periodica
function generaTavolaPeriodica() {
    const table = document.getElementById('periodic-table');
    table.innerHTML = '';

    const griglia = Array(10).fill().map(() => Array(18).fill(null));

    tuttiElementi.forEach(elemento => {
        const [row, col] = elemento.pos;
        griglia[row - 1][col - 1] = elemento;
    });

    griglia[5][2] = { simbolo: '57-71', nome: 'Lantanoidi', classe: 'spacer-lantanoidi', categoria: 'lantanoidi' };
    griglia[6][2] = { simbolo: '89-103', nome: 'Attinoidi', classe: 'spacer-attinoidi', categoria: 'attinoidi' };

    griglia.forEach((riga, rowIndex) => {
        riga.forEach((elemento, colIndex) => {
            const div = document.createElement('div');

            if (elemento) {
                if (elemento.classe && elemento.classe.startsWith('spacer')) {
                    div.className = `element spacer ${elemento.categoria}`;
                    div.innerHTML = `<div class="simbolo">${elemento.simbolo}</div><div class="nome">${elemento.nome}</div>`;
                } else {
                    div.className = `element ${elemento.categoria}`;
                    div.setAttribute('data-numero', elemento.numero);
                    div.setAttribute('data-categoria', elemento.categoria);
                    div.onclick = () => mostraDettagli(elemento);

                    div.innerHTML = `
                        <div class="numero">${elemento.numero}</div>
                        <div class="simbolo">${elemento.simbolo}</div>
                        <div class="nome">${elemento.nome}</div>
                        <div class="peso">${elemento.peso}</div>
                    `;
                }
            } else {
                div.className = 'element spacer';
            }

            table.appendChild(div);
        });
    });
}

// Mostra dettagli elemento
function mostraDettagli(elemento) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    let dettagli = `
        <div class="modal-header ${elemento.categoria}">
            <div class="modal-number">Elemento ${elemento.numero}</div>
            <div class="modal-symbol">${elemento.simbolo}</div>
            <div class="modal-name">${elemento.nome}</div>
        </div>
        <div class="modal-info">
            <div class="info-row">
                <div class="info-label">Numero Atomico:</div>
                <div class="info-value">${elemento.numero}</div>
            </div>
            <div class="info-row">
                <div class="info-label">Peso Atomico:</div>
                <div class="info-value">${elemento.peso} u</div>
            </div>
            <div class="info-row">
                <div class="info-label">Categoria:</div>
                <div class="info-value">${getCategoriaName(elemento.categoria)}</div>
            </div>
    `;

    if (elemento.configurazione) {
        dettagli += `<div class="info-row"><div class="info-label">Configurazione Elettronica:</div><div class="info-value">${elemento.configurazione}</div></div>`;
    }
    if (elemento.elettronegatività) {
        dettagli += `<div class="info-row"><div class="info-label">Elettronegatività:</div><div class="info-value">${elemento.elettronegatività}</div></div>`;
    }
    if (elemento.stato) {
        dettagli += `<div class="info-row"><div class="info-label">Stato (STP):</div><div class="info-value">${elemento.stato}</div></div>`;
    }
    if (elemento.puntoFusione) {
        dettagli += `<div class="info-row"><div class="info-label">Punto di Fusione:</div><div class="info-value">${elemento.puntoFusione}°C</div></div>`;
    }
    if (elemento.puntoEbollizione) {
        dettagli += `<div class="info-row"><div class="info-label">Punto di Ebollizione:</div><div class="info-value">${elemento.puntoEbollizione}°C</div></div>`;
    }

    dettagli += '</div>';
    modalBody.innerHTML = dettagli;
    modal.classList.add('active');
}

function chiudiModal() {
    document.getElementById('modal').classList.remove('active');
}

window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        chiudiModal();
    }
}

function cercaElemento() {
    const searchTerm = document.getElementById('search').value.toLowerCase().trim();
    const elementi = document.querySelectorAll('.element:not(.spacer)');

    if (searchTerm === '') {
        elementi.forEach(el => el.classList.remove('hidden'));
        return;
    }

    elementi.forEach(el => {
        const numero = el.getAttribute('data-numero');
        const elementoData = tuttiElementi.find(e => e.numero == numero);

        if (elementoData) {
            const match = 
                elementoData.simbolo.toLowerCase().includes(searchTerm) ||
                elementoData.nome.toLowerCase().includes(searchTerm) ||
                elementoData.numero.toString().includes(searchTerm);

            if (match) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        }
    });
}

function filtraCategoria(categoria) {
    const elementi = document.querySelectorAll('.element:not(.spacer)');
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (categoria === 'tutti') {
        elementi.forEach(el => el.classList.remove('hidden'));
    } else {
        elementi.forEach(el => {
            const cat = el.getAttribute('data-categoria');
            if (cat === categoria) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
    }
    document.getElementById('search').value = '';
}

function getCategoriaName(categoria) {
    const nomi = {
        'metalli-alcalini': 'Metalli Alcalini',
        'metalli-alcalino-terrosi': 'Metalli Alcalino-terrosi',
        'lantanoidi': 'Lantanoidi',
        'attinoidi': 'Attinoidi',
        'metalli-transizione': 'Metalli di Transizione',
        'metalli-post-transizione': 'Metalli Post-transizione',
        'metalloidi': 'Metalloidi',
        'non-metalli': 'Non Metalli',
        'alogeni': 'Alogeni',
        'gas-nobili': 'Gas Nobili'
    };
    return nomi[categoria] || categoria;
}

document.addEventListener('DOMContentLoaded', function() {
    generaTavolaPeriodica();
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') chiudiModal();
    });
});
