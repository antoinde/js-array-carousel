//dichiarazione dell'array
const images=['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

//punto al contenitore su html
const imgContainer = document.querySelector('.imgContainer');

// cancellare il contenuto presente nel contenitore su html
imgContainer.innerHTML = '';

//dobbiamo sapere quale immagine è attiva (la prima dell'array)
let activeImg = 0;

//[open]generiamo nuovo innerHTML con l'array

    let htmlContent = '';

    for(let i = 0; i < images.length; i++){

        //se incontro l'immagine che voglio attivare
        let addActive = '';
        if (i === activeImg){
            //aggiungo pure la classe active
            addActive = ' active';
        }

        //aggiungo di volta in volta tutte le immagini
        htmlContent += `<img class="item${addActive}" src="img/${images[i]}" alt="${images[i]}" />`
    }
    //aggiungi elementi su html
    imgContainer.innerHTML = htmlContent;

//[close] generiamo nuovo innerHTML con l'array



// [open] CLICK SUL PULSANTE next-button

//punto sul pulsante
const nextButton = document.getElementById('next-button');

//evento sul pulsante
nextButton.addEventListener('click', function(){

    //se ci sono ancora immagini dopo l'immagine attiva
    if(activeImg < images.length-1){
        //punto all'immagine successiva
        activeImg++;
    }
    //altrimenti ritorna da capo (infinite scroll)
    else
    {
        activeImg = 0;
    }
    
    /* Generiamo un nuovo inner html dall'array
    aggiungendo la classe .active all'immagine attiva */
    let htmlContent = '';
    for(let i = 0; i < images.length; i++){
        
        //se incontro l'immagine che voglio attivare
        let addActive = '';
        if (i === activeImg){
             //aggiungo pure la classe active
            addActive = ' active';
        }
         //aggiungo di volta in volta tutte le immagini
        htmlContent += `<img class="item${addActive}" src="img/${images[i]}" alt="${images[i]}" />`
    }
    //aggiungi elementi su html
    imgContainer.innerHTML = htmlContent;
});
// [close] CLICK SUL PULSANTE next-button

// [open] CLICK SUL PULSANTE previous-button

//punto sul pulsante
const previousButton = document.getElementById('previous-button');

//evento sul pulsante
previousButton.addEventListener('click', function(){

    //se ci sono ancora immagini prima dell'immagine attiva
    if(activeImg > 0){
        //punto all'immagine precedente
        activeImg--;
    }
    //altrimenti vai all'ultima (infinite scroll)
    else
    {
        activeImg = images.length-1;
    }
    
    /* Generiamo un nuovo inner html dall'array
    aggiungendo la classe .active all'immagine attiva */
    let htmlContent = '';
    for(let i = 0; i < images.length; i++){
        
        //se incontro l'immagine che voglio attivare
        let addActive = '';
        if (i === activeImg){
             //aggiungo pure la classe active
            addActive = ' active';
        }
         //aggiungo di volta in volta tutte le immagini
        htmlContent += `<img class="item${addActive}" src="img/${images[i]}" alt="${images[i]}" />`
    }
    //aggiungi elementi su html
    imgContainer.innerHTML = htmlContent;
});
// [close] CLICK SUL PULSANTE previous-button