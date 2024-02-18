//Validerte verdier

let filmV = false;
let antallV = false;
let fornavnV = false;
let etternavnV = false;
let telefonnrV = false;
let emailV = false;




const antallRegEx = /^[1-9][0-9]?$|^100$/;
const navnRegEx = /^([a-zA-Z-]{1,20})/;
const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

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

function innhentingAvInput(){

    const film = document.getElementById("film-select").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonnr").value;
    const email = document.getElementById("email").value;

    validering(film,antall,fornavn,etternavn,telefonNr,email)
}

function validering(fl,at,fn,en,tn,ep){

    if(fl === "1"){
        filmFeil()
        filmV = false;
    } else{
        filmV = true;
        console.log("film")
    }
    if (antallRegEx.test(at)){
        antallV = true;
        console.log("antall")
    } else{
        antallFeil();
    }

    if (navnRegEx.test(fn)){
        fornavnV = true;
        console.log("fornavn")
    } else {
        fornavnFeil()
    }
    if (navnRegEx.test(en)){
        etternavnV = true;
        console.log("etternavn")
    } else {
        etternavnFeil()
    }

    if (telefonRegEx.test(tn)){
        telefonnrV = true;
        console.log("telefon")
    } else {
        telefonNrFeil()
    }

    if (emailRegEx.test(ep)){
        emailV = true;
        console.log("email")
    }else {
        emailFeil()
    }

    if (filmV === true && antallV === true && fornavnV === true && etternavnV === true && telefonnrV === true && emailV === true){
        registreringAvBillett(fl,at,fn,en,tn,ep)
    } else{
        alert("fakk")
    }
}

function filmFeil(){

}
function antallFeil(){

}
function fornavnFeil(){

}
function etternavnFeil(){

}
function telefonNrFeil(){

}
function emailFeil(){

}
function slettBilletter(){
    billettListe.length = 0;
    visBilletter();

}

function visBilletter(){
    // skriv ut
    let ut = "<table class='table'><tr>" +
        "<th>Film</th><th>Antall Biletter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Email</th>" +
        "</tr>";
    for (let p of billettListe){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn + "</td><td>" + p.etternavn  + "</td><td>" + p.telefonNr  + "</td><td>" + p.epost + "</td>";
        ut+="</tr>";
    }
    console.log(billettListe)
    document.getElementById("billettListe").innerHTML=ut;
    ryddForm();
}

function ryddForm(){
    const form = document.getElementById("billettSkjema");
    const filmSelect = document.getElementById("film-select");

    const filmFeilTekst = document.getElementById("FilmValidering").style.display = "none";
    const antallFeilTekst = document.getElementById("antall-validering").style.display = "none";
    const fornavnFeilTekst = document.getElementById("fornavn-validering").style.display = "none";
    const etternavnFeilTekst = document.getElementById("etternavn-validering").style.display = "none";
    const telefonFeilTekst = document.getElementById("telefonnr-validering").style.display = "none";
    const emailFeilTekst = document.getElementById("email-validering").style.display = "none";

    filmV = false;
    antallV = false;
    fornavnV = false;
    etternavnV = false;
    telefonnrV = false;
    emailV = false;

    form.reset();
    filmSelect.selectedIndex = 0;
}