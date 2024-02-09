







// Exemple de données d'articles (vous pouvez remplacer cela par vos propres données)
const products = [
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/1.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/2.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/3.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/4.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/5.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/6.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/7.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/8.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/9.jpeg', details: 'sav' },
  { gender: 'enfant', name: 'sac au dos', image: 'static/Images/sacs/enfant/10.jpeg', details: 'sav' },

  { gender: 'homme', name: 'sac homme cur', image: 'static/Images/sacs/grand/sacHomme/cur/1.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme cur', image: 'static/Images/sacs/grand/sacHomme/cur/2.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme cur', image: 'static/Images/sacs/grand/sacHomme/cur/3.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme cur', image: 'static/Images/sacs/grand/sacHomme/cur/4.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme cur', image: 'static/Images/sacs/grand/sacHomme/cur/5.jpeg', details: 'sav' },

  { gender: 'homme', name: 'sac homme tissu', image: 'static/Images/sacs/grand/sacHomme/tissu/1.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme tissu', image: 'static/Images/sacs/grand/sacHomme/tissu/2.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme tissu', image: 'static/Images/sacs/grand/sacHomme/tissu/3.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme tissu', image: 'static/Images/sacs/grand/sacHomme/tissu/4.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme tissu', image: 'static/Images/sacs/grand/sacHomme/tissu/5.jpeg', details: 'sav' },
  { gender: 'homme', name: 'sac homme tissu', image: 'static/Images/sacs/grand/sacHomme/tissu/6.jpeg', details: 'sav' },

  { gender: 'femme', name: 'sac femme cur', image: 'static/Images/sacs/grand/sacFemme/sacCur/1.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme cur', image: 'static/Images/sacs/grand/sacFemme/sacCur/2.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme cur', image: 'static/Images/sacs/grand/sacFemme/sacCur/3.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme cur', image: 'static/Images/sacs/grand/sacFemme/sacCur/4.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme cur', image: 'static/Images/sacs/grand/sacFemme/sacCur/5.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme cur', image: 'static/Images/sacs/grand/sacFemme/sacCur/6.jpeg', details: 'sav' },

  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/1.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/2.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/3.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/4.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/5.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/6.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/7.jpeg', details: 'sav' },
  { gender: 'femme', name: 'sac femme tissu', image: 'static/Images/sacs/grand/sacFemme/sacTissu/8.jpeg', details: 'sav' },
  
  
  
  
  
  
];

// Fonction pour mettre à jour l'affichage en fonction du filtre et de la recherche
/*function updateDisplay() {
  const genderSelect = document.getElementById('gender');
  const searchInput = document.getElementById('search');
  const selectedGender = genderSelect.value.toLowerCase();
  const searchTerm = searchInput.value.toLowerCase();
  const productsContainer = document.getElementById('products-container');

  // Filtre les produits en fonction du genre sélectionné
  const filteredByGender = (selectedGender === 'tous')
    ? products
    : products.filter(product => product.gender === selectedGender);

  // Filtre les produits en fonction de la recherche par nom
  const filteredBySearch = filteredByGender.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Affiche les produits filtrés
  productsContainer.innerHTML = '';

  filteredBySearch.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <h3>${product.name}</h3>

      <img src="${product.image}" alt="${product.name}" onclick="showDetails('${product.details}')">
      <p>${product.details}</p>
    `;
    productsContainer.appendChild(productElement);
   
  });
}*/

function updateDisplay() {
  const genderSelect = document.getElementById('gender');
  const searchInput = document.getElementById('search');
  const selectedGender = genderSelect.value.toLowerCase();
  const searchTerm = searchInput.value.toLowerCase();
  const productsContainer = document.getElementById('products-container');

  // Filtre les produits en fonction du genre sélectionné
  const filteredByGender = (selectedGender === 'tous')
    ? products
    : products.filter(product => product.gender === selectedGender);

  // Filtre les produits en fonction de la recherche par nom
  const filteredBySearch = filteredByGender.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  // Affiche les produits filtrés
  productsContainer.innerHTML = '';

  filteredBySearch.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}" onclick="showDetails('${product.details}')">
      <p>${product.details}</p>
      
      <!-- Boutons Ajouter au Panier et Retirer du Panier -->

      <button onclick="ajouterAuPanier('Produit 2', 15.50)">Ajouter au Panier</button>
      <button onclick="retirerDuPanier('Produit 2')">Retirer du Panier</button>

      

    `;
    
    productsContainer.appendChild(productElement);
  });
}

// Fonction pour ajouter un produit au panier
function addToCart(productName) {
  // Logique pour ajouter le produit au panier
  console.log(`Produit ajouté au panier : ${productName}`);
}

// Fonction pour retirer un produit du panier
function removeFromCart(productName) {
  // Logique pour retirer le produit du panier
  console.log(`Produit retiré du panier : ${productName}`);
}



//function toggleProductSize(clickedElement) {
  function toggleProductSize() {
  //document.getElementById('maDiv').addEventListener('click', );
   document.querySelectorAll('.product').addEventListener('click', toggleProductSize());
  clickedElement=document.querySelector('.product')
 // Si la classe 'enlarged' est présente, cela signifie que la div est agrandie
  const isEnlarged = clickedElement.classList.contains('enlarged');

  if (!isEnlarged) {
    // Agrandir la taille de la div cliquée
    clickedElement.classList.add('enlarged');

    // Masquer les autres divs
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      if (product !== clickedElement) {
        product.style.display = 'none';
      }
    });
  } else {
    // Retourner à la taille normale de la div cliquée
    clickedElement.classList.remove('enlarged');

    // Afficher toutes les divs
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      product.style.display = 'block';
    });
  }

  
}


// Initialise l'affichage lors du chargement de la page
window.onload = updateDisplay;
// Structure de données pour représenter le panier


var panier = [];

function ajouterAuPanier(nomProduit, prixProduit) {
  var nouvelArticle = {
    nom: nomProduit,
    prix: prixProduit
  };

  panier.push(nouvelArticle);

  afficherPanier();
  calculerEtAfficherSommePanier();
}

function retirerDuPanier(nomProduit) {
  var index = panier.findIndex(article => article.nom === nomProduit);

  if (index !== -1) {
    panier.splice(index, 1);
  }

  afficherPanier();
  calculerEtAfficherSommePanier();
}

function afficherPanier() {
  var listePanier = document.getElementById('panier-liste');
  listePanier.innerHTML = '';

  panier.forEach(function(article) {
    var listItem = document.createElement('li');
    listItem.textContent = article.nom + ' - $' + article.prix.toFixed(2);
    listePanier.appendChild(listItem);
  });
}

function calculerSommePanier() {
  var somme = 0;

  panier.forEach(function(article) {
    somme += article.prix;
  });

  return somme;
}

function afficherSommePanier() {
  var sommePanierElement = document.getElementById('sommePanier');
  sommePanierElement.textContent = 'Somme totale dans le panier : $' + calculerSommePanier().toFixed(2);
}

function calculerEtAfficherSommePanier() {
  afficherSommePanier();
}


// Attacher les fonctions de retrait du panier aux divs correspondantes
document.getElementById('retirerProduct1').onclick = function() {
  retirerDuPanier('Produit 1');
};



