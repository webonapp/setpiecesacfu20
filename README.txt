ACF Fiorentina - Set Pieces App PWA v117

COME USARLA SU IPAD
1. Carica l'intera cartella su un hosting HTTPS.
2. Apri in Safari l'indirizzo che termina con /index.html.
3. Tocca Condividi.
4. Tocca "Aggiungi alla schermata Home".
5. Apri l'app dalla nuova icona.
6. Dopo la prima apertura online, l'app potrà essere usata offline.

IMPORTANTE
- Non aprire index.html direttamente dall'app File o da Quick Look.
- Service worker e installazione PWA funzionano soltanto tramite HTTPS oppure localhost.
- Backup e importazione restano locali sul dispositivo.
- Le funzioni PNG/PDF dipendono dalle librerie esterne già richiamate nell'HTML:
  apri almeno una volta l'app con connessione prima di usarle offline.


NOVITÀ v117
- Barra touch sotto il campo
- Copia, incolla ed elimina
- Allineamento orizzontale e verticale
- Distribuzione uniforme
- Gestione livelli per oggetti grafici
- Blocco modifiche
- Modalità campo intero


NOVITÀ v117 - BACKUP UNIVERSALE
- Nuovo formato .acf compatibile con Mac, iPad, Safari e Chrome
- Importazione di .acf, .setpieces, .acfbackup, .json e .txt
- Compatibilità con tutti i backup precedenti
- Lettura UTF-8 robusta tramite ArrayBuffer
- Supporto ai file rinominati o salvati tramite AirDrop/iCloud
- Esportazione tramite pannello Condividi nativo su iPad
- Controllo e riparazione automatica dei dati importati
- Messaggi di errore dettagliati


NOVITÀ v117
- Pulsante Torna indietro, equivalente a Command+Z
- Allinea H rinominato in Orizzontale
- Allinea V rinominato in Verticale


CORREZIONE v141 - POSIZIONI INVARIATE
- Rapporto del campo fissato a 1000 × 620 su Mac, iPad e fullscreen
- Nessuna deformazione passando tra dispositivi
- Nessun riallargamento entrando in modalità Campo intero
- Coordinate di giocatori, frecce, forme, palloni e testi mantenute in percentuale


NOVITÀ v141
- Dimensione predefinita delle maglie: 90%
- Trascinamento più fluido di pallone e testi
- Stessa anagrafica completa per Fiorentina e avversari
- Cursore Tratteggio per frecce dritte e curve
- Punta delle frecce sempre piena
- Controllo completo della sintassi JavaScript


NOVITÀ v141
- Nuovo sfondo del campo basato sull'immagine campo.png
- Vecchie linee CSS del campo disattivate
- Coordinate e posizioni degli oggetti mantenute invariate
- Compatibilità Mac, iPad, fullscreen, PNG e PDF


NOVITÀ v141
- Movimento pallone più fluido su Mac e iPad
- Movimento testo più fluido su Mac e iPad
- Eliminati i rerender durante il trascinamento
- Pointer capture e requestAnimationFrame per un drag stabile
- Bloccato lo scorrimento involontario della pagina durante il drag


NOVITÀ v141
- Flag Numero nel cerchio per Fiorentina e avversari
- Opzione Avversari: linea tratteggiata da compilare a penna
- Navigazione schema precedente/successivo in Campo intero
- Tratteggio delle frecce corretto
- Punta delle frecce sempre piena
- Nuove preferenze incluse nel backup


NOVITÀ v141
- Linea avversari continua anziché tratteggiata
- Linea avversari spostata più in basso
- Flag numero applicato soltanto ai giocatori selezionati
- Possibilità di mostrare/nascondere il numero per gruppi diversi
- Stato misto del flag quando la selezione contiene giocatori con impostazioni differenti


NOVITÀ v141
- Flag Linea nei selezionati applicato soltanto agli avversari selezionati
- Possibilità di mostrare o nascondere la linea per singoli avversari o gruppi
- Stato intermedio del flag per selezioni miste
- Il flag resta disabilitato se non è selezionato alcun avversario


FIX v141 - TRATTEGGIO FRECCE
- Applicato realmente stroke-dasharray al corpo di frecce dritte e curve
- Punta della freccia sempre piena
- Quattro livelli: continua, tratto corto, tratto medio, puntinata
- Aggiornamento immediato del cursore anche su iPad
- Valore salvato nei progetti e nei backup
- Compatibilità con frecce create nelle versioni precedenti


NOVITÀ v141 - AGGIORNAMENTO AUTOMATICO PWA
- Cache service worker versionata per ogni release
- Eliminazione automatica delle cache precedenti
- index.html sempre controllato dalla rete prima della cache
- Asset aggiornati in background con stale-while-revalidate
- Controllo aggiornamenti all'avvio, al ritorno in primo piano e ogni 5 minuti
- Attivazione automatica della nuova versione
- Salvataggio dello stato prima del refresh invisibile
- Nessuna necessità di svuotare manualmente la cache


NOVITÀ v141 - RENDERING CAMPO
- Canvas logico fisso 1000 × 620
- Il campo viene ridimensionato soltanto tramite transform: scale()
- Maglie, palloni, testi, frecce e forme crescono insieme al campo
- Nessun oggetto resta piccolo entrando in Campo intero
- Coordinate identiche tra Mac, iPad e fullscreen
- Adattamento automatico a rotazione e ridimensionamento


