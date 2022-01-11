
const getPokemon = async ( nombre )=>{
      
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${ nombre }/`);

try{

    if(resp.ok){

    const data = await resp.json();

    return data;

}else{

    throw 'No se pudo completar la peticion';

}
    
}
    catch(err){

        throw err;
    }

}

const infoPokemon = async ( id )=>{

    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
try{

    if(resp.ok){

        const data = await resp.json();

        const descripcion = data.flavor_text_entries.filter(index =>{

            if(index.language.name == 'es'){

                return index;
    }
})

        return descripcion;

    }else{

        throw 'No se pudo obtener la informacion';

    }
}catch(err){

    throw err;
}
}

export{
getPokemon,
infoPokemon,
}