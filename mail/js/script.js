function accessoMail() {
    // 1. Richiesta della mail dell'utente
    var emailUtente = document.getElementById("emailUtente").value;
    console.log(emailUtente);
    // 2. Dichiaro le email autorizzate
    var emailAutorizzate = ["lorenzorru@gmail.com", "samuelemadrigali@libero.it", "alessandrolodigiani@yahoo.it", "fabriziomastrobattista@gmail.com"];
    // 3. Verifico che l'utente sia autorizzato
    var verifica = 0;
    for (var i = 0; i < emailAutorizzate.length; i++) {
        console.log(emailAutorizzate[i]);
        if (emailUtente == emailAutorizzate[i]) {
            verifica++;
        }
    }
    // 4. Stampo all'utente il risultato
    if (verifica==0) {
        document.getElementById("accesso").innerHTML = "Accesso negato, riprova dopo aver ricaricato la pagina";
    } else {
        document.getElementById("accesso").innerHTML = "Accesso effettuato";
    }
}