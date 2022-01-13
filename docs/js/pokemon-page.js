import { eventos, infoPokemon } from './index.js';
const contenedor     = document.querySelector('.cont-pokemon'),
      contenTipos    = document.querySelector('#cont-tipos'),
      estatus        = document.querySelector('.status'),
      contenedorInfo = document.querySelector('.information-pokemon');

const imagenHtml = async ( dato )=>{
    
 const tipo = dato.types[0].type.name;

    const html =`
    <div class='imagen-pokemon ${ tiposColor(tipo) }'>  
    <div class='radio-pokemon ${ tiposColor(tipo) }'>
    <img src='${dato.sprites.front_default}' alt='imagen-del-pokemon' />
    </div>
    </div>
    <div class='nombre-pokemon'>
    <h3>${dato.name}</h3> 
    <h3>n.${dato.id}</h3>
    </div>
    `;

    contenedor.innerHTML = html;
   informacionHtml(await infoPokemon(dato.id) );

}

const informacionHtml =( dato )=>{

    const html = `<div class="cont-info">
    <p>${dato[0].flavor_text}</p>
    <p>${dato[1].flavor_text}</p>
    </div>`;

    contenedorInfo.innerHTML = html;
}

const nivelPoderHtml = ( dato )=>{

    const html = `
    <p><strong>Speed.............${dato.stats[5].base_stat}</strong></p>
    <p><strong>Special-Defense...${dato.stats[4].base_stat}</strong></p>
    <p><strong>Special-Attack....${dato.stats[3].base_stat}</strong></p>
    <p><strong>Defense...........${dato.stats[2].base_stat}</strong></p>
    <p><strong>Attack............${dato.stats[1].base_stat}</strong></p>
    <p><strong>Hp................${dato.stats[0].base_stat}</strong></p>
    `;

    estatus.innerHTML = html;
}

const typesHtml =( elemnt )=>{

    const tipo    = elemnt.types[0].type.name;

    if(elemnt.types.length == 1){

        const htmlUno = `                 
        <h3 class="${tiposColor(tipo)}">${elemnt.types[0].type.name}</h3>`;

        contenTipos.innerHTML = htmlUno;

    }else if(elemnt.types.length == 2){

        const tipoDos = elemnt.types[1].type.name;
        
        const htmlDos = `                 
        <h3 class="${tiposColor(tipo)}">${elemnt.types[0].type.name}</h3>
        <h3 class="${tiposColor(tipoDos)}">${elemnt.types[1].type.name}</h3>`;

        contenTipos.innerHTML = htmlDos;
    }
}

const tiposColor =( tipo )=>{

  return  (tipo == 'electric')?'electrico'
    :(tipo == 'fire' || tipo == 'dragon')? 'fuego'
    :(tipo == 'grass')?'hierva'
    :(tipo == 'water' || tipo == 'ice')?'agua'
    :(tipo == 'psychic')? 'psiquico'
    :(tipo == 'ghost')?'fantasma'
    :(tipo == 'rock')?'roca'
    :(tipo == 'poison')?'veneno'
    :(tipo == 'normal' || tipo == 'fighting')?'normal'
    :(tipo == 'ground')?'tierra'
    :(tipo == 'bug')?'insecto'
    :(tipo == 'flying')?'volador'
    :(tipo == 'fairy')?'hada':'';

}

const init = async ()=>{

eventos();

}

export{
    contenTipos,
    typesHtml,
    estatus,
    nivelPoderHtml,
    contenedorInfo,
    contenedor,
    imagenHtml,
    init
}