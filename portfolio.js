jQuery(document).ready( function($){


$(`#toggle`).on("click", function(){
	$(`.togglee`).toggleClass(`bo`)
})





$(`.move`).hover(function(){
	$(`.kopija`).slideToggle();
})

$(`.movedva`).hover(function(){
	$(`.kopijadva`).slideToggle();
})



$(`.movetri`).hover(function(){
	$(`.kopijatri`).slideToggle();
})












});









var imee = document.getElementById("ime");
var posta = document.getElementById("posta");
var infoo = document.getElementById("info");
var dugme = document.getElementById("btn");

dugme.addEventListener("click", validacija)

imee.addEventListener("focus", clear);
posta.addEventListener("focus", clear);
infoo.addEventListener("focus", clear);


function validacija () {



if (posta.value == "") {

    	posta.value="obavezno";
    	
    };


   

	
    

    
};



function clear() {
	this.value = "";
	
};
