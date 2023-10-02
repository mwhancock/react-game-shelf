const searchGameByName = (name) => {
    const searchResults = fetch(`https://boardgamegeek.com/xmlapi2/search?query=${name}&type=boardgame`)
        .then((res) => res.text())
        .then((data) => {
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(data, "text/xml");
        const gameList = Array.from(xmlData.getElementsByTagName("item"));
        console.log(gameList);
        return gameList;
    })
        .catch((err) => console.log("ERROR: ", err));
    return searchResults;
}

const clearSearch = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('result-content').style.display = "none";
        document.getElementById('result-content').innerHTML = "";
    });
}

const searchGame = (e, game) => {
    clearSearch();
    if(e.type === "click"){
      searchGameByName(game);
    }
    if(e.key === "Enter"){
      searchGameByName(game);
    }
    
  }

  export { searchGameByName, clearSearch, searchGame}