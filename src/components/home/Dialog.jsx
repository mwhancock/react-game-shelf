export default function Dialog() {
    return (
    <>
    <dialog id="modal">
        <h2 className="label">Welcome to Game Shelf!</h2>
        <p>I am site to manage your board game collection, track plays, and connect with local game groups. I am currently under development so features are limited and I may be a bit rough round the edges. If you have any features you would like to see, or any other suggestions, you can find my contact info at the bottom of the page.</p>
        <button className="dialog-close-btn" id="close-btn">
          <span>
            Close
          </span>
        </button>
    </dialog>
    </>
    )
}
