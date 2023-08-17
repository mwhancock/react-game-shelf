export default function Footer() {
    return (
        <>
            <footer>
                <div className="foot">
                    <p className="copy">&copy;Mark Hancock 2023</p>
                    <a href="https://github.com/mwhancock"><img src={require("../../img/github-mark.png")} alt="Github logo" className="social-logo" /></a>
                    <a href="https://www.linkedin.com/in/mark-hancock-345228aa"><img src={require("../../img/LI-In-Bug.png")} alt="LinkedIn logo" className="social-logo" /></a>
                </div>
            </footer>
        </>
    )
}