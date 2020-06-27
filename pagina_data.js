function carregar(){
    var mensagem = window.document.getElementById('mensagem');
    var foto = window.document.getElementById('foto');
    var fundo = window.document.body;

    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();

    var semana = data.getDay();

    switch(semana){
        case 0:
            mensagem.innerHTML = `Domingo, `;
            break;
        case 1:
            mensagem.innerHTML = `Segunda-feira, `;
            break;
        case 2:
            mensagem.innerHTML = `Terça-feira, `;
            break;
        case 3:
            mensagem.innerHTML = `Quarta-feira, `;
            break;
        case 4:
            mensagem.innerHTML = `Quinta-feira, `;
            break;
        case 5:
            mensagem.innerHTML = `Sexta-feira, `;
            break;
        case 6:
            mensagem.innerHTML = `Sábado, `;
            break;
        default:
            mensagem.innerHTML = 'Código inválido, ';
            break;
    }

    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    switch (mes){
        case 0: 
            mensagem.innerHTML += `${dia} de janeiro de ${ano}`;
            break;
        case 1: 
            mensagem.innerHTML += `${dia} de fevereiro de ${ano}`;
            break;
        case 2: 
            mensagem.innerHTML += `${dia} de março de ${ano}`;
            break;
        case 3: 
            mensagem.innerHTML += `${dia} de abril de ${ano}`;
            break;
        case 4: 
            mensagem.innerHTML += `${dia} de maio de ${ano}`;
            break;
        case 5: 
            mensagem.innerHTML += `${dia} de junho de ${ano}`;
            break;
        case 6: 
            mensagem.innerHTML += `${dia} de julho de ${ano}`;
            break;
        case 7: 
            mensagem.innerHTML += `${dia} de agosto de ${ano}`;
            break;
        case 8: 
            mensagem.innerHTML += `${dia} de setembro de ${ano}`;
            break;
        case 9: 
            mensagem.innerHTML += `${dia} de outubro de ${ano}`;
            break;
        case 10: 
            mensagem.innerHTML += `${dia} de novembro de ${ano}`;
            break;
        case 11: 
            mensagem.innerHTML += `${dia} de dezembro de ${ano}`;
            break;
        default:
            mensagem.innerHTML = `Còdigo Inválido`;
            break;
    }

    mensagem.innerHTML += `<br>São ${hora} horas e ${minuto} minutos`;

    if(hora >= 0 && hora < 12){
        foto.src = "./img/manha.png";
        fundo.style.backgroundColor = "#85b2f5"; 
    } else if(hora >= 12 && hora < 18){
        foto.src = "./img/tarde.png";
        fundo.style.backgroundColor = "#f1be5d";
    } else{
        foto.src = "./img/noite.png";
        fundo.style.backgroundColor = "#e49ee4";
    }
}
