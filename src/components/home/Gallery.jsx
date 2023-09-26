import { useEffect, useState } from "react";
import { getHotIds, getGameDetails } from "../BGGApi";

const GameCard = ({ game, isActive }) => {
  return (
    <div className="card mb-3" style={{maxWidth: 540}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={game[0].image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{game[0].name}</h5>
            <p className="card-text">
              {game[0].description}
            </p>
          </div>
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
          {games.map((game) => (
            <GameCard key={game.id} game={game} isActive={index} />
          ))}
        </div>
      </div>





{/* 
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div> */}
    </>
  );
}
