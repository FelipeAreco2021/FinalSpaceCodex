window.onload = () => {
console.log("pagina carregada");
loadCharacters()
}



 async function loadCharacters() {
     // Requisiçao api final space
     let result = await axios.get("https://finalspaceapi.com/api/v0/character/")
     let characters = result.data
    let section = document.querySelector(".character-list")
    for (const iterator of characters){
        section.innerHTML += `
        <div class="card">
        <img src="${iterator.img_url}" alt="Character's image">
        <div class="infos">
        <h2>${iterator.name} </h2>
        <p> ${iterator.status} </p>
        <p>Species: ${iterator.species} </p>
        </div>
        </div>`
    }
}
