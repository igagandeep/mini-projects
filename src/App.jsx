import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Todos from './todos/Todos';
import Counter from './counter/Counter';
import CharacterCounter from './character-counter/CharacterCounter';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen'>
        <Navbar />
        <main className='p-6 max-w-6xl mx-auto w-full'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/character-counter' element={<CharacterCounter />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
