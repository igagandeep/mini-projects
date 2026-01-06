import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 text-white no-underline">
        <span className="text-3xl">🧩</span>
        <span className="text-2xl font-bold tracking-tight">Mini Projects</span>
      </Link>
    </nav>
  );
};

export default Navbar;
