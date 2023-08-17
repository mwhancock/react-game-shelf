import { useEffect, useState } from 'react';

const GameCard = ({ game, isActive }) => {
    return (
        <div className = "row">
        {/* <div className={`feature-card ${isActive ? 'active' : 'inactive'}`}>
            <h2 className="feature-name">{game.name}</h2>
            <img src={game.img} alt={game.name} className="gallery-img" />
            <p className="feature-des">{game.description}</p>
            <button className="feature-add-btn">+</button>
        </div> */}
            <div className='col-6'>
                <img src={game.img} alt={game.name} className="gallery-img" />
                {/*<button className="">+</button>*/}
            </div>
            <div className='col-6'>
            <h2 className="">{game.name}</h2>
                <p className="">{game.description}</p>
            </div>
        
            
        </div>
    )
}


const getAtlasData = (params = 'order_by=rank&limit=100') => {
    const clientID = '9RQI1WBCZA';

    return fetch(`https://api.boardgameatlas.com/api/search?${params}&client_id=${clientID}`)
      .then((res) => res.json())
      .then((data) => {
        return data.games;
      })
      .catch((err) => console.log('ERROR: ', err));
  };

export default function Gallery() {
    const [games, setGames] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        getAtlasData("order_by=trending&limit=15")
        .then((gameList) => {
            const recGames = gameList.map((game) => ({
                id: game.id,
                name: game.name,
                img: game?.images?.large,
                description: game.description_preview,
            }));
            setGames(recGames);
        })
        .catch((err) => console.log('ERROR: ', err));
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
                {games.map((game, newIndex) => {
                 return(<div key={game.id}>
                    <GameCard game={game} isActive={newIndex === index} />
                    </div>)
                }
                )}
            </div>
        </div>
    </>
    )
}

