const content = document.querySelector('.content')
const pokemons = []



    let url = `https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0`;
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        const poke = data.results
        console.log(poke)
        for (let i = 0; i< poke.length; i++){
            console.log(data.results[i].name)
            let newParagraph = document.createElement('div')
            newParagraph.innerHTML = `
                <div id="container">
                    <h2 id="nome">${data.results[i].name}</h2>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i+1]}.png" id="pic">
                    <h3 id="numero">${[i+1]}</h3>
              </div>
            
            `
            content.appendChild(newParagraph)
        }
        })

        // document.getElementById('nome').innerHTML = data['name']
        // document.getElementById('numero').innerHTML = data['id']
        // let img = data['sprites']['front_default']
        // document.getElementById('pic').setAttribute('src', img)

    
    .catch((err)=>{
        console.log(err)
    })
