import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Welcome to DevPlayground
      </h1>
      <p className="text-gray-400 text-lg mb-12">
        A collection of mini React projects to explore and learn.
      </p>

      <div className="flex gap-8 justify-center flex-wrap">
        <Link
          to="/todos"
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-64 text-center border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 no-underline"
        >
          <span className="text-5xl block mb-4">✅</span>
          <h3 className="text-xl font-semibold text-white mb-2">Todos</h3>
          <p className="text-gray-400 text-sm">A simple todo list to manage your tasks</p>
        </Link>

        <Link
          to="/counter"
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 w-64 text-center border border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 no-underline"
        >
          <span className="text-5xl block mb-4">🔢</span>
          <h3 className="text-xl font-semibold text-white mb-2">Counter</h3>
          <p className="text-gray-400 text-sm">A basic counter with increment and decrement</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
