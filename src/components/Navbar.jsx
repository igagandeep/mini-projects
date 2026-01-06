import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? 'bg-white/25 text-white shadow-md'
        : 'text-white/85 hover:bg-white/15 hover:text-white hover:-translate-y-0.5'
    }`;

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <NavLink to="/" className="flex items-center gap-2 text-white no-underline mb-4 sm:mb-0">
        <span className="text-3xl">🚀</span>
        <span className="text-2xl font-bold tracking-tight">DevPlayground</span>
      </NavLink>

      <ul className="flex gap-2 list-none m-0 p-0">
        <li>
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/todos" className={linkClass}>
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" className={linkClass}>
            Counter
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
