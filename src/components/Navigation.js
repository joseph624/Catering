import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  state = {
    isTop: true,
    isCollapsed: "collapse",
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <nav
          className={
            "navbar  navbar-expand-lg navbar-light " +
            (this.state.isTop
              ? "transparent-nav fixed-top position-absolute"
              : "transparent-nav-off fixed-top")
          }
        >
          <a className="navbar-brand" id="logo" href="http://maxwellswoodfired.com/">Maxwell's Wood Fired Pizza</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-end mx-auto">
              <li  data-toggle="collapse"
                className={
                  "nav-item active " + (this.state.isTop ? "" : "nav-space")
                }
              >
                <HashLink smooth
                  to={'/#home'}
                  className="nav-link"
             
                  data-target="#navbarSupportedContent"
                >
                  Home<span className="sr-only">home page</span>
                </HashLink>
              </li>

              <li data-toggle="collapse"
                className={"nav-item " + (this.state.isTop ? "" : "nav-space")}
              >
                <HashLink smooth
                  to={'/#about'}
                  className="nav-link"
                  
                  data-target="#navbarSupportedContent"
                >
                  About Us
                </HashLink>
              </li>

              <li data-toggle="collapse"
                className={"nav-item " + (this.state.isTop ? "" : "nav-space")}
              >
                <HashLink smooth
                  to={'/#menu'}
                  className="nav-link"
                  
                  data-target="#navbarSupportedContent"
                >
                  Menu
                </HashLink>
              </li>

              <li data-toggle="collapse"
                className={"nav-item " + (this.state.isTop ? "" : "nav-space")}
              >
                <HashLink smooth
                  to={'/#contact'}
                  className="nav-link"
                  
                  data-target="#navbarSupportedContent"
                >
                  Booking
                </HashLink>
              </li>
              <li data-toggle="collapse"
                className={"nav-item " + (this.state.isTop ? "" : "nav-space")}
              >
                <Link
                  to={'/drop-off'}
                  className="nav-link"
               
                  data-target="#navbarSupportedContent"
                >
                  Drop Off Catering
                </Link>
              </li>
              <li data-toggle="collapse"
                className={"nav-item " + (this.state.isTop ? "" : "nav-space")}
              >
                <Link 
                  to="/bar-service"
                  className="nav-link"                  
                  data-target="#navbarSupportedContent"
                >
                  Bar Service
                </Link>
              </li>
            </ul>
          </div>
          <a
            href="#home"
            id="logo"
            className={"" + (this.state.isTop ? "d-none" : "")}
          >
            Maxwell's Woodfired Catering
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
