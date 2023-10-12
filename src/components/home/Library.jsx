export default function Library() {
    return (
        <>
            <section id="library" className="page">
                <div className="label">
                    <h2>Library</h2>
                </div>
                <hr  className="lib-hr"/>
                <p id="empty-text" className="text">Hmm, your library looks empty. Try searching for a game to add.</p>
                <section id="library-body" className="grid-box games"></section>
            </section>
        </>
    )
}