FIX v141 - CAMPO INTERO
- Corretto il campo ingrandito e tagliato in modalità fullscreen
- Eliminata la centratura tramite translate, instabile su Safari e Chrome
- Posizione del canvas calcolata esplicitamente in pixel
- Scala uniforme per campo, maglie, palloni, testi, frecce e forme
- Campo sempre centrato e interamente visibile
- Ricalcolo automatico dopo rotazione e cambio dimensione


FIX v141 - FULLSCREEN PERFETTO
- Scala calcolata sul visualViewport reale del browser
- Campo sempre interamente visibile
- Centratura orizzontale e verticale precisa
- Spazio protetto per le frecce di navigazione
- Nessun taglio inferiore o laterale
- Nessuna deformazione
- Maglie, palloni, frecce, testi e forme scalano insieme
- Ricalcolo dopo resize, rotazione, cambio barra browser e riapertura app


FIX v141 - CAMPO INTERO
- Campo sempre completamente visibile
- Margini di sicurezza più ampi sopra, sotto e ai lati
- Calcolo basato sul viewport reale del browser
- Piccolo fattore di sicurezza contro tagli e arrotondamenti
- Centratura precisa
- Campo, maglie, palloni, frecce, testi e forme scalano insieme


FIX v141 - CAMPO INTERO
- Centratura reale orizzontale e verticale
- Campo ingrandito uniformemente
- Spazi bianchi ridotti al minimo
- Proporzioni 1000 × 620 mantenute
- Maglie, palloni, frecce, testi e forme scalano insieme
- Nessun taglio ai bordi


NOVITÀ v141 - MODALITÀ PANCHINA E SPOGLIATOIO
- Pulsante PANCHINA a sinistra di Sostituzione
- Pulsante SPOGLIATOIO a destra di Sostituzione
- PANCHINA mostra cognome, cerchio bianco e numero su tutti i giocatori
- SPOGLIATOIO nasconde cognome e numero, lasciando soltanto il cerchio bianco
- Funzione applicata sia a Fiorentina sia agli avversari
- Stato attivo evidenziato graficamente
- Preferenze incluse automaticamente nei backup


NOVITÀ v141
- PANCHINA e SPOGLIATOIO diventano modalità globali del progetto
- La modalità vale automaticamente per tutti gli schemi
- I nuovi schemi e quelli duplicati ereditano la modalità attiva
- PANCHINA mostra nome, cerchio e numero su tutti i giocatori
- SPOGLIATOIO mostra soltanto il cerchio bianco
- Rimossa definitivamente la scritta tecnica di stato sotto Sostituzione


NOVITÀ v141
- Numero nei selezionati modifica soltanto lo schema corrente
- Linea nei selezionati modifica soltanto lo schema corrente
- Ogni schema conserva autonomamente numeri e linee personalizzate
- PANCHINA e SPOGLIATOIO restano modalità globali per tutti gli schemi
- Override per-schema inclusi automaticamente nei backup


NOVITÀ v141
- Nuovo pulsante PREPARAZIONE accanto a SPOGLIATOIO
- PREPARAZIONE riattiva la modifica libera di numeri, nomi, linee e cerchi
- PANCHINA e SPOGLIATOIO restano modalità globali per tutti gli schemi
- I flag locali sono modificabili soltanto in PREPARAZIONE
- Pulsante Sostituzione spostato più a destra
- Stato attivo evidenziato sui tre pulsanti modalità


NOVITÀ v141
- In modalità SPOGLIATOIO i nomi restano nascosti
- Il flag Linea nei selezionati resta utilizzabile sugli avversari
- La linea può essere mostrata o nascosta soltanto sugli avversari selezionati
- Numero nei selezionati resta bloccato fuori da PREPARAZIONE
- PANCHINA continua a mostrare nome, cerchio e numero su tutti gli schemi


NOVITÀ v141
- Numero nei selezionati utilizzabile in PANCHINA, SPOGLIATOIO e PREPARAZIONE
- Linea nei selezionati utilizzabile in PANCHINA, SPOGLIATOIO e PREPARAZIONE
- Le modifiche restano limitate allo schema corrente
- PANCHINA e SPOGLIATOIO impostano la base globale su tutti gli schemi
- PREPARAZIONE e Sostituzione non si sovrappongono più
- Header reso responsive su Mac e iPad


FIX v141
- Pulsante Sostituzione separato dal gruppo PANCHINA/SPOGLIATOIO/PREPARAZIONE
- Nessuna sovrapposizione tra i quattro pulsanti
- Header responsive su Mac e iPad
- Su schermi stretti le modalità restano scorrevoli senza coprire Sostituzione


FIX v141
- Pulsante Sostituzione spostato in una riga dedicata
- Nessuna sovrapposizione con contatori o modalità
- Posizione stabile su Mac e iPad
- Header principale semplificato


NOVITÀ v141
- Pulsante Sostituzione spostato al centro della barra superiore
- Rimossa la riga dedicata precedente
- Linea nei selezionati disponibile per Fiorentina e avversari
- In SPOGLIATOIO: niente nome, niente numero e niente cerchio bianco
- In SPOGLIATOIO: linea continua sotto tutte le maglie
- Linea sotto la maglia ridotta del 35%


NOVITÀ v144
- Pulsante Sostituzione abbassato ulteriormente del 35%
- Linea sotto le maglie Fiorentina ridotta del 40%
- Linea avversari lasciata invariata
- Nessuna modifica alla logica dell'app


NOVITÀ v144
- Pulsante Sostituzione abbassato ulteriormente del 30%
- Linea sotto le maglie abbassata di circa 7 px
- Colore linea aggiornato a #D0CFD7
- Lunghezze linea Fiorentina e avversari mantenute come in v143


