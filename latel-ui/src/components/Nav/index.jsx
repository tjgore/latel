import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="max-w-6xl m-auto grid grid-cols-1 lg:grid-cols-2 py-5 px-5">
      <div className="flex items-center justify-center pb-4 lg:pb-0 lg:justify-start">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
        </svg>
        <p className="font-black text-3xl pl-1">Latel</p>
      </div>

      <ul className="flex items-center justify-center flex-row gap-6 font-semibold text-base">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-gray-800"
            }
          >
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/rentals"
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-gray-800"
            }
          >
            Rentals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/guests"
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-gray-800"
            }
          >
            Guests
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-gray-800"
            }
          >
            Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
