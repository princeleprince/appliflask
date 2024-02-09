function supprimerUser(userId) {
    // Confirme  avant de supprimer
    if (confirm("Êtes-vous sûr de vouloir supprimer cet utlisateur?")) {
        // Envoye une requête POST au serveur Flask pour supprimer le produit
        fetch(`/supprimer_user/${userId}`, {
            method: 'POST',
        })
        .then(response => {
            if (response.ok) {
                // Rafraîchie la page après la suppression réussie
                location.reload();
            } else {
                alert("Une erreur s'est produite lors de la suppression de l'utilisateur.");
            }
        })
        .catch(error => {
            console.error("Erreur lors de la suppression de l'utilsateur:", error);
            alert("Une erreur s'est produite lors de la suppression de l'utilisateur.");
        });
    }
}