//TEXTE SOUS LES CHAMPS CACHE
var champVerif = document.querySelectorAll(".text-verif");
for (var i = 0; i < champVerif.length; i++) {
   var essai = champVerif[i];
   essai.style.visibility = "hidden";
}
var remplirObligatoire = document.querySelector(".cache");
remplirObligatoire.style.visibility = "hidden";

//VERIFICATION DU LOGIN
var textLogin = document.querySelector(".text-verif")
//Tableau des logins existants
var nom = ["Romain", "Luc", "Flora", "Marie", "Thang"];
//Sélection du champ login
var login = document.querySelector("#login");
//Pour vérifier que le champ login soit bien rempli/ Renvoi de la valeur.
var loginEnvoi = false;
//Fonction pour vérifier le login avec le tableau au retour d'un tapement de touche.
login.addEventListener("keyup", verifLogin);

function verifLogin() {
   for (var i = 0; i <= nom.length - 1; i) //Boucle pour récupérer les noms du tableau.
   {
      var nomTableau = nom[i];
      //Ce qui va permettre de voir si le Login existe ou pas dans le tableau
      if (login.value == nomTableau) {
         textLogin.style.visibility = "visible";
         loginEnvoi = false;
         i = nom.length;
      } else {//Si le login n'existe pas dans le tableau
         textLogin.style.visibility = "hidden";
         loginEnvoi = true
         i++;
      }
   }
}
//Pour que le login soit Ok et coloré. Renvoi la valeur TRUE pour le submit.
login.addEventListener("blur", LoginOK)

function LoginOK() {
   var loginRempli = login.validity.valueMissing
   if (loginRempli == false && loginEnvoi == true) { //Si le le champ login est bien rempli(loginRemppli)et si le champ n'est pas avec un login existant(loginEnvoi)
      login.classList.remove("novalid");
      login.classList.add("valid");
      loginSubmit = true;
      setTimeout(supprBorder, 2000)

      function supprBorder() {
         login.style.boxShadow = "none";
         login.style.transitionDuration = "2s";
      }
   } else {
      login.classList.add("novalid");
      loginSubmit = false;
      setTimeout(supprBorder, 2000)

      function supprBorder() {
         login.style.boxShadow = "none";
         login.style.transitionDuration = "2s";
      }
   }
}


//VERIFICATION DE L'ADRESSE MAIL
//Champ de l'email
var mail = document.querySelector("#mail");
//Pour vérifier que le champ mail soit bien rempli/ Renvoi de la valeur.
var mailEnvoi = false;
//Fonction pour vérifier si l'adresse mail contient le symbole @ et afficher le champ
mail.addEventListener("blur", verifMail);

function verifMail() {
   //Si l'email contient le symbole @
   var champ = mail.value.search("@");
   //Champ sous l'email
   var textVerif = document.getElementById("champverifMail")
   if (champ > 0) {
      textVerif.style.visibility = "hidden";
      mailEnvoi = true;
   } else {
      textVerif.style.visibility = "visible";
      mailEnvoi = false;
   }
}
//Pour que le mail soit Ok et coloré. Renvoi la valeur TRUE pour le submit.
mail.addEventListener("blur", MailOK);

function MailOK() {
   var mailRempli = mail.validity.valueMissing
   if (mailRempli == false && mailEnvoi == true) { //Si le le champ mail est bien rempli(mailRemppli)et si le champ possède bien une arobase(mailEnvoi)
      mail.classList.remove("novalid");
      mail.classList.add("valid");
      mailSubmit = true;
      setTimeout(supprBorder, 2000)

      function supprBorder() {
         mail.style.boxShadow = "none";
         mail.style.transitionDuration = "2s";
      }
   } else {
      mail.classList.add("novalid");
      mailSubmit = false;
      setTimeout(supprBorder, 2000)

      function supprBorder() {
         mail.style.boxShadow = "none";
         mail.style.transitionDuration = "2s";
      }
   }
}


