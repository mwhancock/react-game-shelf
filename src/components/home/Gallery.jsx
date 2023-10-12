import { useEffect, useState } from "react";
import { getGameIds, getGameDetails } from "../functions/BGGHotlist";
import { GalleryCard } from "./GameCards";


export default function Gallery() {
  const [games, setGames] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    getGameIds('hot').then((hotList) => {
    const promises = hotList.map((id) => getGameDetails(id));
    Promise.all(promises).then((game) => {
      setGames(game);
    });
  });
  }, []);


  useEffect(() => {
    const carousel = document.querySelector("#gallery");
    const slides = carousel.querySelectorAll(".carousel-item");
  
    if (slides.length > 0) {
      slides.forEach((slide, index) => {
        if (index === cardIndex) {
          slide.classList.remove("hidden");
        } else {
          slide.classList.add("hidden");
        }
      });
    }
  }, [cardIndex, games]);

  const incrementCardIndex = () => {
    setCardIndex((prevIndex) => (prevIndex < 14 ? prevIndex + 1 : 0));
  };

  const decrementCardIndex = () => {
    setCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 14));
  };

  return (
    <>
      <div className="label featured">
        <h2 className="text-center text-3xl font-bold text-black ml-[58%]">Featured</h2>
      </div>
      <hr className="w-96 ml-[50%]"/>
      <div id="gallery" className="carousel w-full">
        <div className="carousel-inner">
          {games.slice(0, 15).map((game) => (
            <GalleryCard key={game.id} game={game} isActive={cardIndex}/>
            ))}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-[23rem] right-96 top-[43%]">
              <button className="hover:bg-dark-green ease-in duration-200 h-36 hover:rounded-2xl w-10" type="button" data-bs-target="#gallery" data-bs-slide="prev" onClick={decrementCardIndex}>
                <span className="text-3xl hover:text-black">❮</span>
              </button>
              <button className="hover:bg-dark-green ease-in duration-200 h-36 hover:rounded-2xl w-10" type="button" data-bs-target="#gallery" data-bs-slide="next" onClick={incrementCardIndex}>
                  <span className="text-3xl hover:text-black">❯</span>
              </button> 
            </div>
        </div>
      </div>
    </>
  );
}
