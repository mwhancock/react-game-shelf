import { useEffect, useState } from "react";
import { getGameIds, getGameDetails } from "../functions/BGGHotlist";
import { SearchResultCard } from "./GameCards";


export default function SearchResults() {
    const [games, setGames] = useState([]);

  useEffect(() => {
    getGameIds('search').then((resultList) => {
    const promises = resultList.map((id) => getGameDetails(id));
    Promise.all(promises).then((game) => {
      setGames(game);
    });
    console.log(games);

  });
  }, []);

    return (
        <>
        <section id="result-content" className="hidden">
            <div className="">
                <div>
                    <h2>Search Results</h2>
                </div>
                <hr />
                <button id="close-search" className="">X</button>
            </div>
            <section id="search-results" className="">
                {games.map((game) => {
                    return (
                        <SearchResultCard game={game} />
                    )
                })}
            </section>
        </section>
        </>
    )
}
