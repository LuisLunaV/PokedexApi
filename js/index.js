import { getPokemon, infoPokemon } from "./http-privaider.js";
import { init, estatus, imagenHtml,typesHtml,contenTipos, contenedor, contenedorInfo, nivelPoderHtml } from './pokemon-page.js';
import { eventos, vozDeLaPokedex } from './componentes.js';

export{
    vozDeLaPokedex,
    contenTipos,
    typesHtml,
    estatus,
    nivelPoderHtml,
    contenedorInfo,
    contenedor,
    imagenHtml,
    eventos,
    infoPokemon,
    getPokemon,
    init
}