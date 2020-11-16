function chamaFuncao(){
	var cfabr=document.getElementById("entrada1").value;
	
	cfabr=parseInt(cfabr);
	

	var resultado=custofinal(cfabr );
	alert( + resultado+"E o novo custo final" );
}

function custofinal(ope1 ){
    return ope1+((ope1/100)*73)
    
}