// Déclarations de mes différents regex
var alpha = /(^[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
// regex demandant une première lettre en majuscule plus tout les caractères spéciaux ensuite
var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
// regex controlant les adresses mails , on autorise tout les carctères alphanumériques
// ainsi que ". et -" on dis qu'il faut @ ensuite plus au moins 1 caractère alphabétique
// puis un point suivi de 2 ou 3 caractères alphabétiques
var birth = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
// Ce regex est pour les dates américaines car c'est la valeur renvoyer par la balise
// de l'input type date .On demande ainsi les 4 chiffres de l'année suivi d'un "-",puis
// on controle les 2 chiffres correspondant au mois suivi d'un "-" et enfin les 2 chiffres
// correspondant au jour
var cp = /(^[0-9]{5}$)|^$/;
// regex controlant le code postal, on controle s'il y a bien 5 chiffres et uniquemnt des chiffres
// et une prise en compte du champ vide car non obligatoire
var adr = /(^[0-9]+[a-zA-Z-\s]+$)|^$/;
// regex controlant l'adresse , il doit y avoir au moins 1 chiffre suivi de au moins
// 1 caractère alphabétique et une prise en compte du champ vide car non obligatoire
var city = /(^[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/;
// regex controlant la ville , le meme que alpha mais prenant en compte un champ vide car non obligatoire

// Recuperation des id pour les messages d'erreurs
var errSoc = document.getElementById("errSoc");
var errPersonne = document.getElementById("errPersonne");
var errAdr = document.getElementById("errAdr");
var errCP = document.getElementById("errCP");
var errVille = document.getElementById("errVille");
var errMail = document.getElementById("errMail");
var errSelect = document.getElementById("errSelect");
var errAccept = document.getElementById("errAccept");
var errEnv = document.getElementById("errEnv");

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Societe
function verifSoc(societe) {
    if (societe == "") {
        errSoc.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner ce champs</h6>";
        event.preventDefault();
    }
    else if (!alpha.test(societe)) {
        errSoc.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Utilisez uniquement des caractères alphabétiques</h6>";
        event.preventDefault();
    }
    else {
        errSoc.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";

    }
};

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Personne a contacter
function verifPersonne(personne) {
    if (personne == "") {
        errPersonne.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner ce champs</h6>";
        event.preventDefault();
    }
    else if (!alpha.test(personne)) {
        errPersonne.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Utilisez uniquement des caractères alphabétiques</h6>";
        event.preventDefault();
    }
    else {
        errPersonne.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";
    }
};

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Adresse
function verifAdr(adresse) {
    if (adresse == "") {
        errAdr.innerHTML = "";
    }
    else if (!adr.test(adresse)) {
        errAdr.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner une adresse valide</h6>";
        event.preventDefault();
    }
    else {
        errAdr.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";
    }
};

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Code postal
function verifCP(codepost) {
    if (codepost == "") {
        errCP.textContent = "";
    }
    else if (!cp.test(codepost)) {
        errCP.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner un code postal valide</h6>";;
        errCP.style.color = "crimson";
        event.preventDefault();
    }
    else {
        errCP.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";
    }
};

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Ville
function verifCity(ville) {
    if (ville == "") {
        errVille.textContent = "";
    }
    else if (!city.test(ville)) {
        errVille.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner une ville valide</h6>";
        event.preventDefault();
    }
    else {
        errVille.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";
    }
};

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Mail
function verifMail(email) {
    if (email == "") {
        errMail.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner ce champs</h6>";
        event.preventDefault();
    }
    else if (!mail.test(email)) {
        errMail.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner un mail valide</h6>";
        event.preventDefault();
    }
    else {
        errMail.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";
    }
};

// Declarartion de la fonctions de controle des valeurs rentre dans le champs Envirronement du projet
function verifEnv(envir) {
    if (envir == "") {
        errEnv.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez renseigner ce champs</h6>";
        event.preventDefault();
    }
    else if (!alpha.test(envir)) {
        errEnv.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Certains caracteres sont invalides</h6>";
        event.preventDefault();
    }
    else {
        errEnv.innerHTML = "<h6 class=\"alert alert-success\" role=\"alert\">Ok</h6>";
    }
};
// Recuperation de l'id du bouton envoyer
var check = document.getElementById('envoie');
// Ajout de l'evenement click sur le bouton envoyer
check.addEventListener("click", function verif(event) {
    // Recuperation des valeurs rentre dans chaque champs du formulaire
    var societe = document.getElementById("societe").value;
    var personne = document.getElementById("personne").value;
    var codepost = document.getElementById("codepost").value;
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("mail").value;
    var accept = document.getElementById("accept").checked;
    var envir = document.getElementById("envir").value;

    // Execution des fonctions de controle definit plus haut
    verifSoc(societe);
    verifPersonne(personne);
    verifAdr(adresse);
    verifCP(codepost);
    verifCity(ville);
    verifMail(email);
    verifEnv(envir);
    // Controle de l'acceptation du traitement informatique du formulaire 
    if (accept == false) {
        errAccept.innerHTML = "<h6 class=\"alert alert-danger\" role=\"alert\">Veuillez cocher cette case</h6>";
        event.preventDefault();
    }
    else {
        errAccept.textContent = "";
    }
});

// Recuperation de l'id select
var environnement = document.getElementById('select');
// Ajout de l'evenement Change a l'id select + Declaration de la fonction 
// permettanr d'ajouter la valeurs selectionne dans la textarea
environnement.addEventListener("change", function () {
    var select = document.getElementById("select").value;
    if (select != 1) {
        document.getElementById("envir").textContent += select + "\n";
    }
});