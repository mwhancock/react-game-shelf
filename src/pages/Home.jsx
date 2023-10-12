import { Gallery, Library, SearchResults } from "../components/home"

export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <section id="home" className="">
                <SearchResults />    
                <Gallery />
                <Library />
                </section>
            
            </div>
        </>
    )
}