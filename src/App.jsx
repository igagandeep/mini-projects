import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todos from './todos/Todos';
import Counter from './counter/Counter';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
