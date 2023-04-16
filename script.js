//dichiaro variabili eta, km e eurokm 
//dichiaro un prezzo base e scrivo la formula
//if(eta<18) sconto 20%
//else if(eta>65) sconto 40%
//al click if(eta<18) riempi prezzoscontato
//else if(eta>65) riempi prezzoscontato
// else reimpi prezzobase
//let eta = document.querySelector('.var-1');
const eurokm = 0.21;
const smin = 0.8;
const svec = 0.6;
const inputEta = document.getElementById('etaid');
const inputkm = document.getElementById('kmid');
const poutput = document.querySelector('.prezzbase');
const psoutput = document.querySelector('.prezzoscontato');

const btn = document.getElementById('btnid');
btn.addEventListener('click',
function(){
    const eta = parseInt(inputEta.value);
    const km = parseFloat(inputkm.value);
    console.log(inputEta);
    console.log(inputkm);
    let price = km * eurokm;
    console.log(price);
    poutput.innerHTML = price;
    if (eta < 18){
        price = price * smin;
        psoutput.innerHTML = price;
    }
    else if(eta > 65){
        price = price * svec;
        psoutput.innerHTML = price;
    }
    else{

        psoutput.innerHTML = "nessuno sconto";
    }

})











