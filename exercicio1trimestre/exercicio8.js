function chamaFuncao(){
	var fht=document.getElementById("entrada1").value;
	fht=parseInt(fht);
	

	var resultado=temperatura(fht);
	alert( +resultado + "Graus Celsius");
}

function temperatura(ope1){
   return 5*((ope1-32)/9);
    
}