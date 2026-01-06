import { Link } from 'react-router-dom';

const projects = [
  { path: '/todos', emoji: '✅', title: 'Todos', desc: 'A simple todo list to manage your tasks' },
  { path: '/counter', emoji: '🔢', title: 'Counter', desc: 'A basic counter with increment and decrement' },
  { path: '/character-counter', emoji: '✍️', title: 'Character Counter', desc: 'Textarea with live character count and warning at 80% capacity' },
  
  // Add more projects here as you build them
];

const Home = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Pick a Project
        </h1>
        <p className="text-gray-400 text-lg">
          Click any card to get started
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Link
            key={project.path}
            to={project.path}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center border border-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20 no-underline"
          >
            <span className="text-4xl block mb-3">{project.emoji}</span>
            <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
