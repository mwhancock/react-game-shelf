import { useEffect, useState } from "react";
import { getHotIds, getGameDetails } from "../BGGApi";

const GameCard = ({ game, isActive }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={game[0].image}  alt="box cover"/></figure>
      <div className="card-body">
        <h2 className="card-title">{game[0].name}</h2>
        <p dangerouslySetInnerHTML={{ __html: game[0].description }}></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary tw-font-black tw-text-xl tw-border-none tw-bg-accent tw-text-btn-text hover:tw-bg-alt-accent hover:tw-text-text-color">+</button>
        </div>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [games, setGames] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getHotIds().then((hotlist) => {
    const promises = hotlist.map((id) => getGameDetails(id));
    Promise.all(promises).then((game) => {
      setGames(game);
    });
  });
  }, []);

  const fwdSlide = () => {
    setIndex((prevIndex) => (prevIndex < games.length - 1 ? prevIndex + 1 : 0));
  };

  const bwdSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : games.length - 1));
  };

  return (
    <>
      <div className="label featured">
        <h2>Feaured</h2>
      </div>
      <hr />
      <div id="gallery" className="gallery">
        <button className="prev-btn" onClick={bwdSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <button className="next-btn" onClick={fwdSlide}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        <div>
          {games.slice(0, 15).map((game) => (
            <GameCard key={game.id} game={game} isActive={index} />
          ))}
        </div>
      </div>
    </>
  );
}
