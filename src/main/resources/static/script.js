//Validerte verdier

const antallV = "";
const fornavnV ="";
const etternavnV ="";
const telefonnrV = "";
const emailV = "";


    const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;
    const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;


let ut = "";

const billettListe=[];
function registreringAvBillett(fl,at,fn,et,tn,ep){

    const billett={
        film : fl,
        antall : at,
        fornavn :fn,
        etternavn:et,
        telefonNr:tn,
        epost:ep
    };
    billettListe.push(billett);
    visBilletter()
}

function valideringAvInput(){

    const film = document.getElementById("film-select").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonnr").value;
    const email = document.getElementById("email").value;

    if (emailRegEx.test(email)){
        console.log("ekte mail")
    }else {
        console.log("ikke ekte")
    }

    if(film === "1"){
        console.log("ikke Valgt")
    } else{
        console.log("valgt")
    }
    registreringAvBillett(film,antall,fornavn,etternavn,telefonNr,email);
}

function validering(){

}

function slettBilletter(){
    billettListe.length = 0;
    visBilletter();

}

function visBilletter(){
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall Biletter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Email</th>" +
        "</tr>";
    for (let p of billettListe){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn + p.etternavn + "</td><td>" + p.telefonNr + "</td>";
        ut+="</tr>";
    }
    console.log(billettListe)
    document.getElementById("billettListe").innerHTML=ut;
}