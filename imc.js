"use strict";

function imc() {
    let cpt=0;
    function calculImc(event){
        let poid=formulaire.elements[0].value;
        let maSection=document.getElementById("laSection");
        let body=document.body;

        let para=document.createElement("h1");
        let imc=(poid/(formulaire.elements[1].value)**2).toFixed(2);
        
        let text=document.createTextNode("Votre IMC est de "+imc);
        if (imc<18.5) {
            let reponse=document.createElement("H2");
            let txt=document.createTextNode("Vous êtes en maigreur !");
            reponse.append(txt);
            maSection.appendChild(reponse)
            body.style.backgroundColor="red";
        }
        if(18.5 <imc && imc<25){
            let reponse=document.createElement("H2");
            let txt=document.createTextNode("Corpulence normale");
            reponse.append(txt);
            maSection.appendChild(reponse)
            body.style.backgroundColor="green";
        }
        if(25 <imc && imc<30){
            console.log(imc)
            let reponse=document.createElement("H2");
            let txt=document.createTextNode("Surpoids !");
            reponse.append(txt);
            maSection.appendChild(reponse)
            body.style.backgroundColor="red";
        }
        if(30 <imc && imc<35){
            console.log(imc)
            let reponse=document.createElement("H2");
            let txt=document.createTextNode("Obésité modérée !!");
            reponse.append(txt);
            maSection.appendChild(reponse)
            body.style.backgroundColor="red";
        }
        if(35 <imc && imc<40){
            console.log(imc)
            let reponse=document.createElement("H2");
            let txt=document.createTextNode("Obésité sévère !!!");
            reponse.append(txt);
            maSection.appendChild(reponse)
            body.style.backgroundColor="red";
        }
        if(imc>40){
            console.log(imc)
            let reponse=document.createElement("H2");
            let txt=document.createTextNode("Obésité morbide ou massive !!!!");
            reponse.append(txt);
            maSection.appendChild(reponse)
            body.style.backgroundColor="red";
        }
        
        para.append(text);
        maSection.appendChild(para);
        event.preventDefault();
    }

    let formulaire=document.getElementById("selection");
    formulaire.addEventListener("submit",calculImc);
}