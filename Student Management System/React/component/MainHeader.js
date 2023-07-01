import { NavLink } from "react-router-dom";

const MainHeader=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar w/ text
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink className="navbar-brand" to="/home">
    Home Page
  </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="navbar-brand" to="/table">
    Student Data
  </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="navbar-brand" to="/form">
    Add Student
  </NavLink>
      </li>
    </ul>
    <span className="navbar-text">IACSD</span>
  </div>
</nav>

        </div>
    )
}

export default MainHeader;