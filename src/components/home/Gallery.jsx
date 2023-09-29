import { useEffect, useState } from "react";
import { getHotIds, getGameDetails } from "../BGGApi";

const GameCard = ({ game,isActive }) => {
   
  return (
    <>
   
      <div id={game[0].id} className={`carousel-item card ${isActive ? "active" : ""}`}>
          <figure><img className="d-block w-100 h-50" src={game[0].image}  alt="box cover"/></figure>
            <h2 className="card-title">{game[0].name}</h2>
            <p dangerouslySetInnerHTML={{ __html: game[0].description }}></p>
            <div>
              <button className="btn btn-primary tw-font-black tw-text-xl tw-border-none tw-bg-accent tw-text-btn-text hover:tw-bg-alt-accent hover:tw-text-text-color">+</button>
            </div>
          </div>
    </>
  );
};

export default function Gallery() {
  const [games, setGames] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    getHotIds().then((hotList) => {
    const promises = hotList.map((id) => getGameDetails(id));
    Promise.all(promises).then((game) => {
      setGames(game);
    });
  });
  }, []);

  useEffect(() => {
    const carousel = document.querySelector("#gallery");
    const slides = carousel.querySelectorAll(".carousel-item");

    slides.forEach((slide, index) => {
      if (index === cardIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }, [cardIndex]);

  const incrementCardIndex = () => {
    setCardIndex((prevIndex) => (prevIndex < 14 ? prevIndex + 1 : 0));
  };

  const decrementCardIndex = () => {
    setCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 14));
  };

  return (
    <>
      <div className="label featured">
        <h2>Feaured</h2>
      </div>
      <hr />
      <div id="gallery" className="carousel slide">
        <div className="carousel-inner">
          {games.slice(0, 15).map((game) => (
            <GameCard key={game.id} game={game} isActive={cardIndex}/>
            ))}
          <button className="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next" onClick={incrementCardIndex}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button> 
          <button className="carousel-control-prev" type="button" data-bs-target="#gallery" data-bs-slide="prev" onClick={decrementCardIndex}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        </div>
      </div>
    </>
  );
}
