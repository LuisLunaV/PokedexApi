import { getPokemon, imagenHtml, contenedor, contenedorInfo,nivelPoderHtml, estatus, typesHtml,contenTipos } from './index.js';

const cajaTexto = document.querySelector('#input-text');
const buttons   = document.querySelector('.text-btn');

export const eventos = ()=>{

    let contador = 0;

    buttons.addEventListener('click', async ( event )=>{

    const btnNombre = event.target.id;
   

    if(btnNombre === 'search'){

        const nombre = cajaTexto.value.toLowerCase();

        imagenHtml(     await getPokemon( nombre ) );
        nivelPoderHtml( await getPokemon( nombre ));
        typesHtml(      await getPokemon( nombre ));

        cajaTexto.value = '';
       

    }else if(btnNombre === 'reset'){

        limpiarConetnedores( contenedor     );
        limpiarConetnedores( contenedorInfo );
        limpiarConetnedores( estatus        );
        limpiarConetnedores( contenTipos    );
        detenerLaVozDePokedex();

    }else if(btnNombre === 'forward'){

       detenerLaVozDePokedex();
       imagenHtml(     await getPokemon( contador = contador+1))
       nivelPoderHtml( await getPokemon( contador ));
       typesHtml(      await getPokemon( contador ));

    }else if(btnNombre === 'backward'){

       detenerLaVozDePokedex();
       imagenHtml(     await getPokemon( contador = contador-1))
       nivelPoderHtml( await getPokemon( contador ));
       typesHtml(      await getPokemon( contador ));

    }

    })

}

const limpiarConetnedores =( contenedor )=>{

    while(contenedor.firstChild){

        contenedor.removeChild( contenedor.firstChild )

    }
}

export const vozDeLaPokedex =( informacion )=>{

    let info = new SpeechSynthesisUtterance( informacion );
    let voz  = window.speechSynthesis.getVoices();
    info.voice = voz[ 2 ];
    info.rate = 1.6; 
    info.pitch = 1 ;
    window.speechSynthesis.speak( info );

}

const detenerLaVozDePokedex =()=>{

    let voz = window.speechSynthesis;
    voz.cancel();
}