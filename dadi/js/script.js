function lancioDadi() {
    // 1. Creo numero random per l'utente
    var dadoUtente = Math.floor(Math.random() * 6);
    document.getElementById("dadoUtente").innerHTML = dadoUtente;
    // 2. Creo numero random per il computer
    var dadoComputer = Math.floor(Math.random() * 6);
    document.getElementById("dadoComputer").innerHTML = dadoComputer;
    // 3. Verifico il vincitore
    if (dadoUtente > dadoComputer) {
        document.getElementById("vincitore").innerHTML = "Il vincitore sei tu!!";
    } else if (dadoComputer > dadoUtente) {
        document.getElementById("vincitore").innerHTML = "Peccato il vincitore è il computer.";
    } else {
        document.getElementById("vincitore").innerHTML = "Parità, nesun vincitore.";
    }
}