FIX v146
- Allineato il versioning interno a v146
- Aggiornati STORAGE_KEY, appVersion e service worker
- Corretto João Mário: firstName João, lastName Mário, name João Mário
- Eliminato il nome duplicato João João Mário
- Ripuliti i riferimenti residui a pulsanti Undo/Redo inesistenti
- Controllo sintassi JavaScript completato


FIX v147
- Ripristinato il funzionamento dei due flag Cerchio bianco
- Funzionano in PANCHINA, SPOGLIATOIO e PREPARAZIONE
- Selezione supportata sia dal campo sia dalla lista laterale
- Modifica applicata soltanto allo schema corrente quando ci sono giocatori selezionati
- Senza selezione, il flag aggiorna il valore predefinito della squadra
- PANCHINA e SPOGLIATOIO continuano a impostare la base globale su tutti gli schemi


FIX v148 - SPESSORE FRECCE
- Unica sorgente dello spessore: cursore Spessore
- Nuove frecce create sempre con il valore esatto del cursore
- Rimossa la duplicazione della proprietà dashStyle
- Spessore normalizzato e salvato come numero
- vector-effect non-scaling-stroke per resa uniforme
- Rimossa l'ombra direzionale che alterava otticamente lo spessore
- Tratteggio ricalcolato sullo spessore reale
- Compatibilità con frecce delle versioni precedenti


ROADMAP 20 PASSAGGI - PASSAGGIO 01/20 - v149
Fondazione tecnica / integrità progetto

- Introdotto PROJECT_SCHEMA_VERSION
- Aggiunta normalizzazione centralizzata di progetto, schemi, giocatori e oggetti grafici
- Coordinate e valori numerici vengono validati prima di essere usati
- Salvataggio protetto contro stati corrotti
- Ripristino Undo/Redo protetto contro snapshot non validi
- Limite storico ridotto e centralizzato per contenere l'uso di memoria
- Ogni nuovo schema inizializza correttamente gli override grafici
- Nessuna modifica intenzionale all'esperienza utente o al layout


ROADMAP 20 PASSAGGI - PASSAGGIO 02/20 - v150
Motore grafico comune, fase 1

- Introdotto un gestore comune delle selezioni per palloni, testi e disegni
- Introdotto un motore Pointer Drag condiviso con requestAnimationFrame
- Pallone e testo ora usano lo stesso ciclo: selezione, drag, history, salvataggio
- Cleanup centralizzato degli event listener di trascinamento
- Gestione pointerId uniforme per Mac e iPad
- clearAllSelections ora aggiorna anche i testi
- Nessuna modifica intenzionale al layout o alle coordinate degli schemi
- Frecce e maglie restano sul motore precedente in questa release per ridurre il rischio


ROADMAP 20 PASSAGGI - PASSAGGIO 03/20 - v151
Motore grafico comune, fase 2

- Frecce dritte, frecce curve, cerchi e rettangoli migrati al motore comune di selezione
- Drag dei disegni migrato a un gestore Pointer condiviso
- Coordinate logiche 1000×620 gestite da un unico helper
- Cleanup centralizzato di pointermove / pointerup / pointercancel
- Multi-selezione dei disegni mantenuta
- Selezione primaria e selezione multipla ora restano sincronizzate
- Undo e salvataggio del drag seguono lo stesso ciclo di palloni e testi
- Nessuna modifica intenzionale al layout o alla resa grafica
- Maglie restano sul motore storico per un'ultima migrazione separata


ROADMAP 20 PASSAGGI - PASSAGGIO 04/20 - v152
Motore grafico comune, fase 3

- Maglie/giocatori migrate al motore Pointer Drag condiviso
- Selezione giocatori integrata nel gestore comune delle selezioni
- Drag singolo e drag di gruppo mantengono lo stesso comportamento
- Eliminato il possibile salto iniziale della maglia quando viene presa fuori centro
- Un solo snapshot Undo per ogni trascinamento completo
- Cleanup comune degli event listener pointermove/pointerup/pointercancel
- Gestione pointerId uniforme per Mac e iPad
- Cmd/Ctrl continua a gestire la multiselezione senza avviare drag accidentali
- Doppio tap/click rapido degli avversari preservato
- Palloni, testi, frecce, forme e maglie ora condividono la stessa base di selezione/drag


ROADMAP 20 PASSAGGI - PASSAGGIO 05/20 - v153
Motore grafico comune, completamento

- Maniglie di frecce dritte migrate al motore Pointer Drag condiviso
- Maniglie delle frecce curve migrate al motore condiviso
- Control point Bézier delle curve gestiti dallo stesso sistema
- Maniglie di cerchi e rettangoli migrate al motore condiviso
- Un solo snapshot Undo per ogni modifica tramite maniglia
- Eliminati salvataggi duplicati al termine del drag
- Coordinate delle curve normalizzate per evitare valori fuori campo
- Touch handling delle maniglie migliorato su iPad
- Motore grafico comune ora copre maglie, palloni, testi, frecce, curve e forme
- Nessuna modifica intenzionale al layout o alla grafica del progetto


ROADMAP 20 PASSAGGI - PASSAGGIO 06/20 - v154
Undo/Redo robusto, fase 1

- Cronologia deduplicata: snapshot identici non occupano più step
- Undo e Redo protetti durante ripristini o transazioni
- Introdotta base transazionale begin/commit/cancel per le prossime operazioni complesse
- Drag usa la stessa deduplicazione centralizzata
- Aggiunto pulsante touch Ripristina accanto a Torna indietro
- Cmd/Ctrl+Shift+Z continua a fare Redo
- Aggiunto Cmd/Ctrl+Y come scorciatoia Redo
- Shortcut Undo/Redo ignorate durante la scrittura in input e textarea
- Corretto cache-busting del service worker rimasto fermo a v127
- Import progetto normalizzato prima del rendering


