import { useEffect, useState } from "react";
import { getHotIds, getGameDetails } from "../BGGApi";

const GameCard = ({ game,isActive }) => {
   
  return (
    <>
      <div data-theme="light"  id={game[0].id} className={`carousel-item card ml-96 relative lg:card-side rounded-2xl bg-light-green shadow-xl mt-10 w-[72rem] h-[28rem] hidden`}>
        <figure><img className="w-[30rem] h-96 rounded-xl shadow-lg ml-10" src={game[0].image}  alt="box cover"/></figure>
        <div className="card-body">
          <h2 className="card-title text-text-color">{game[0].name}</h2>
          <p className="line-clamp-[7] w-[33rem] leading-6 text-text-color" dangerouslySetInnerHTML={{ __html: game[0].description }}></p>
          <div className="card-actions justify-end">
            <button className="absolute top-4 left-[41.8%] py-1.5 px-3.5 ml-2 rounded-md font-black text-3xl bg-accent text-btn-text hover:text-text-color  hover:bg-alt-accent border-none eas-in duration-150">+</button>
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
        slide.classList.remove("hidden");
      } else {
        slide.classList.add("hidden");
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-96 right-96 top-[43%]">
              <button className="" type="button" data-bs-target="#gallery" data-bs-slide="prev" onClick={decrementCardIndex}>
                <span className="text-3xl ml-3" aria-hidden="true">❮</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next" onClick={incrementCardIndex}>
                  <span className="" aria-hidden="true"></span>
                  <span className="text-3xl">❯</span>
              </button> 
            </div>
        </div>
      </div>
    </>
  );
}
