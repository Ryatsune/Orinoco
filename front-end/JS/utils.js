//attend la réponse de la requête à l'API et retourne le résultat au format json
async function ajaxGet(url) {
    let result = await fetch(url);
    return result.json();
}