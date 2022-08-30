/*
    Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: 
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e 
un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per 
andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto.
 Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci 
potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo 
pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno 
commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
*/

const images=['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// cancellare il contenuto presente nel img-container
const imageContainer = document.querySelector('.img-container');

imageContainer.innerHTML = '';

//dobbiamo sapere quale immagine è attiva (la prima dell'array)
let activeImageIndex = 0;
console.log (images[activeImageIndex]);

// generiamo un nuovo innerHTML dall'array

//aggiungiamo la classe .active all'immagine attiva

for(let i=0; i < images.length; i++) {
    console.log(images[i]);
    console.log('indice immagine i: ', i, 'indice attivo: ', activeImageIndex);

    let classActiveName='';
    if(i===activeImageIndex){
        classActiveName=' active';
    }

    //aggiunge bottone freccia sù
    if(i===0)
        imageContainer.innerHTML += `<button id="previous">&uparrow;</button>`;

    //aggiungi tutte le immagini dentro img-container
    imageContainer.innerHTML += `<img class="item${classActiveName}" src="img/${images[i]}" alt="${images[i]}" />`;

    //aggiunge bottone freccia giù
    if(i===images.length-1)
        imageContainer.innerHTML += `<button id="next">&downarrow;</button>`;
}

//aggiungiamo l'interazione con i pulsanti
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', function(){
    console.log('Next button clicked!');

    // se c'è una immagine dopo quella attiva 
    if (activeImageIndex < images.length-1) {
        //passa a quella successiva
        activeImageIndex++;
    }
    // altrimenti ritorna all'inizio (per scorrere all'infinito)
    else{
        activeImageIndex = 0;
    }
})