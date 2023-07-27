export default function Gallery() {
    return (
        <>
        <div className="label featured">
            <h2>Feaured</h2>
        </div>
        <hr />
        <div id="gallery" className="gallery">
            <button className="prev-btn">
                <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>

            <button className="next-btn">
                <span className="materal-symbols-outlined">arrow_forward_ios</span>
            </button>
        </div>
        </>
    )
}