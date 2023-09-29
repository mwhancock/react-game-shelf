import { useEffect, useState } from "react";
import { getHotIds, getGameDetails } from "../BGGApi";

const GameCard = ({ game,isActive }) => {
   
  return (
    <>
      <div data-theme="light"  id={game[0].id} className={`carousel-item card relative lg:card-side rounded-lg bg-light-green shadow-xl w-3/4 mt-10 h-96 ${isActive ? "active" : ""}`}>
        <figure><img className="w-96 h-80" src={game[0].image}  alt="box cover"/></figure>
        <div className="card-body">
          <h2 className="card-title">{game[0].name}</h2>
          <p dangerouslySetInnerHTML={{ __html: game[0].description }}></p>
          <div className="card-actions justify-end">
            <button className="py-1.5 px-3.5 ml-2 rounded-md font-black text-3xl bg-accent text-btn-text hover:text-text-color  hover:bg-alt-accent border-none eas-in duration-150">+</button>
          </div>
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
        <h2 className="text-center text-3xl font-bold">Feaured</h2>
      </div>
      <hr />
      <div id="gallery" className="carousel w-full">
        <div className="carousel-inner">
          {games.slice(0, 15).map((game) => (
            <GameCard key={game.id} game={game} isActive={cardIndex}/>
            ))}
          <button className="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next" onClick={incrementCardIndex}>
              <span className="btn btn-circle" aria-hidden="true"></span>
              <span className="">❯</span>
          </button> 
          <button className="btn btn-circle" type="button" data-bs-target="#gallery" data-bs-slide="prev" onClick={decrementCardIndex}>
            <span className="" aria-hidden="true">❮</span>
          </button>
        </div>
      </div>
    </>
  );
}
