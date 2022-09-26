
// helpers getGifs

// helpers:
// son funciones que van a hacer un trabajo específico
// reciben argumentos, los procesan y hacen un return

// se pasa la categoría como argumento en async
export const getGifs = async( category ) => {

    // necesitamos recibir la categoría y hacer una petición http
    // const url = 'https://api.giphy.com/v1/gifs/search?q=aloy&limit=10&api_key=QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE';

    // lo mismo pero reemplazando Aloy por "category"
    // se sustituye: ``
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=QOHo5pdgc4r9KlBkpjsKmAYTnTBc5WcE`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json(); // .json porque lo recibimos en formato json

    // de la data queremos retornar: id, title, url
    const gifs = data.map ( img  => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }})
    return ( gifs );
}












