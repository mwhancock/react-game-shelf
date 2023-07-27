import Dialog from "./Dialog"
import Nav from "./Nav"
import Home from "./Home"

export default function Body() {
    return (<>
        <main className="grid-box main-grid">
         <Dialog />
         <Nav />
         <Home />
        </main>
    </>)
}


