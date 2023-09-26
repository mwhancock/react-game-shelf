import { Gallery, Library, } from "../components/home"

export default function Home() {
    return (
        <>
            <div className="page-content">
                <section id="home" className="page">
                    <section id="result_content" className="tw-hidden">
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
            
                <Gallery />
                <Library />
            </div>
        </>
    )
}