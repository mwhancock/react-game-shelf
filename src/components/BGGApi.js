
const getHotIds = async () => {
  const hotlist = await fetch("https://boardgamegeek.com/xmlapi2/hot?type=boardgame")
    .then((res) =>  res.text())
    .then((data) => {
      const parser = new DOMParser();
      const xmlData = parser.parseFromString(data, "text/xml");
      const gameList = Array.from(xmlData.getElementsByTagName("item"));
      const idList = gameList.map((game) => {
        return game.getAttribute("id");
      });
      return idList
    })
    .catch((err) => console.log("ERROR: ", err));
    return hotlist;

}  


const getGameDetails = async (gameID) => { 
    const game = await fetch(`https://boardgamegeek.com/xmlapi2/thing?id=${gameID}`)
      .then((res) => res.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(data, "text/xml");
        const gameData = Array.from(xmlData.getElementsByTagName("item"));
        const gameObj = gameData.map((game) => {
          return {
            id: gameID,
            name: game.querySelector("name").getAttribute("value"),
            image: game.querySelector("image").textContent.trim(),
            description: game.querySelector("description").textContent.trim(),
          }
        })
        return gameObj;
      })
      .catch((err) => console.log("ERROR: ", err));
      return game;
    };
  

export { getHotIds, getGameDetails };