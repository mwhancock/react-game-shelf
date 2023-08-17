import { Gallery, Library, Nav, Footer } from "../components/home"

export default function Home() {
    return (
        <>
            <div className="page-content">
                <section id="home" className="page">
                    <section id="result_content">
                        <div className="search-lable">
                            <div>
                                <h2>Search Results</h2>
                            </div>
                            <hr />
                            <button id="close-search" className="close-btn">X</button>
                        </div>
                        <section id="search_results" className="grid-box games"></section>
                    </section>
                </section>
                <Nav />
                <Gallery />
                <Library />
                <Footer />
            </div>
        </>
    )
}