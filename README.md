## Consegna

💡 **_Premessa:_** Stai sviluppando un **_form di registrazione_** per una piattaforma dedicata ai giovani sviluppatori web. Gli utenti devono iscriversi indicando le loro competenze e specializzazioni.

```js
Nota: a differenza di quanto visto finora negli esempi, per accedere all'API utilizzare utilizzare l'url base:
https://boolean-spec-frontend.vercel.app/freetestapi
al posto di:
https://freetestapi.com/api/v1

Ad esempio:
https://boolean-spec-frontend.vercel.app/freetestapi/users
per chiamare l'endpoint /users
```

## 📌 Milestone 1: Creare un Form con Campi Controllati

1.  Crea un **_form di registrazione_** con i seguenti **_campi controllati_** (gestiti con useState):

    ✅ **_Nome completo_** (input di testo)

    ✅ **_Username_** (input di testo)

    ✅ **_Password_** (input di tipo password)

    ✅ **_Specializzazione_** (select con opzioni: "Full Stack", "Frontend", "Backend")

    ✅ **_Anni di esperienza_** (input di tipo number)

    ✅ **_Breve descrizione sullo sviluppatore_** (textarea)

2.  **_Aggiungi una validazione al submit_**, verificando che:

    - Tutti i campi siano compilati

    - L'input **_Anni di esperienza_** sia un numero positivo

    - La **_Specializzazione_** sia selezionata

3.  Al submit, se il form è valido, **_stampa in console i dati._**

## 📌 Milestone 2: Validare in tempo reale

1. Aggiungere la validazione in tempo reale dei seguenti campi:

   ✅ **_Username_**: Deve contenere solo caratteri alfanumerici e almeno **_6 caratteri_** (no spazi o simboli).

   ✅ **_Password_**: Deve contenere almeno **_8 caratteri_**, **_1 lettera_**, **_1 numero_** e **_1 simbolo_**.

   ✅ **_Descrizione_**: Deve contenere tra **_100 e 1000 caratteri_** (senza spazi iniziali e finali).

**_Suggerimento:_** Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare `.includes()` per controllare se i caratteri appartengono a una di queste categorie:

```js
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&\*()-\_=+[]{}|;:'\\",.<>?/`~";
```

2. Per ciascuno dei campi validati in tempo reale, mostrare un **_messaggio di errore_** (rosso) nel caso non siano validi, oppure un **_messaggio di conferma_** (verde) nel caso siano validi.

## 📌 Milestone 3: Convertire i Campi Non Controllati

Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi **_non influenzano direttamente l’interfaccia mentre l’utente li compila_**, quindi è possibile gestirli in modo più efficiente.

1. **_Analizza il form_**: Identifica quali campi devono rimanere **_controllati_** e quali invece **_possono essere non controllati_** senza impattare l’esperienza utente.

2. **_Converti i campi non controllati_**: Usa `useRef()` per gestirli e recuperare il loro valore solo al momento del **_submit_**.

3. **_Assicurati che la validazione continui a funzionare_**: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form.

## 🎯 Bonus: Migliorare l'Usabilità

Utilizziamo `useRef()` per migliorare l’esperienza utente, implementando le seguenti funzionalità:

1. **_Focus automatico al primo input (Nome)_** al mount del componente.

2. **_Bottone "Reset"_** in fondo al form per ripristinare tutti i valori:

   - Gli **_input controllati_** devono tornare ai valori iniziali.

   - Gli **_input non controllati_** devono essere resettati manualmente usando useRef().

3. **_Freccia fissa in basso a destra_** che, quando cliccata, riporta l'utente all'inizio del form (bisogna usare position: fixed).
