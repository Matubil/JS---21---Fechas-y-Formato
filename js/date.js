//? = 20 de enero martes /2022 16:51:08 hora estandar de arg

/*
function formatearFecha(fechaTimestamp){

    const fechaTimestamp = new Date(fechaTimestamp)//corregir la linea esta, que esta tipo 1:30 del video o un cachito mas para atras
    
    let dia = String(fecha.getDate()).padStart(2, '0') //lo que hace el padStart
    let mes = fecha.getMonth()+1 //Me devuelve el numero del mes pero comenzando como un array por lo tanto enero es 0, diciembre es 11, entonces por eso le sumo 1
    const año = fecha.getFullYear(); //2022


    
    // ! `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}` //20/1/2022 
    //Corregir la falta de digito cuando el valor de dia o mes sea menor que 10
    if( dia<10){ dia = '0' + dia}; //esta es una forma de corregirlo
    //la otra forma de corregir cualquiera de los 2
    mes = String(fecha.getMonth()).padStart(2, '0') //lo que hace el padStart, es agregar al principio, un 0 si el mes tiene un solo digito, eso es lo que se indica en el parentesis, primero se pone cuantos digitos debe de tener y con qué se completa


    return `${dia}/${mes}/${año}`
}

formatearFecha(fechaTimestamp)*/

const fecha = new Date(1642708268000)
//la forma que le gusta al profesor para usar

const formatter = Intl.DateTimeFormat('sp-AR',{day: '2-digit', month:'2-digit', year: 'numeric'}) //es una llamada a una api que recibe 2 valores, el primer valor, es el tiempo local(osea el formato que queres que tenga, aca vamos a usar 'sp-AR' que es de español argentina), el segundo valor es un objeto que indica como devolver cada uno de las variables, lleva un monton mas de opciones que las que pusimos pero lleva mas, internacionalizacion date time format, es lo que deberiamos de buscar para que nos indique que hacer

function formarDateIntl(date){
    console.log(formatter.format(date))
    return formatter.format(date)
}

//incluso ni siquierea seria necesaria la funcion, se podria poner lo siguiente fechaIntl: formatter.format(date)


formarDateIntl(fecha)

//1681861167349
//1642708268000


function calcularDiferenciaFechas(fechaAnterior){
    let diff = Date.now() - fechaAnterior  //16181863696777

    let diffDias = Math.floor(diff / 1000 / 60 / 60 / 24); //redondeamos para que quede bien los dias, solo la parte entera, no la parte decimal

    if(diffDias <= 30){
        return `Hace ${diffDias} ${diffDias > 1 ? 'dias' : 'dia'}` //dice que devuelve dia si es 1 o si es mayor a 1 devuelve la palabra dias
    }

    let diffMeses = Math.floor(diffDias / 30)

    //tambien se podria poner dias y meses juntos, ver de implementar eso mas adelante
    if(diffMeses < 12){
        return `Hace ${diffMeses} ${diffMeses > 1 ? 'meses' : 'mes'}`
    }

    let diffAños =  Math.floor(diffMeses /12)
    let mesesRestantes = diffMeses % 12 //ahi nos quedariamos con el resto, osea con el sobrante de los meses que teniamos menos el año

    if(!mesesRestantes){ //pregunta si los mese restantes es = 0
        return `Hace ${diffAños} ${diffAños > 1 ? 'años' : 'año'}`
    }

    return `Hace ${diffAños} ${diffAños > 1 ? 'años' : 'año'} y ${mesesRestantes} ${mesesRestantes > 1 ? 'meses' : 'mes'} restantes`
}

const diferencia = calcularDiferenciaFechas(1626665685000)

console.log(diferencia)

/*
function calcularDiferenciaFechas(fechaAnterior) {
    const fechaActual = new Date();
    const diferencia = fechaActual.getTime() - fechaAnterior.getTime();
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anios = Math.floor(meses / 12);

    if (anios > 0) {
        return `Hace ${anios} año${anios > 1 ? 's' : ''}`;
    } else if (meses > 0) {
        return `Hace ${meses} mes${meses > 1 ? 'es' : ''}`;
    } else if (dias > 0) {
        return `Hace ${dias} día${dias > 1 ? 's' : ''}`;
    } else if (horas > 0) {
        return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
    } else if (minutos > 0) {
        return `Hace ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    } else {
        return `Hace ${segundos} segundo${segundos > 1 ? 's' : ''}`;
    }
}

calcularDiferenciaFechas(164270826800);

function calcularDiferenciaFechas2(fechaAnteriorEnMs) {
    const fechaAnt = new Date(fechaAnteriorEnMs);
    const fechaActual = new Date();
    const diferencia = fecha.getTime() - fechaAnt.getTime();
    const segundos = Math.floor(difer / 1000);
    const minutos = Math.floor(seg / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anios = Math.floor(meses / 12);
  
    if (anios > 0) {
      return `Hace ${anios} año${anios > 1 ? 's' : ''}`;
    } else if (meses > 0) {
      return `Hace ${meses} mes${meses > 1 ? 'es' : ''}`;
    } else if(dias > 0) {
      return `Hace ${dias} día${dias > 1 ? 's' : ''}`;
    }else if (horas > 0) {
      return `Hace ${horas} hora${horas > 1 ? 's' : ''}`;
    } else if (minutos > 0){    return `Hace ${minutos} minuto${minutos > 1 ? 's' : ''}`;
    } else {
      return `Hace ${segundos} segundo${segundos > 1 ? 's' : ''}`;
    }
  }

  calcularDiferenciaFechas2(164270826800)*/