ROADMAP 20 PASSAGGI - PASSAGGIO 07/20 - v155
Undo/Redo robusto, fase 2
- Slider raggruppati in un solo step Undo per gesto.
- Evitati snapshot multipli durante lo scorrimento.
- Controlli grafici transaction-aware.
- Undo/Redo chiudono regolazioni aperte in sicurezza.
- Stato accessibile Undo/Redo sincronizzato.
- Cache service worker aggiornata a v155.


ROADMAP 20 PASSAGGI - PASSAGGIO 08/20 - v156
Architettura modalità, fase 1

- Separata la logica di visualizzazione in tre livelli:
  1. base globale della modalità
  2. override dello schema corrente
  3. valore del singolo giocatore
- Centralizzata la lettura di nome, numero, cerchio e linea
- Centralizzata la scrittura degli override dello schema
- PANCHINA / SPOGLIATOIO / PREPARAZIONE mantengono il comportamento esistente
- I flag locali continuano a modificare soltanto lo schema corrente
- Override non validi vengono ripuliti automaticamente al caricamento
- Aggiunto controllo di integrità degli override per ogni schema
- Nessuna modifica intenzionale al layout o alla resa grafica


ROADMAP 20 PASSAGGI - PASSAGGIO 09/20 - v157
Architettura modalità, fase 2

- PANCHINA e SPOGLIATOIO diventano preset globali non distruttivi
- Il cambio modalità non riscrive più gli override salvati nei singoli schemi
- Tornando a PREPARAZIONE riappaiono automaticamente le personalizzazioni locali
- Gerarchia definitiva:
  1. override dello schema corrente
  2. preset globale PANCHINA/SPOGLIATOIO
  3. valore base del giocatore/squadra
- I flag locali continuano a funzionare in tutte le modalità
- Aggiunto controllo interno per verificare che un cambio modalità non alteri gli schemi
- Nessuna modifica intenzionale al layout o alla grafica


ROADMAP 20 PASSAGGI - PASSAGGIO 10/20 - v158
Preset di visualizzazione, fase 1

- Introdotto un motore centralizzato VIEW_PRESETS
- Preparati i preset:
  - Preparazione
  - Panchina
  - Spogliatoio
  - Presentazione staff
  - Stampa
  - Analisi interna
- PANCHINA / SPOGLIATOIO / PREPARAZIONE ora mantengono sincronizzato anche il preset interno
- Aggiunta proprietà state.viewPreset con migrazione automatica dei progetti esistenti
- Predisposto il passaggio controllato alla modalità Campo intero per i preset che lo richiederanno
- Rimossi controlli diagnostici v157 non più necessari
- Nessuna modifica intenzionale all'interfaccia in questa release


ROADMAP 20 PASSAGGI - PASSAGGIO 11/20 - v159
Preset di visualizzazione, fase 2

- Aggiunto selettore Vista nella barra dei comandi rapidi
- Preset: Preparazione, Panchina, Spogliatoio, Presentazione staff, Stampa, Analisi interna
- Presentazione staff può attivare automaticamente Campo intero
- Selettore sincronizzato con PANCHINA/SPOGLIATOIO/PREPARAZIONE
- Evitati step Undo quando si richiama un preset già attivo
- Preset salvato nel progetto e nei backup
- Layout responsive per Mac e iPad


ROADMAP 20 PASSAGGI - PASSAGGIO 12/20 - v160
Frecce professionali, fase 1

- Stile corpo freccia trasformato in pulsanti espliciti
- Scelte rapide: Continua, Tratteggio, Puntinata
- Dimensione punta trasformata in preset rapidi
- Scelte punta: Piccola, Media, Grande
- I controlli precedenti restano internamente compatibili ma non occupano più spazio visivo
- Pulsante attivo sempre sincronizzato con la freccia selezionata
- Nuove frecce ereditano correttamente l'ultimo preset scelto
- Migliorata usabilità touch su iPad
- Nessuna modifica alla geometria o allo spessore delle frecce esistenti


ROADMAP 20 PASSAGGI - PASSAGGIO 13/20 - v161
Frecce professionali, fase 2

- Spessore delle frecce normalizzato e deterministico
- Eliminata la dipendenza della resa dello spessore dal resize SVG
- Aggiunto vector-effect non-scaling-stroke
- Pattern Continua / Tratteggio / Puntinata calcolato in modo stabile
- Tratteggio ora dipende solo dallo stile scelto e dallo spessore impostato
- stroke-linecap e stroke-linejoin uniformati
- Disegni esistenti normalizzati al caricamento
- Migliorata coerenza tra vista normale, Campo intero e iPad
- Nessuna modifica intenzionale a posizioni, colori o contenuto degli schemi


ROADMAP 20 PASSAGGI - PASSAGGIO 14/20 - v162
Snap intelligente, fase 1

- Toggle SNAP aggiunto nella barra comandi.
- Snap disattivato di default.
- Griglia logica al 5%.
- Aggancio morbido solo quando un oggetto si avvicina alla griglia.
- Maglie, palloni e testi supportano lo snap.
- Guide temporanee verticali/orizzontali durante l'aggancio.
- Stato SNAP salvato nel progetto e nei backup.
- Nessuna posizione esistente viene modificata automaticamente.


