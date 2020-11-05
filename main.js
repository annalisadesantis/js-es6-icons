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

    // Creo un ciclo foreach per ciclare l'array icone
    icone.forEach((icona) => {

        // Destrutturo il singolo oggetto per ricavare le chiavi come varibiali
        const {nome, prefisso, famiglia} = icona;

        // Stampo in pagina le icone con l'aiuto delle varibili ricavate dalla destrutturazione
        $(".container-all-icons").append(`
           <div class="icone">
              <i class="${famiglia} ${prefisso}${nome} fa-2x"></i>
              <span>${nome}</span>
           </div>
       `);

    });


});
