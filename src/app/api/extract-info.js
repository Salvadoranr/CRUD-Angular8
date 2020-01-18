results=[];
function call(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemon= {
                id: data.id,
                moves: data.moves.map(el=>el.move.name),
                name:data.name,
                image:data.sprites.front_default,
                weight:data.weight,
                type:data.types.shift().type.name,
            }
            results.push(pokemon);
            console.log(results)
    })
}

function callManyTimes(UrlToCall) {

    for (const i of UrlToCall) {
        call(i);
    }
}
function getUrls(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const page = data.pokemon;
            const UrlToCall = page.map(el => el.pokemon.url)
            callManyTimes(UrlToCall)
        })
}

getUrls("https://pokeapi.co/api/v2/type/13/");

function newSort(){
    results.sort(function(a, b) {
        a = a.id;
        b = b.id;
        return a-b;
    });
}