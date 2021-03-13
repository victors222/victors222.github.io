function chamaFuncao(){
	var nota1=document.getElementById("entrada1").value;
    var nota2=document.getElementById("entrada2").value;
    var nota3=document.getElementById("entrada3").value;
	nota1=parseInt(nota1);
    nota2=parseInt(nota2);
    nota3=parseInt(nota3);

	var resultado=media(nota1, nota2, nota3);
	alert( +resultado + "É a media");
}

function media(ope1, ope2, ope3){
    return ((ope1*2)+(ope2*3)+(ope3*5))/10;
}