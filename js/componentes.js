import { getPokemon, imagenHtml, contenedor, contenedorInfo,nivelPoderHtml, estatus, typesHtml,contenTipos } from './index.js';

const cajaTexto = document.querySelector('#input-text');
const buttons   = document.querySelector('.text-btn');

export const eventos = ()=>{

    buttons.addEventListener('click', async ( event )=>{

    const btnNombre = event.target.id;

    if(btnNombre === 'search'){

        const nombre = cajaTexto.value.toLowerCase();

        imagenHtml(     await getPokemon( nombre ) );
        nivelPoderHtml( await getPokemon( nombre ));
        typesHtml(      await getPokemon( nombre ));

        cajaTexto.value = '';

    }else if(btnNombre === 'reset'){

        while(contenedor.firstChild){

            contenedor.removeChild( contenedor.firstChild );

        }

        while(contenedorInfo.firstChild){

            contenedorInfo.removeChild( contenedorInfo.firstChild );

        }

        while(estatus.firstChild){

            estatus.removeChild( estatus.firstChild )

        }

        while(contenTipos.firstChild){

            contenTipos.removeChild( contenTipos.firstChild )

        }
    }

    })

}