//VERIFICATION DU MOT DE PASSE
//champ du mot de passe
var mdp = document.querySelector("#mdp");
var champmdp = mdp.value;
//Pour vérifier que le champ mot de passe soit bien rempli/ Renvoi de la valeur.
var mdpEnvoi = false;
//Vérification du mot de passe
mdp.addEventListener("keyup", verifMdp);

function verifMdp() {
   var textVerif = document.getElementById("champverifMdp")
   if (this.value.length < 8) {
      textVerif.innerHTML = "";
      if (textVerif.innerHTML.length > 0) {
         textVerif.appendChild(document.createTextNode(""))
      } else {
         textVerif.appendChild(document.createTextNode("Le mot de passe doit contenir entre 8 et 20 caractères."));
         textVerif.style.color = "black";
         mdpEnvoi = false;
      }
   } else if (this.value.length >= 8 && this.value.length <= 10) {
      textVerif.innerHTML = "";
      if (textVerif.innerHTML.length > 0) {
         textVerif.appendChild(document.createTextNode(""))
      } else {
         textVerif.appendChild(document.createTextNode("Mot de passe faible"));
         textVerif.style.color = "red";
         mdpEnvoi = true;
      }
   } else if (this.value.length >= 11 && this.value.length <= 14) {
      textVerif.innerHTML = "";
      if (textVerif.innerHTML.length > 0) {
         textVerif.appendChild(document.createTextNode(""))
      } else {
         textVerif.appendChild(document.createTextNode("Mot de passe moyen"))
         textVerif.style.color = "#DE711F";
         mdpEnvoi = true;
      }
   } else if (this.value.length >= 15 && this.value.length <= 20) {
      textVerif.innerHTML = "";
      if (textVerif.innerHTML.length > 0) {
         textVerif.appendChild(document.createTextNode(""))
      } else {
         textVerif.appendChild(document.createTextNode("Mot de passe correct"));
         textVerif.style.color = "green";
         mdpEnvoi = true;
      }
   }
}
//Pour que le mot de passe soit Ok et coloré. Renvoi la valeur TRUE pour le submit.
mdp.addEventListener("blur", MdpOK);

function MdpOK() {
   var mdpRempli = mdp.validity.valueMissing
   if (mdpRempli == false && mdpEnvoi == true) { //Si le le champ mail est bien rempli(mailRemppli)et si le champ possède bien une arobase(mailEnvoi)
      mdp.classList.remove("novalid");
      mdp.classList.add("valid");
      mdpSubmit = true;
      setTimeout(supprBorder, 2000)

      function supprBorder() {
         mdp.style.boxShadow = "none";
         mdp.style.transitionDuration = "2s";
      }
   } else {
      mdp.classList.add("novalid");
      mdpSubmit = false;
      setTimeout(supprBorder, 2000)

      function supprBorder() {
         mdp.style.boxShadow = "none";
         mdp.style.transitionDuration = "2s";
      }
   }
}

//VERIFICATION QUE TOUS LES CHAMPS SOIENT VALIDE ET AUTORISATION DU SUBMIT
//Bouton valider du formulaire
var bouttonForm = document.querySelector(".valide");
//Formulaire entier
var validForm = document.querySelector(".formulaire");

validForm.addEventListener("mousemove", veriForm);

function veriForm() {
   if (loginEnvoi == true && mailEnvoi == true && mdpEnvoi == true) {
      bouttonForm.type = "submit";
      bouttonForm.classList.remove("btn-outline-success")
      bouttonForm.classList.add("btn-success");
   } else {
      bouttonForm.type = "button";
      bouttonForm.classList.remove("btn-success")
      bouttonForm.classList.add("btn-outline-success");
   }
}
//Si quelqu'un appuie sur le bouton valider sans avoir rempli le formulaire
bouttonForm.addEventListener("click", alerts)

function alerts(ev) {
   ev.stopPropagation();
   remplirObligatoire.style.visibility = "visible";
}
var essai = login.validity;

