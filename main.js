function relogio(){
    const elementoRelogio = document.querySelector(".relogio");
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();
    //const formatoHoras = horas.toString().padStart(2,"0")
    const formatoHoras = 7
    const formatoMinutos = minutos.toString().padStart(2,"0");
    const formatoSegundos = segundos.toString().padStart(2,"0");

    var img = document.querySelector("#imagem");

    elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`

    const frase = document.querySelector(".frase")
    
    dia = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-Feira", "Quinta-feira", "Sexta-feira", "sábado");

    mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro");

    hoje = new Date 

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,"0")} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}` 

   if(formatoHoras >=0 && formatoHoras <12){
       document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg)"
       img.src = ""
   }
   
   else if(formatoHoras >=12 && formatoHoras <18){
       document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/03/24/05/43/eventide-687108_960_720.jpg)"
   }

   else{
       document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/10/24/22/43/dubai-1767540_960_720.jpg)"
   }




} 

setInterval(relogio, 1000)





