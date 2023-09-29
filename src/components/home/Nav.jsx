export default function Nav() {
  return (
  <>
    <nav className="navbar navbar-expand-lg tw-bg-dark-green tw-h-20 tw-shadow-box-shadow tw-sticky tw-top-0 tw-z-50">
        <div className="container-fluid">
            <a className="navbar-brand" href="../../App.js"><img src="../../img/logo.png" alt="" />Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex tw-w-[50%] tw-ml-[27rem] tw-drop-shadow-sm" role="search">
                    <input className="form-control me-2 tw-rounded-[20px]" type="search" placeholder="Search..." aria-label="Search" />
                    <button className="btn btn-outline-success tw-bg-alt-accent tw-text-text-color hover:tw-text-btn-text  hover:tw-bg-accent tw-border-none" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</>
  )
}
