function validacao(){
    
    var error="";

    //testar se o campo nome encontra-se vazio
    var nome = document.querySelector('#exampleInputName1').value;
    if(nome=='' || nome==null){
        error+="Insira o seu Nome \n";
        document.querySelector(".nome").style.borderColor="red";
    }
     
    //testar se o campo email ou telefone encontra-se vazio
    var email = document.querySelector('#exampleInputEmail1').value;
    var telefone = document.querySelector('#exampleInputTel1').value;
    if((email==''|| email==null) && (telefone=='' || telefone==null)){
        error+="Insira o seu E-mail ou o seu Telefone/Celular \n";
        document.querySelector(".telefone").style.borderColor="red";
        document.querySelector(".email").style.borderColor="red";
    }
    
    //testar se o campo email encontra-se preenchido corretamente
    var validaremail =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(!validaremail.test(email) && (email!='')){
        error+="Insira um E-mail válido\n";
        document.querySelector(".email").style.borderColor="red";
    }

    //testar se o campo telefone encontra-se preenchido corretamente
    var validartelefone = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    if(!validartelefone.test(telefone) && (telefone!='')){
        error+="Insira um Telefone/Celular Válido \n";
        document.querySelector(".telefone").style.borderColor="red";
    }

    //testar se o campo assunto encontra-se vazio
    var assunto = document.querySelector('#exampleInputTopic1').value;
    if(assunto==''|| assunto==null){
        error+="Insira o seu Assunto \n";
        document.querySelector(".assunto").style.borderColor="red";
    }

    //testar se o campo mensagem encontra-se vazio
    var mensagem = document.querySelector('#exampleFormControlTextarea1').value;
    if (mensagem==''|| mensagem==null){
        error+="Insira o sua Mensagem \n";
        document.querySelector(".mensagem").style.borderColor="red";
    }

    //agregar as mensagens de alerta quanto a possíveis campos vazios
    if(error!=""){
    alert(error);
    return false;

    }

    return true;
}

function reinicionome(){

    //retirar a cor vermelha do alerta e restaurar a cor original do campo nome
    document.querySelector(".nome").style.borderColor="white";
    
}

function reinicioemail(){

    //retirar a cor vermelha do alerta e restaurar a cor original do campo e-mail
    document.querySelector(".email").style.borderColor="white";
    
}

function reiniciotelefone(){

    //retirar a cor vermelha do alerta e restaurar a cor original do campo telefone
    document.querySelector(".telefone").style.borderColor="white";
    
}

function reinicioassunto(){

    //retirar a cor vermelha do alerta e restaurar a cor original do campo assunto
    document.querySelector(".assunto").style.borderColor="white";
    
}

function reiniciomensagem(){

    //retirar a cor vermelha do alerta e restaurar a cor original do campo mensagem
    document.querySelector(".mensagem").style.borderColor="white";
    
}


