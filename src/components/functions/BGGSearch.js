import { SearchResultCard } from "../home/GameCards";

const searchGameByName = (name) => {
    const searchResults = fetch(`https://boardgamegeek.com/xmlapi2/search?query=${name}&type=boardgame`)
        .then((res) => res.text())
        .then((data) => {
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(data, "text/xml");
        const gameList = Array.from(xmlData.getElementsByTagName("item"));
        console.log(gameList);
        sortSearch(gameList, name);
        console.log(gameList);
        gameList.forEach((game) => {
            return SearchResultCard(game);
        }
        );

        // return sortSearch(gameList, name);
        ;
    })
        .catch((err) => console.log("ERROR: ", err));
    return searchResults;
}

const clearSearch = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('result-content').classList.add('hidden');
        document.getElementById('result-content').innerHTML = "";
    });
}

const sortSearch = (gameList, searchTerm) => {
    const sortedList = gameList.sort((a, b) => {
        const gameA = a.childNodes[1].getAttribute("value").toLowerCase();
        const gameB = b.childNodes[1].getAttribute("value").toLowerCase();

        if (gameA.slice(0, searchTerm.length) ===  searchTerm.toLowerCase()) {
            return -1;
        } else if (gameB.slice(0, searchTerm.length) === searchTerm.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortedList;
}

const searchGame = (e, game) => {
    clearSearch();
    if(e.type === "click"){
      searchGameByName(game);
    }
    if(e.key === "Enter"){
      searchGameByName(game);
    }
    document.getElementById('result-content').classList.remove('hidden');
  }

  export { searchGameByName, clearSearch, searchGame }