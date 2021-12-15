// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// Bonus:
// In una cartella bonus:
// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.

const container = new Vue(
    {
        el: '#container',
        data: {
            message: 'lorem ipsum e anche un pò di più!',
            image: 'img/nine-300x300-halloween-web-banners-260nw-84800977.jpg'
        },
    }
);