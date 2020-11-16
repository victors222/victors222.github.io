function chamaFuncao(){
	var op1=document.getElementById("entrada1").value;
	
	op1=parseInt(op1);
	

    var resultado=primo(op1);
    if(resultado==1)
    alert("E primo") ;
    else
    alert("nao e primo");
}


    function primo(ope1){
        var cont=2;
    for(var i= 1; i<=ope1/2; i++)
    if(ope1%i==0)
    cont++;
    if(cont==3)
    return 1;
    else
    return 2;

	
    
}