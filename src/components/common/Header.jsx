import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import WOW from "wowjs";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef(null);

  /*---------menu button event----------*/
  const handleSidbarMenu = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };

  /*---------add event scroll top----------*/
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <header className="header-area position_top" ref={ref}>
        <div className="site-logo">
          <div className="logo">
            <Link to={"/"} onClick={scrollTop}>
              <img
                src={`${process.env.PUBLIC_URL}/img/kenzo.png`}
                alt="logo-img"
                style={{ maxWidth: "200px" }}
              />
            </Link>
          </div>
        </div>
        <div className="main-menu">
          <nav className={`main-nav ${sidebar ? "slidenav column-menu" : "main-nav"}`}>
            <div className="mobile-menu-logo">
              <Link to={"/"} onClick={scrollTop}>
                <img
                  src={process.env.PUBLIC_URL + "img/kenzo.png"}
                  style={{ maxWidth: "" }}
                  alt="images"
                />
              </Link>
              <div className="remove" onClick={handleSidbarMenu}>
                <i className="bi bi-plus-lg" />
              </div>
            </div>
            <ul>
              <li className="has-child">
                <ul>
                  <li>
                    {/* Use exact prop to match only the home route */}
                    <NavLink
                      exact
                      to={`${process.env.PUBLIC_URL}/`}
                      onClick={scrollTop}
                      activeClassName="active" // Add this for active styling
                      className="nav-link"
                    >
                      Home
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/about`}
                      onClick={scrollTop}
                      activeClassName="active"
                      className="nav-link"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/services`}
                      onClick={scrollTop}
                      activeClassName="active"
                      className="nav-link"
                    >
                      Services
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/projects`}
                      onClick={scrollTop}
                      activeClassName="active"
                      className="nav-link"
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/blogs`}
                      onClick={scrollTop}
                      activeClassName="active"
                      className="nav-link"
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`${process.env.PUBLIC_URL}/contact`}
                      onClick={scrollTop}
                      activeClassName="active"
                      className="nav-link"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="get-qoute d-flex justify-content-center d-lg-none d-block pt-50 text-white">
              <div className="cmn-btn">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <Link to={`${process.env.PUBLIC_URL}/get-a-quote`} onClick={scrollTop} className="text-white">
                  Get A Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="nav-right">
          <div className="get-qoute">
            <div className="cmn-btn">
              <div className="line-1" />
              <div className="line-2" />
              <Link to={`${process.env.PUBLIC_URL}/get-a-quote`} onClick={scrollTop}>
                Get A Quote
              </Link>
            </div>
          </div>
          <div className="mobile-menu">
            {/* Toggle the sidebar menu */}
            <Link to="#" onClick={handleSidbarMenu} className={"cross-btn"}>
              <span className="cross-top" />
              <span className="cross-middle" />
              <span className="cross-bottom" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
