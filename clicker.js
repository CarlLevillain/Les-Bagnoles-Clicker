
// Score
let score = 0

// Cout
let coutperclick = 100
let grandmacout = 500
let farmcout = 1000
let minecout = 10000

// Point par clic
let cpc = 1
let cps = 0

// Amélioration de cps
let grandmaclick = 1 
let farmclick = 5
let mineclick = 20

// Random text

let randomtext1 = ['Le nouveau Mcqueen', 'KACHOW!!', 'Pâtes carbo > Pâtes bolo', 'La Piston Cup, le retour']



// Fonction auto

setInterval(function(){
    score = score+ cps
    document.getElementById('score_total').innerHTML = Math.round(score) + ' McMiles';
},1000)

// Fonction cookie

function clickfunction(){
    score += cpc
    document.getElementById('score_total').innerHTML = Math.round(score) + ' McMiles';    
};

// Bouton  clic + 1

function upclick(){
    if (score >= coutperclick) { 
        cpc = cpc*1.5; 
        score = score - coutperclick;
        coutperclick = coutperclick*2
        score += cpc
        document.getElementById('score_total').innerHTML = Math.round(score) + ' McMiles';
        document.getElementById('multiclick').innerHTML =  Math.round(coutperclick) + ' McMiles </br>X1,5';
        document.getElementById('cookieparclic').innerHTML = Math.round(cpc) ;
        var bruit = new Audio();
        bruit.src = "Musique/Kachow.mp3";
        bruit.play();
    }
    else{
        alert("C'est bien de trop cher !!!")
        var bruit = new Audio();
        bruit.src = "Musique/SadTrombone.mp3";
        bruit.play();
    };
    
};

// Bouton auto + 1

function grandma(){
    if (score >= grandmacout) { 
        cps = cps + grandmaclick; 
        score = score - grandmacout;
        grandmacout = grandmacout*1.5
        document.getElementById('score_total').innerHTML = Math.round(score) + ' McMiles';
        document.getElementById('grandmaclick').innerHTML =  Math.round(grandmacout) + ' McMiles </br>+1/s';
        document.getElementById('cookieparseconde').innerHTML = Math.round(cps) ;
        var bruit = new Audio();
        bruit.src = "Musique/Kachow.mp3";
        bruit.play();
    }
    else{
        alert("C'est bien de trop cher !!!")
        var bruit = new Audio();
        bruit.src = "Musique/SadTrombone.mp3";
        bruit.play();
    };
};

// Bouton auto + 5

function farm(){
    if (score >= farmcout) { 
        cps = cps + farmclick; 
        score = score - farmcout;
        farmcout = farmcout*1.5
        document.getElementById('score_total').innerHTML = Math.round(score) + ' McMiles';
        document.getElementById('farmclick').innerHTML =  Math.round(farmcout) + ' McMiles </br>+5/s';
        document.getElementById('cookieparseconde').innerHTML = Math.round(cps) ;
        var bruit = new Audio();
        bruit.src = "Musique/Kachow.mp3";
        bruit.play();
    }
    else{
        alert("C'est bien de trop cher !!!")
        var bruit = new Audio();
        bruit.src = "Musique/SadTrombone.mp3";
        bruit.play();
    };
};


// Bouton auto + 20

function mine(){
    if (score >= minecout) { 
        cps = cps + mineclick; 
        score = score - minecout;
        minecout = minecout*1.5
        document.getElementById('score_total').innerHTML = Math.round(score) + ' McMiles';
        document.getElementById('mineclick').innerHTML =  Math.round(minecout) + ' McMiles </br>+20/s';
        document.getElementById('cookieparseconde').innerHTML = Math.round(cps) ;
        var bruit = new Audio();
        bruit.src = "Musique/Kachow.mp3";
        bruit.play();
    }
    else{
        alert("C'est bien de trop cher !!!")
        var bruit = new Audio();
        bruit.src = "Musique/SadTrombone.mp3";
        bruit.play();
    };
};

// Icone prix

let iconemartin = document.getElementById('martin')
let iconesally = document.getElementById('sally')
let iconedoc = document.getElementById('doc')
let iconeguido = document.getElementById('guido')

// Martin

setInterval(function(){
    if (coutperclick>score) {
        iconemartin.style.border = "2px solid red";  
    }
    else{
        iconemartin.style.border = "2px solid green";
    };
},100)



// Sally
setInterval(function(){
    if (score>=grandmacout) {
        iconesally.style.border = "2px solid green"
        console.log('sally');    
    }
    else{
        iconesally.style.border = "2px solid red"
    }
    
},100)

// Doc Hudson
setInterval(function(){
    if (score>=farmcout) {
        iconedoc.style.border = "2px solid green"
        console.log('doc');    
    }
    else{
        iconedoc.style.border = "2px solid red"
    }
    
},100)


// Guido
setInterval(function(){
    if (score>=minecout) {
        iconeguido.style.border = "2px solid green"
        console.log('guido');    
    }
    else{
        iconeguido.style.border = "2px solid red"
    }
    
},100)
