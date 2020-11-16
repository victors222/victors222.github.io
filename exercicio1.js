function chamaFuncao(){
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;
	op1=parseInt(op1);
	op2=parseInt(op2);

	var resultado=soma(op1, op2);
	alert( resultado);
}

function soma(ope1, ope2){
	return ope1 + ope2;
}