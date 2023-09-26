import { useEffect, useState } from "react";

// const GameCard = ({ game, isActive }) => {
//   return (
//     <div className="card mb-3" style={{maxWidth: 540}}>
//       <div className="row g-0">
//         <div className="col-md-4">
//           <img src={game.img} class="img-fluid rounded-start" alt="..." />
//         </div>
//         <div className="col-md-8">
//           <div className="card-body">
//             <h5 className="card-title">Card title</h5>
//             <p className="card-text">
//               This is a wider card with supporting text below as a natural
//               lead-in to additional content. This content is a little bit
//               longer.
//             </p>
//             <p className="card-text">
//               <small class="text-body-secondary">Last updated 3 mins ago</small>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };






export default function Gallery() {
  // const [games, setGames] = useState([]);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   getAtlasData("order_by=trending&limit=15")
  //     .then((gameList) => {
  //       const recGames = gameList.map((game) => ({
  //         id: game.id,
  //         name: game.name,
  //         img: game?.images?.large,
  //         description: game.description_preview,
  //       }));
  //       setGames(recGames);
  //     })
  //     .catch((err) => console.log("ERROR: ", err));
  // }, []);

  // const fwdSlide = () => {
  //   setIndex((prevIndex) => (prevIndex < games.length - 1 ? prevIndex + 1 : 0));
  // };

  // const bwdSlide = () => {
  //   setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : games.length - 1));
  // };

  return (
    <>
      {/* <div className="label featured">
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
            return (
              <div key={game.id}>
                <GameCard game={game} isActive={newIndex === index} />
              </div>
            );
          })}
        </div>
      </div> */}






<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    </>
  );
}
