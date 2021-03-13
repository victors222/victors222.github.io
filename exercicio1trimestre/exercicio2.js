function chamaFuncao(){
	var op1=document.getElementById("entrada1").value;
	var op2=document.getElementById("entrada2").value;
	op1=parseInt(op1);
	op2=parseInt(op2);

	var resultado=compara(op1, op2);
	alert( +resultado + "É maior");
}

function compara(ope1, ope2){
    if(ope1>ope2)
    return ope1;
    else
    return ope2;
    
}