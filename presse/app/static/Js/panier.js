// Declanche les fonction au chargement

document.addEventListener('DOMContentLoaded', function () {
    afficherProduitsPanier(); 
    afficherMontantTotal();
    calculerSommePrixPanier();
    compterOccurrencesProduit(nomProduit);
});


// Récupérer le panier depuis le localStorage
let panier = JSON.parse(localStorage.getItem('panier')) || [];




function supprimerDuPanier(nomProduit) {
    // Recherchez l'index du produit dans le panier
    const index = panier.findIndex(produit => produit.nom === nomProduit);

    // Si le produit est trouvé, supprimez-le du panier
    if (index !== -1) {
        panier.splice(index, 1);

        // Sauvegarder le panier mis à jour dans localStorage
        localStorage.setItem('panier', JSON.stringify(panier));

        // Mettez à jour l'affichage du panier après la suppression d'un produit
        afficherProduitsPanier();

        // Mettez à jour l'affichage du montant total après la suppression d'un produit
        afficherMontantTotal();

        calculerSommePrixPanier();
    }
}



function afficherProduitsPanier() {
    const panierContainer = document.getElementById('panier-container');
    panierContainer.innerHTML = '';  // Efface le contenu actuel du conteneur du panier

    // Réaffiche chaque produit dans le panier
    panier.forEach(produit => {
        const produitDiv = document.createElement('div');
        produitDiv.classList.add('produit');
        produitDiv.innerHTML = `
            
            <p><strong>${produit.nom}</strong></p>
            <p>${produit.prix} €</p>
            <button class="button-supprimer" onclick="supprimerDuPanier('${produit.nom}')">Retirer</button>
        `;
        panierContainer.appendChild(produitDiv);
    });
}

// Fonction pour calculer la somme des prix des produits dans le panier
function calculerSommePrixPanier() {
    let sommePrix = 0;

    for (let produit of panier) {
        sommePrix += parseInt(produit.prix) ;
    }

    return sommePrix;
}
// calcul le nombre d'occurence d'un produit

function compterOccurrencesProduit(nomProduit) {
    let occurrences = 0;

    for (let produit of panier) {
        if (produit.nom === nomProduit) {
            occurrences++;
        }
    }

    // Mettre à jour la div avec le résultat
    const occurrencesDiv = document.getElementById('occurrencesProduit');
    occurrencesDiv.textContent = `${nomProduit} (${occurrences})`;
}





// Fonction pour afficher la somme des prix et le nombre total de produits dans le panier
function afficherInfosPanier() {
    // Sélectionner l'élément HTML pour afficher la somme des prix et le nombre total
    let infosPanier = document.getElementById('infos-panier');
    
    // Calculer la somme des prix
    let sommePrix = calculerSommePrixPanier();

    // Afficher la somme des prix et le nombre total de produits
    infosPanier.innerHTML = `
        <p>Somme des prix: ${sommePrix} €</p>
       
    `;
}

// Appeler ces fonctions après l'ajout ou la suppression d'un produit
afficherProduitsPanier();
afficherInfosPanier();
calculerSommePrixPanier();