ROADMAP 20 PASSAGGI - PASSAGGIO 15/20 - v163
Snap intelligente, fase 2

- Snap ora riconosce gli allineamenti X/Y degli altri giocatori sul campo.
- Aggiunto aggancio dedicato al centro campo (50%).
- Guide verdi = allineamento con giocatore.
- Guide gialle = centro campo.
- Guide azzurre = griglia.
- Palloni e testi possono allinearsi alle coordinate dei giocatori.
- FIX importante: trascinando più maglie insieme lo snap non deforma più la formazione.
- Nel drag di gruppo viene agganciato il giocatore-ancora e applicato lo stesso delta a tutto il gruppo.
- SNAP resta opzionale e disattivato di default.


ROADMAP 20 PASSAGGI - PASSAGGIO 16/20 - v164
Export e stampa robusti, fase 1

- PNG e PDF ora usano una sessione di export isolata.
- Tutte le selezioni vengono nascoste durante la cattura.
- Stato completo dell'interfaccia ripristinato dopo l'export.
- Ripristino garantito anche se html2canvas/jsPDF genera un errore.
- PDF multi-schema ripulisce le selezioni a ogni pagina.
- Attesa di due frame prima della cattura per evitare render incompleti.
- Interazioni bloccate temporaneamente durante l'esportazione.
- Corretto il rischio di perdere selezioni di palloni, testi, frecce o multi-selezioni.
- Nessuna modifica al contenuto degli schemi.


ROADMAP 20 PASSAGGI - PASSAGGIO 17/20 - v165
Export e stampa robusti, fase 2

- Export PNG/PDF reso indipendente dalla modalità Campo intero.
- Prima della cattura viene usata automaticamente la geometria standard del campo.
- Al termine viene ripristinata anche la precedente modalità Campo intero.
- Scala export adattiva: alta qualità su Mac, consumo memoria controllato su iPad/iPhone.
- Limite prudente della superficie canvas per ridurre crash su dispositivi mobili.
- Retry automatico a qualità inferiore se una cattura ad alta risoluzione fallisce.
- Attesa esplicita di font e immagini prima dell'acquisizione.
- Timeout di sicurezza sulle immagini per evitare export bloccati.
- Controlli fullscreen e guide SNAP esclusi dalla copia esportata.
- Nessuna modifica ai dati o alla disposizione degli schemi.


v166 - ripartenza dalla v165 stabile
- Sistemati i pulsanti Punta e Tratteggio.
- Default freccia: Punta Media e Tratteggio Continuo.
- Eliminato completamente il controllo VISTA accanto a SNAP.
- SNAP attivo al primo avvio della v166; poi resta liberamente disattivabile.
- Nessuna modifica alla logica delle rose o alle altre funzioni della v165.


v167 - indicatore sicurezza backup
- Indicatore rosso nella topbar finché non viene esportato un backup.
- Conta le modifiche effettuate dall'avvio/ultimo export.
- Dopo Esporta backup diventa verde e torna a 0 modifiche.
- Alla modifica successiva torna automaticamente rosso.
- Importare un backup imposta lo stato come protetto.
- Nessuna modifica alle rose o alla logica stabile della v166.


v168 - stabilizzazione oggetto Testo
- Testi isolati correttamente per schema.
- Cambio schema pulisce tutte le selezioni oggetto/testo.
- Posizione testo salvata esplicitamente a fine trascinamento.
- data-index aggiunto ai testi per la selezione visiva.
- Selezione rettangolare corretta anche per i testi.
- Nessuna modifica a rose, backup, SNAP o frecce.


v173 - motore unico selezione/spostamento
- Unificato il drag di maglie, palloni, testi e frecce/forme.
- Se una multiselezione contiene tipi diversi, trascinare uno degli elementi muove l'intero gruppo.
- Tutti gli elementi ricevono lo stesso delta di movimento.
- SNAP calcolato una sola volta sull'intero gruppo.
- Limiti del campo applicati al gruppo intero per evitare disallineamenti.
- Il click su un elemento già dentro una multiselezione non distrugge più il gruppo.
- Eliminazione mista corretta: giocatori + testi + palloni + frecce vengono eliminati/rimossi nello stesso comando.
- Salvataggio e Undo vengono registrati una sola volta a fine drag.
- Cambio schema azzera completamente stato di selezione e marquee.


v174 - Nuovo schema
- Aggiunto pulsante + Nuovo schema sopra Duplica / Elimina.
- Apre una piccola finestra con due percorsi: Schema vuoto oppure copia da Layout.
- I Layout vengono letti direttamente dalla cartella Layout del Database ACF.
- La copia di un Layout aggiunge un nuovo schema senza sostituire il progetto corrente.
- Posizioni e override dei giocatori vengono riallineati alla rosa corrente per nome/numero.
- Frecce, forme, palloni, testi e note del Layout vengono copiati nel nuovo schema.
- Nessuna modifica alle logiche v173 di selezione e spostamento.


v176 - Flip orizzontale
- Aggiunto pulsante Flip accanto a Distribuisci.
- Il flip lavora sulla selezione corrente.
- Maglie, palloni, testi, frecce e forme vengono specchiati rispetto al centro orizzontale della selezione.
- Le frecce cambiano correttamente direzione e le curve vengono specchiate.
- Il testo cambia posizione senza essere scritto al contrario.
- L'operazione è annullabile con Undo.


v177 - Flip intero campo
- Flip applicato all'intero schema corrente, non alla selezione.
- Maglie, palloni, testi, frecce e forme vengono specchiati rispetto alla mezzeria verticale del campo.
- Il testo resta leggibile.
- Undo supportato.


