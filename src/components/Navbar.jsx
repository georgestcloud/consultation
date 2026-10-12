import { useState, useEffect, useRef } from "react";
import logo from "../assets/atafo-logo.png";

function Navbar() {

  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);


  useEffect(() => {

    function handleOutsideClick(e) {

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }

    }


    document.addEventListener(
      "click",
      handleOutsideClick
    );


    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };


  }, []);



  return (

    <nav className="navbar navbar-expand-lg bg-white shadow-sm atafo-navbar">

      <div className="container-fluid">


        <a className="navbar-brand" href="/">
          <img
            src={logo}
            className="logo-img"
            alt="ATAFO Logo"
          />
        </a>



        <button
          ref={buttonRef}
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >

          <i className="bi bi-list fs-1 menu-icon"></i>

        </button>



        <div
          ref={menuRef}
          className={`mobile-menu ${open ? "show-menu" : ""}`}
        >

          <ul className="navbar-nav fw-semibold">


            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>



            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </li>



            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={() => setOpen(false)}
              >
                Book a Session
              </a>
            </li>


          </ul>

        </div>


      </div>

    </nav>

  );
}

export default Navbar;