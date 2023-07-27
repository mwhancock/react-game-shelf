import Dialog from "./Dialog"
import Nav from "./Nav"
import Home from "./Home"
import Footer from "./Footer"

export default function Body() {
    return (<>
        <main className="grid-box main-grid">
         <Dialog />
         <Nav />
         <Home />
         <Footer />
        </main>
    </>)
}


