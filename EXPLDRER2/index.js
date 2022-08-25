function Navbar() {
  return (
    <nav className="navbar navber-expand-lg navber-light bg-light">
    <a className="navber-brand" href="#">Navber</a>
    <button className="navber-toggler" type="button" data-toggle="collapse"
    data-target="#navbarsupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigetion">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item action">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)
      </span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"Action></a>
          <a className="dropdown-item" href="#"Another action></a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Somthing else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
      </ul>
      <form className="from-inline my-2 my-lg-0">
        <input className="from-control mr-sm-2" type="search" placeholder="Search"
          aria-label="search" />
          <button className="btn btn-outline-success my-2 my-sm-0"
          type="submit">Search</button>
      </form>
    </div>
    </nav>
  )
}

function MainContent() {
  return (
    <h1>i'm learning React!</h1>
  )
}
ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />

  </div>,
  document.getElementById("root")
)