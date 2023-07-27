export default function Library() {
    return (
        <>
            <section id="library" className="page">
                <section id="result_content">
                    <div className="label">
                        <h2>Search Results</h2>
                    </div>
                    <hr />
                    <section id="search_results" className="grid-box games"></section>
                </section>
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