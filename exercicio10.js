function chamaFuncao(){
	var nm=document.getElementById("entrada1").value;
	nm=parseInt(nm);
	

	var resultado=maca(nm);
	alert( +resultado + "É o custo total em reais");
}

function maca(ope1){
    if(ope1<12)
    return ope1*1.30;
    else
    return ope1;
   
    
}