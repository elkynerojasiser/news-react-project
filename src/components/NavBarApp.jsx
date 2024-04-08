import { Link, NavLink } from 'react-router-dom'

export const NavBarApp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" >General</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new/3" className="nav-link" >Negocios</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new/3" className="nav-link" >Entretenimiento</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new/3" className="nav-link" >Salud</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new/3" className="nav-link" >Ciencia</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new/3" className="nav-link" >Deportes</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/new/3" className="nav-link" >Tecnología</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
