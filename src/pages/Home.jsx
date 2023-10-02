import { Gallery, Library, } from "../components/home"

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <section id="home" className="">
                    <section id="result-content" className="hidden">
                        <div className="">
                            <div>
                                <h2>Search Results</h2>
                            </div>
                            <hr />
                            <button id="close-search" className="">X</button>
                        </div>
                        <section id="search-results" className=""></section>
                    </section>
                </section>
            
                <Gallery />
                <Library />
            </div>
        </>
    )
}