v178 - cleanup stabilità
- Nessuna nuova funzione.
- Rimosso CSS morto del vecchio controllo VISTA.
- Rimossa la definizione duplicata di isEditableTarget.
- Rimosse le seconde scorciatoie Cmd/Ctrl+C e Cmd/Ctrl+V irraggiungibili.
- Nessuna modifica a rose, SNAP, backup, testi, selezione, drag, Nuovo schema, rinomina o Flip.
- Audit completo JavaScript, Service Worker, ID e listener superato.


v179 - Flip stability fix
- Riscritto il Flip dell'intero campo.
- Corretto bug critico: la vecchia funzione chiamava clampDrawing fuori dal suo scope.
- Calcolo atomico su copie: niente più schema parzialmente ribaltato in caso di errore.
- Un solo renderAll dopo il flip, più coerente tra Chrome, Safari e iPad.
- Curve: curveOffset invertito insieme alla geometria per mantenere la curvatura corretta anche dopo modifiche successive.
- Rollback automatico se il flip fallisce.
- Protezione contro doppia attivazione nello stesso frame.
- Pulsante Flip ottimizzato per touch/WebKit.
- Nessuna modifica alle altre funzioni della v178.


v181 - sagome allenamento
- Aggiunta Sagoma singola negli Objects.
- Aggiunta Barriera da 4 negli Objects.
- Design giallo con gambe bianche più corte.
- Oggetti integrati nel sistema drawings: selezione, trascinamento, multiselezione, copia/incolla, elimina, Undo/Redo e Flip.
- Ridimensionamento tramite maniglie diagonali, come gli altri oggetti grafici.
- Compatibilità touch/pointer mantenuta.

v182 - bugfix sagome
- Corretto il bug mostrato nel video: dopo una modifica/ridimensionamento la sagoma veniva trasformata in una freccia.
- Causa: il normalizzatore dei drawings accettava solo arrow/curve/circle/rect e convertiva mannequin/wall4 in arrow durante il salvataggio.
- mannequin e wall4 sono ora tipi persistenti validi anche dopo save, import, spostamento e ridimensionamento.


v183 - sagome senza gambe + colore
- Rimosse completamente le gambe bianche da Sagoma singola e Barriera da 4.
- Rimosse le gambe anche dalle icone di anteprima negli Objects.
- Testa e busto usano ora il colore dell'oggetto.
- Selezionando una sagoma/barriera, la palette Colore esistente permette di cambiarla in rosso, viola, blu, ecc.
- Restano attivi selezione, drag, ridimensionamento, copia/incolla, elimina, Undo/Redo e Flip.


v184 - ridimensionamento proporzionale sagome
- Sagoma singola e barriera da 4 mantengono sempre il rapporto larghezza/altezza durante il ridimensionamento.
- Le due maniglie diagonali usano una scala unica, quindi non è più possibile schiacciare o allungare la sagoma.
- Le quattro sagome della barriera sono più ravvicinate: busti più larghi e teste leggermente più compatte nel gruppo.
- Colore, drag, copia/incolla, elimina, Undo/Redo e Flip restano invariati.


v185 - numeri sagome
- Barriera da 4: numeri 1, 2, 3, 4 sotto le sagome.
- Sagoma singola: numero 5 sotto.
- Il checkbox "Numero nei selezionati" ora funziona anche per sagoma singola e barriera selezionate.
- Doppio clic/doppio tap su una sagoma permette di modificare il numero.
- Nella barriera, il doppio clic modifica la sagoma corrispondente.
- Sagome rese più snelle e barriera più compatta.
- Ridimensionamento proporzionale, colore, drag, copia/incolla, elimina, Undo/Redo e Flip invariati.

v186: testa collegata al corpo; numeri 50% più piccoli e ravvicinati; sagome 25% più basse. Nessun'altra funzione modificata.


v187 - editor numeri sagome
- Doppio clic e doppio tap su sagoma singola/barriera aprono una finestra di modifica in stile Anagrafica giocatore.
- Nella barriera da 4 viene identificata la singola sagoma toccata.
- Numero modificabile da 0 a 999 e salvato con Undo.
- Numeri spostati sopra la testa delle sagome.
- Nessuna modifica a drag, ridimensionamento proporzionale, colore, Flip, rose o backup.


v188 - barriera compatta
- Le 4 sagome della barriera ora si toccano lateralmente.
- Barriera e sagoma singola più basse.
- Numeri spostati chiaramente sopra le teste.
- Numeri leggermente più piccoli per non appesantire la grafica.
- Restano invariati doppio tap/clic per modifica numero, colore, ridimensionamento proporzionale, drag, Flip e salvataggio.


v189 - barriera più snella
- Le 4 sagome hanno la stessa proporzione visiva della sagoma singola.
- Altezza invariata rispetto alla v188: nessun aumento verticale.
- Barriera più stretta, con sagome che continuano a toccarsi.
- Numeri spostati più in alto, senza sovrapporsi alla testa.
- Numeri ingranditi del 10%.
- Tutte le altre funzioni restano invariate.


v190 - integrazione completa sagome
- Doppio clic/doppio tap su sagoma o singolo elemento della barriera apre l'editor numero.
- Sagoma singola e barriera restano selezionabili come oggetti.
- Orizzontale, Verticale e Distribuisci ora includono anche sagome/barriere selezionate, anche insieme ai giocatori.
- Flip dell'intero campo inverte anche l'ordine dei numeri della barriera.
- Numero mantenuto fuori dalla sagoma e sopra la testa.
- Nessuna modifica a rose, backup, testi, SNAP o archivio.


