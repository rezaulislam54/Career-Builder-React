import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar max-w-5xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/applied"}>Applied Jobs </Link>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl text-secondary gap-0">
            <img
              className="w-36"
              src="https://res.cloudinary.com/dvp64j4a3/image/upload/v1726224908/careerbuilder-logo_imilgv.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/applied"}>Applied Jobs</Link>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Star Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
