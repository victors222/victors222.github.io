
function chamaFuncao(){
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;
	op1=parseInt(op1);
	op2=parseInt(op2);

	var resultado=hipotenusa(op1, op2);
	alert(resultado);
}

function hipotenusa(ope1, ope2){
   return Math.hypot(ope1, ope2);
   
    
}