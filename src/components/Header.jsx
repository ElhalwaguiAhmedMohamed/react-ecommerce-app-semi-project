import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Vengence
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                to={"/home"}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to={"/table"}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                aria-current="page"
                href="#"
              >
                Table
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to={"/table/add"}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Add product
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to={"/categories"}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Categories
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                to={"/cart"}
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Cart
              </NavLink>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
