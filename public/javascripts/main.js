// console.log('main.js');

// https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/

// Du JSON contenu sur les internets
/// ----------------

// Je récupère mon bouton
const leBoutonHTML = document.querySelector('#leBouton');
// Ca récup le div #retour
const retourHTML = document.querySelector('#retour');
// console.log(leBoutonHTML);

// Lorsque je clique dessus
leBoutonHTML.addEventListener('click', onClick);
// let idValue;
// let unNomDeFichier;

function onClick(event) {
    function leFetch() {
        fetch(unNomDeFichier)
        .then((response) => {
            console.log(response);
            // J'essaie de récupérer le bousin
            return response.json();
        })
        .then((data) => {
            // Si ça marche, le contenu est dans "data"
            console.log(data);
            
            let textAAfficher = "Pas de texte";
            if (data.card.text !== undefined){
                textAAfficher = `${data.card.text}` 
            }

            let typeAAfficher = "";
            if (data.card.type !== undefined){
                typeAAfficher = `${data.card.type}` 
            }

            let flavorAAfficher = "Pas de flavor text";
            if (data.card.flavor !== undefined){
                flavorAAfficher = `${data.card.flavor}` 
            }

            let CCMAAfficher = "Pas de CCM";
            if (data.card.manaCost !== undefined){
                CCMAAfficher = `${data.card.manaCost}`
            }

            retourHTML.innerHTML = 
            `<div>
                <div id="CCM" class="magicContent">
                    <p>
                        ${CCMAAfficher}
                    </p>    
                </div>
                <div class="magicContent">
                    <p>
                        ${typeAAfficher}
                    </p>
                </div>
                <div class="magicContent">
                    <p>    
                        ${textAAfficher}
                    </p>
                </div>
                <div id="textFlavor" class="magicContent">
                    <p>
                        ${flavorAAfficher}
                    </p>
                </div>
            </div>    
                `
            ;
        })
        .catch((erreur) => {
            // Y'a une erreur, l'erreur est dans "erreur"
            console.log(erreur);
        })
    }
        let idValue = Math.floor(Math.random()*(3100 - 1 + 1) + 1);
        let unNomDeFichier = "https://api.magicthegathering.io/v1/cards/" + idValue ;
        // On apelle le fetch
    
        leFetch();
}
