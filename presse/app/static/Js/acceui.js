let panier = [];

let search = document.querySelector('.search-box');




function updateFilter() {
    const genderFilter = document.getElementById('genderFilter').value.toLowerCase();
    const nameFilter = document.getElementById('nameFilter').value.toLowerCase();

    const productsContainer = document.getElementById('products-container');
    const productBoxes = document.querySelectorAll('.box');

    productBoxes.forEach(productBox => {
        const gender = productBox.getAttribute('data-gender').toLowerCase();
        const name = productBox.getAttribute('data-name').toLowerCase();

        const isGenderMatch = (genderFilter === 'tous' || gender === genderFilter);
        const isNameMatch = name.includes(nameFilter);

        if (isGenderMatch && isNameMatch) {
            productBox.style.display = 'block';
        } else {
            productBox.style.display = 'none';
        }
    });
}




// Fonction pour ajouter un produit au panier
function ajouterAuPanier(nomProduit, prixProduit) {
  // Récupérer le panier depuis localStorage
  let panier = JSON.parse(localStorage.getItem('panier')) || [];

  // Ajouter le produit au panier
  panier.push({ nom: nomProduit, prix: prixProduit });

  // Enregistrer le panier mis à jour dans localStorage
  localStorage.setItem('panier', JSON.stringify(panier));

  // Alert pour informer l'utilisateur
  alert(`Produit ajouté au panier: ${nomProduit}`);

  // Mettre à jour l'affichage du montant total après l'ajout d'un produit
  afficherMontantTotal();
}



function calculerNombreElementsPanier() {
  let nombreElements = panier.length;
  // Mettez à jour le contenu de la balise <span> avec le nombre d'éléments dans le panier
  document.querySelector('.bx-cart-alt span').textContent = nombreElements;
}
// Appel initial pour mettre à jour le nombre d'éléments au chargement de la page
calculerNombreElementsPanier();


document.querySelector('.bx-cart-alt').addEventListener('click', function() {
  // Redirigez vers la page panier
  window.location.href = '/panier';
});
