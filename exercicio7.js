function chamaFuncao(){
    var sal=document.getElementById("entrada1").value;
    var numv=document.getElementById("entrada2").value;
    var vcv=document.getElementById("entrada3").value;
    var tv=document.getElementById("entrada4").value;
	
    sal=parseInt(sal);
    numv=parseInt(numv);
    vcv=parseInt(vcv);
    tv=parseInt(tv);
	

	var resultado=salariofinal(sal, numv, vcv, tv );
	alert(  +resultado+"E o salario final" );
}

function salariofinal(ope1, ope2, ope3, ope4 ){
    return ope1+((ope2 * ope3)+((ope4/100)*5))
}