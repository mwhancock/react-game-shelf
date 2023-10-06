const GalleryCard = ({ game }) => {
   
    return (
      <>
        <div data-theme="light"  id={game[0].id} className={`carousel-item card ml-96 relative lg:card-side rounded-2xl bg-light-green shadow-box-shadow mr-2 mb-6 mt-10 w-[73rem] h-[28rem] hidden`}>
          <div className="w-[30rem]">
            <img className="h-96 w-full rounded-xl shadow-image-shadow object-center object-fit mr-2 ml-16 mt-8" src={game[0].image}  alt="box cover"/>
          </div>
          <div className="card-body">
            <h2 className="ml-20 card-title text-text-color text-2xl">{game[0].name}</h2>
            <p className="ml-20 line-clamp-[7] w-[33rem] leading-6 text-text-color font-light" dangerouslySetInnerHTML={{ __html: game[0].description }}></p>
            <div className="card-actions justify-end">
              <button className="absolute top-4 left-[43.2%] py-1.5 px-3.5 ml-2 rounded-md shadow-box-shadow font-black text-3xl bg-accent text-btn-text hover:text-text-color  hover:bg-alt-accent border-none eas-in duration-150">+</button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const SearchResultCard = ({ game }) => {
   
    return (
      <>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={game[0].image}  alt="box cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{game[0].name}</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">+</button>
                </div>
            </div>
        </div>
      </>
    );
  }

  


  export { GalleryCard, SearchResultCard }