import { Link, NavLink, useNavigate } from "react-router";
import logoImg from "../assets/logo_img.png";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setThemeMode(current === "myThemeDark" ? "dark" : "light");
  }, []);

  const handleToggle = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme =
      current === "myThemeLight" ? "myThemeDark" : "myThemeLight";

    document.documentElement.setAttribute("data-theme", newTheme);
    setThemeMode(newTheme === "myThemeDark" ? "dark" : "light");
  };

  const navigate = useNavigate();

  const handleStatsClick = () => {
    navigate("/", { state: { scrollTo: "stats" } });
  };

  const handleFaqClick = () => {
    navigate("/", { state: { scrollTo: "faq" } });
  };

  const links = (
    <>
      <li>
        <NavLink className={"hover:bg-primary"} to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/services"} className={"hover:bg-primary"}>
          Services
        </NavLink>
      </li>
      {user && (
        <li>
          <details>
            <summary className={"hover:bg-primary"}>Dashboard</summary>
            <ul className="w-44 z-20 *:hover:bg-primary">
              <li>
                <NavLink to={"/add-service"}>Add Service</NavLink>
              </li>
              <li>
                <NavLink to={"/manage-services"}>Manage Service</NavLink>
              </li>
              <li>
                <NavLink to={"/booked-service"}>Booked-Services</NavLink>
              </li>
              <li>
                <NavLink to={"/service-to-do"}>Service-To-Do</NavLink>
              </li>
            </ul>
          </details>
        </li>
      )}
      <li>
        <ScrollLink className={"hover:bg-primary"} onClick={handleStatsClick}>Stats</ScrollLink>
      </li>
      <li>
        <ScrollLink className={"hover:bg-primary"} onClick={handleFaqClick}>FAQ</ScrollLink>
      </li>
      <li>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-black"
            checked={themeMode == "dark"}
            onChange={handleToggle}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign out successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errMsg = error.massage;
        let timerInterval;
        Swal.fire({
          title: errMsg,
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            //closed
          }
        });
      });
  };
  return (
    <div className="navbar bg-base-300 shadow-sm text-primary-content px-5 md:px-10 lg:px-16">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost">
          <img className="md:w-14 w-9" src={logoImg} alt="Fixitronics logo" />
        </Link>
        <Link
          to={"/"}
          className="btn btn-ghost hidden md:inline-block text-sm md:text-xl text-primary-content"
        >
          Fixitronics
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4 ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar group relative"
            >
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
              <div className="absolute text-primary-content z-10 -bottom-[70px] left-1/2 transform -translate-x-1/2 bg-transparent  text-xs p-1  opacity-0 group-hover:opacity-100 transition-opacity">
                {user?.displayName}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div>
          {user ? (
            <Link onClick={handleLogOut} className="btn btn-primary ml-5">
              Logout
            </Link>
          ) : (
            <Link to={"/auth/sign-in"} className="btn btn-primary ml-5">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
