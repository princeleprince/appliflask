

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


function supprimerProduit(produitId) {
    // Confirme avant de supprimer
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit?")) {
        // Envoie une requête POST au serveur Flask pour supprimer le produit
        fetch(`/supprimer_produit/${produitId}`, {
            method: 'POST',
        })
        .then(response => {
            if (response.ok) {
                // Rafraîchitla page après la suppression réussie
                location.reload();
            } else {
                alert("Une erreur s'est produite lors de la suppression du produit.");
            }
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du produit:', error);
            alert("Une erreur s'est produite lors de la suppression du produit.");
        });
    }
}

function modifierProduit(produitId) {
        // Redirige vers la page de modification en utilisant l'identifiant du produit
        window.location.href = `/modifierproduit`;
    }