v191 - sagome più basse e barriera unita
- Larghezza invariata rispetto alla v190.
- Altezza iniziale ridotta del 35%.
- I corpi delle 4 sagome della barriera ora si toccano lateralmente.
- Numero abbassato di circa il 15%, restando sopra la testa.
- Nessuna modifica a doppio tap, selezione, allineamenti, Distribuisci, Flip o modifica numeri.


v192 - barriera ridisegnata
- La barriera da 4 è ora composta graficamente da quattro copie della sagoma singola.
- Stesse proporzioni di testa e busto della sagoma singola.
- Stessa altezza della sagoma singola.
- I busti delle quattro sagome si toccano lateralmente senza deformazioni.
- Doppio tap/clic, numeri, selezione, ridimensionamento, allineamenti, Distribuisci e Flip restano invariati.


v194 - dimensioni default
- Maglie giocatori: dimensione globale di default impostata al 75%.
- Sagoma singola e barriera: dimensione iniziale ridotta per corrispondere visivamente alla scala mostrata accanto a maglie al 75%.
- Proporzioni e tutte le funzioni delle sagome/barriere restano invariate.


v195 - Distribuisci compatto
- Distribuisci non usa più gli estremi esistenti del gruppo.
- Imposta una distanza minima e compatta di circa 34 px tra i centri.
- Con maglie al 75% gli elementi risultano quasi a contatto senza sovrapporsi.
- Il gruppo resta centrato e dentro il campo.
- Funziona anche con sagome/barriere selezionate.


v196 - Distribuisci con distanza visiva reale
- La distanza non è più fissa tra i centri.
- Viene misurata la larghezza visiva reale di ogni maglia/sagoma.
- Tra due elementi viene lasciato uno spazio di 6 px.
- Gli elementi non si toccano e non si sovrappongono, ma restano quasi affiancati.
- Compatibile con maglie di dimensioni diverse e sagome/barriere.


v198 - bugfix e pulizia generale
- Spessore freccia default corretto al 75% reale della corsa slider: valore 11 su range 2-14.
- Allineato drawingDefaults allo stesso valore 11.
- Rimossi fallback residui della dimensione giocatori al 90%; default coerente al 75%.
- Rimosso il vecchio startGroupDrag non più utilizzato.
- Pulito CSS morto del vecchio controllo VISTA e doppio return ridondante.
- Distribuisci reso deterministico: larghezza maglie calcolata da scala dati, non dal timing del DOM.
- Sagome/barriere renderizzate sulle coordinate reali, senza minimi grafici nascosti 24x48.
- Service Worker verificato: updateViaCache none, skipWaiting, clients.claim, versioni allineate.
- Audit JavaScript, Service Worker e ID superato.


v199 - deep stability bugfix
- Migrazione rosa legacy resa canonica: usa FIORENTINA_PRESET, niente più vecchio Oulai 32/Oulaï.
- Tutti i fallback dimensione giocatori portati al 75%.
- Rimosso il collegamento DOM al vecchio menu VISTA eliminato.
- Progetto corrente non viene più persistito automaticamente in localStorage: refresh manuale = reset.
- L'aggiornamento automatico del Service Worker usa un recovery temporaneo di sessione per non perdere lavoro durante il solo reload tecnico.
- Import backup normalizzato con lo schema corrente e non salvato automaticamente come progetto persistente.
- Navigazione fullscreen non incrementa più il contatore modifiche.
- Rimossa la save beforeunload che generava salvataggi/dirty count non intenzionali.
- Archivio/Database ACF resta persistente.
- Audit JS, Service Worker, ID e listener completato.


v200 - sostituzioni multiple
- Modifica isolata costruita sulla v199 stabile.
- 1 giocatore selezionato: comportamento storico della sostituzione singola invariato.
- 2+ giocatori selezionati: apre una lista di sostituzioni multiple.
- Ogni riga associa giocatore in uscita e giocatore in entrata.
- Le righe vengono precompilate con i primi giocatori disponibili e restano modificabili.
- Un giocatore in entrata già scelto viene disabilitato nelle altre righe.
- Possibilità di rimuovere singole righe con ×.
- Conferma unica applica tutte le sostituzioni contemporaneamente a tutti gli schemi.
- Algoritmo simultaneo evita effetti a cascata tra sostituzioni.
- Un solo pushHistory/Undo per l'intero batch.
- Nessuna modifica a renderer, drag, Flip, sagome, backup, rose, SNAP o archivio.


v201 - pulizia interfaccia
- Rimossi dalla topbar: Importa rosa, Importa progetto, Salva.
- Mantenuti Esporta PDF ed Esporta PNG.
- Rimosso il comando Blocca dalla barra inferiore.
- Indicatore backup ridotto a pill compatta "BACKUP" all'estrema destra.
- Rosso = backup non esportato; verde = backup esportato.
- Numero modifiche conservato internamente e nel tooltip, non più mostrato nella pill.
- Rimossi/null-safe i listener collegati ai controlli eliminati.
- Nessuna modifica alla logica delle sostituzioni multiple o agli altri strumenti.


v203 - inversione grafica header
- Modifica esclusivamente estetica.
- PANCHINA / SPOGLIATOIO / PREPARAZIONE spostati nella barra superiore blu.
- Sostituzione spostata nella barra grigia del campo.
- ID, listener e funzioni JavaScript invariati.
- Nessuna modifica a sostituzioni, modalità di presentazione, selezione, backup o strumenti.


