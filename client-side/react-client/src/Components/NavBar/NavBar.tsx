import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth, UserContext } from "../Context/UserContext";

function NavBar() {
  const context = useContext(UserContext);
  const {logout} = useAuth();

  if (!context) {
    throw new Error("UserInfo must be used within a user provider");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand">
            <Link className="nav-link" to="/">
              Ticketing Reimbursement System
            </Link>
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {(context.user == null) && <li className="nav-item">
                <Link className="nav-link" to="/Register">
                  Register
                </Link>
              </li>}
              {(context.user == null) && <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>}
              {(context.user != null) && <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => {
                  context.logout();
                  logout();
                }}>Logout</Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;