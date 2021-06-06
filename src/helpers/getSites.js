// // Método para obtener todos los sites desde Dive Scanner
// Future<List<SiteModel>> loadSiteScanner() async {

import { diveSite } from "../data/diveSites";

//     // Preparamos la url de la consulta y la lanzamos
//     final url = '$_url/site?token=$_apiKey';
//     final resp = await http.get(url);

//     // Obtenemos la respuesta y la decodificamos
//     final Map<String, dynamic> decodedData = json.decode(resp.body);

//     // Si viene sin datos, devolvemos un objeto vacío
//     if ( decodedData == null ) return null;

//     // Si viene un error, devolvemos un objeto vacío
//     if ( decodedData['error'] != null ) {
//       return null;
//     } else {
      
//       // Cargamos en una variable todos los objetos que nos llegaron por la respuesta
//       // Pasamos los datos al método fromJsonList, buscando solo la parte de 'Sites'
//       final sites = new Sites.fromJsonList(decodedData['sites']);

//       // Devolvemos la lista de objetos del Sites, y que hemos llamado en el modelo como 'items'
//       return sites.items;

//     }

//   }


export const getSites = async ( category ) => {

    // Cogemos los datos del directorio data mientras se solucione el problema del fetch
    // const sites = diveSite;


    // Creamos una variable para almacenar la url de consulta
    // URL de Producción
    const _url = 'https://dive-scanner.herokuapp.com/data/0';
    // apiKey de Producción
    const _apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiNWZjNTczYTdkOTA4NDE1MmI4ODNkMWY3IiwiaWF0IjoxNjE2ODg2MjEzfQ.3xQ8endxf0dY7zckAYBbjr-syo6UV96XhtVIH9Bzd5I';

    // Necesitamos usar encodeURI para que convierta texto en otro que la url pueda usar
    const url = `${ _url }/site?token=${ _apiKey }`

    // console.log( url );

    // Almacenamos la respuesta de la consulta en una variable
    const resp = await fetch( url );

    // Decodificamos la respuesta en formato json
    const { sites } = await resp.json();

    // console.log( data );

    

    // Extraemos la data que nos interesa de cada imagen, ya que tienen mucha información
    // const sites = data.map( img => {
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images?.downsized_medium.url, // Ponemos ? por si no trae images no nos de un error
    //     }
    // })

    // console.log( gifs );
    // setImages( gifs );
    // return gifs; // Esto devuelve una promesa
    return sites;

}