v205 - modalità DIFENSIVE
- Nuovo pulsante DIFENSIVE accanto a PANCHINA.
- Menu a tendina con CORNER e PUNIZIONI.
- PUNIZIONI: linea verticale grigia sopra la maglia, leggermente spostata a sinistra.
- CORNER: linea orizzontale grigia sotto la maglia.
- Il marker è figlio grafico della maglia: segue drag, scala, allineamenti, Distribuisci e Flip senza nuovi oggetti.
- In DIFENSIVE nome e numero vengono nascosti solo graficamente; gli override originali non vengono modificati.
- Panchina, Spogliatoio e Preparazione disattivano il layer DIFENSIVE senza cambiare la loro logica storica.
- Nessuna modifica a coordinate, selezione, sostituzioni multiple, backup, rose, SNAP, sagome o archivio.


v208 - deep stability fixes
- Corretto passaggio DIFENSIVE -> PANCHINA/SPOGLIATOIO/PREPARAZIONE anche quando la modalità interna coincideva già.
- Undo di DIFENSIVE corretto: snapshot preso prima della disattivazione del layer.
- DIFENSIVE ora usa sempre PREPARAZIONE come baseline deterministica, senza dipendere da bench/locker precedenti.
- Dropdown DIFENSIVE reso position:fixed e vincolato al viewport per Safari/iPad.
- Bordo selezione sagoma/barriera esteso per comprendere anche il numero sopra la testa.
- Rimossa completamente la vecchia logica Blocca non più raggiungibile dall'interfaccia.
- Rimossi selettori CSS esplicitamente obsolete senza toccare regole attive.
- html2canvas/jsPDF non sono più async: disponibili prima dell'avvio dell'app.
- Service Worker v208 cache-a le due librerie export quando disponibili, così PNG/PDF restano utilizzabili offline dopo una installazione/aggiornamento effettuato con rete.
- Backup, sostituzioni multiple, rose, Flip, SNAP, drag e coordinate non modificati.


v209 - daily-use stability
- Esporta backup non incrementa più il contatore modifiche; Annulla su iPad non crea falso stato dirty.
- Import backup azzera Undo/Redo, transazioni e clipboard per impedire ritorni al progetto precedente.
- Apri/Usa copia dal Database ACF normalizza e valida il progetto prima del caricamento e azzera la history tra progetti.
- Recovery dopo aggiornamento PWA salta le migrazioni legacy distruttive della rosa e preserva eventuali home player personalizzati.
- Stato BACKUP (verde/rosso e conteggio) preservato durante il solo reload tecnico da aggiornamento.
- Un aggiornamento PWA in attesa non viene attivato automaticamente se ci sono modifiche reali non ancora protette da backup.
- Dopo un backup riuscito, un eventuale aggiornamento in attesa può attivarsi automaticamente.
- Defensive, sostituzioni multiple, selezione sagome, Flip, export offline, SNAP e strumenti invariati.


v211 - PDF ottimizzato per stampa
- Titolo PDF convertito automaticamente in MAIUSCOLO.
- Titolo centrato orizzontalmente.
- Titolo aumentato del 35%: da 15 pt a 20,25 pt.
- Campo posizionato sotto il titolo con separazione dedicata, senza sovrapposizioni.
- Margini laterali PDF ridotti a 1,5 mm per sfruttare quasi tutta la larghezza A4 landscape.
- Margine inferiore 2,5 mm; scala campo calcolata automaticamente sulla massima area disponibile.
- Nessuna modifica alla visualizzazione dell'app o alle funzioni operative.


v212 - fix menu DIFENSIVE
- Corretto il bug che poteva staccare il menu CORNER/PUNIZIONI dal pulsante DIFENSIVE.
- Rimossa la combinazione position:fixed + coordinate viewport, incompatibile con il contenitore topbar trasformato.
- Menu ora position:absolute direttamente dentro defensive-mode-control position:relative.
- Il menu rimane sempre centrato sotto DIFENSIVE con gap di 6 px.
- Rimossi i listener resize/scroll usati solo per il vecchio posizionamento.
- Nessuna modifica alla logica CORNER/PUNIZIONI, Defensive, PDF, backup o schemi.


v213 - PDF stampa massimizzato
- Margini laterali PDF ridotti da 1,5 mm a 0,4 mm.
- Margine inferiore portato a 0,4 mm.
- Titolo centrale portato da 20,25 pt a 24 pt.
- Distanza titolo/campo calcolata sul reale ingombro del font, con gap ottico di 3,6 mm.
- Campo spostato più in basso e scalato alla massima larghezza disponibile.
- Nessuna modifica alle funzioni operative dell'app.


v214 - fix feedback selezione sagome/barriere
- Corretto il caso in cui selezionando più sagome/barriere con l'area di selezione non compariva il bordo blu.
- L'outline SVG ora esiste sempre ma resta invisibile finché il gruppo non riceve la classe di selezione.
- La selezione tramite click, CMD+click e marquee usa ora lo stesso feedback visivo.
- Nessuna modifica a hit-area, selezione logica, drag, resize, numeri, Flip o strumenti.


v218 - PDF field framing fix
- PDF cattura direttamente #board 1000x620 anziché board-shell.
- Eliminato il crop fisso v216 che poteva tagliare giocatori vicini ai bordi.
- Campo PDF ora sfrutta la massima larghezza utile con margini pagina 0,4 mm.
- Titolo 24 pt centrale mantenuto.
- Spazio titolo/campo rifinito a 3,2 mm.
- PNG invariato: continua a usare il percorso di cattura precedente.
- Ruoli v217, sostituzioni globali, Defensive e selezione sagome invariati.
