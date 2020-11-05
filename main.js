// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.
//
// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.
//
// milestone 3:
// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
// e, ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.


$(document).ready(function() {

    let icone = [
        {
            nome: "ambulance",
            prefisso: "fa-",
            tipo: "mezzi",
            famiglia: "fas",
        },
        {
            nome: "car-alt",
            prefisso: "fa-",
            tipo: "mezzi",
            famiglia: "fas",
        },
        {
            nome: "motorcycle",
            prefisso: "fa-",
            tipo: "mezzi",
            famiglia: "fas",
        },
        {
            nome: "truck",
            prefisso: "fa-",
            tipo: "mezzi",
            famiglia: "fas",
        },
        {
            nome: "hat-cowboy",
            prefisso: "fa-",
            tipo: "vestiti",
            famiglia: "fas",
        },
        {
            nome: "mitten",
            prefisso: "fa-",
            tipo: "vestiti",
            famiglia: "fas",
        },
        {
            nome: "tshirt",
            prefisso: "fa-",
            tipo: "vestiti",
            famiglia: "fas",
        },
        {
            nome: "socks",
            prefisso: "fa-",
            tipo: "vestiti",
            famiglia: "fas",
        },
        {
            nome: "apple-alt",
            prefisso: "fa-",
            tipo: "cibo",
            famiglia: "fas",
        },
        {
            nome: "carrot",
            prefisso: "fa-",
            tipo: "cibo",
            famiglia: "fas",
        },
        {
            nome: "fish",
            prefisso: "fa-",
            tipo: "cibo",
            famiglia: "fas",
        },
        {
            nome: "ice-cream",
            prefisso: "fa-",
            tipo: "cibo",
            famiglia: "fas",
        },
    ];

    // Creo un array di colori
    let colori = ["#5f9ea0", "#d891ef","#0bda51"];

    // Creo un array di tipi di icona vuoto
    const tipi_icone = [];

    // Faccio un ciclo per individuare i tipi di icone presenti negli oggetti
    icone.forEach((icona) => {

        // Destrutturo la chiave tipo per usarla come variabile
        const {tipo} = icona;

        // Creo un if per verificare che il tipo letto dal ciclo non sia già presente nell'array vuoto che abbiamo creato prima (così da evitare doppioni di tipo)
        if(!tipi_icone.includes(tipo)) {
            tipi_icone.push(tipo);
        }
    });


    // Creo un ciclo foreach per ciclare l'array icone
    icone.forEach((icona) => {
        // Applico la funzione che abbiamo precedentemente creato per stampare le icone in pagina (compresa di destrutturazione chiavi, indice del colore e template literal)
        stampo_icone(icona);
    });


    // Scorro l'array di tipi di icone
    tipi_icone.forEach((tipo) => {
        // Ad ogni tipo di icona creo l'option nel DOM
        $(".tendina").append(`
        <option value="${tipo}">${tipo}</option>
        `);
    });

    // Intercetto il cambio di opzione nel menu a tendina con la funzione change
    $(".tendina").change(() => {
        // Creo una varibile per salvare il valore di value nel menu a tendina
        let tipo_selezionato = $(".tendina").val();

        // Svuto nel DOM il contenitore delle icone
        $(".container-all-icons").empty();

        // Se l'utente ha selezionato qualcosa di diverso da stringa vuota
        if(tipo_selezionato != " ") {

            // Creo una nuova varibile scelta che filtra l'array icone e mi restituisce che tipo_selezionato deve essere uguale a ogni singolo oggetto con la varibile tipo
            const scelta_icone = icone.filter((icona) => {
                return tipo_selezionato == icona.tipo;
            });
            // Faccio un ciclo foreach per ciclare il nuovo array creato da filter dove ci sono sono SOLO le icone con il tipo selezionato dall'utente
            scelta_icone.forEach((icona) => {
                stampo_icone(icona);
            });

        }else{
            // Se l'utente ha selezionato la voce tutte le icone allora siccome precedentemente abbiamo svuotato il suo contenitore dobbiamo stamparle tutte nuovamente
            stampo_all_icone(icone);
        }

    });

    // Creo una funzione generica per stampare nuovamente le icone in pagina utilizzando la funzione stampo_icone
    function stampo_all_icone(icone_array) {
        icone_array.forEach((element) => {
            stampo_icone(element);
        });
    }

    // Creo una funzione generica per stampare le icone in pagina con il loro indice di colore
    function stampo_icone(element){

        // Destrutturo le chiavi di ogni oggetto per renderele varibili
        const {nome, prefisso, famiglia, tipo} = element;

        // Creo una nuova varibile che indica l'indice dell'array tipi icone
        const tipo_index = tipi_icone.indexOf(tipo);

        // Creo una nuova variabile che dell'array colori prende l'indice dall'array tipo
        const colori_icone = colori[tipo_index];

        // Stampo in pagina le icone con l'aiuto delle varibili ricavate dalla destrutturazione
        $(".container-all-icons").append(`
           <div class="icone">
              <i class="${famiglia} ${prefisso}${nome} fa-2x" style="color:${colori_icone}"></i>
              <span>${nome}</span>
           </div>
       `);
    }


});
