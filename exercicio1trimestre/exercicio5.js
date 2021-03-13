function chamaFuncao(){
	var salar=document.getElementById("entrada1").value;
	var reaju=document.getElementById("entrada2").value;
	salar=parseInt(salar);
	reaju=parseInt(reaju);

	var resultado=salario(salar, reaju);
	alert(  resultado );
}

function salario(ope1, ope2){
    return ope1+((ope1/100)*ope2)
    
}