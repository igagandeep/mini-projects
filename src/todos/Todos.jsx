import React, { useState } from 'react';

const Todos = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onSave = () => {
    if(todo.trim())
    setTodos((prev) => [...prev, {id: Date.now(), value: todo, marked:false}]);
    setTodo('');
  };

  const onDelete = (id) => setTodos((prev) => prev.filter((d) => d.id !== id));

  const onMarked = (id) => {
    setTodos((prev) =>
      prev.map(t => (t.id === id ? { ...t, marked: !t.marked } : t))
    );
  };

  console.log(todos)
  return (
    <div>
      <h1>Todos</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button onClick={onSave}>Add</button>
      <ul style={{ textDecoration: 'none' }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              onChange={() => onMarked(todo.id)}
              checked={todo.marked}
            />{' '}
            <span style={{ textDecoration: todo.marked ? 'line-through' : 'none' }}>{todo.value}</span>{' '}
            <span
              style={{ marginLeft: '1rem', cursor: 'pointer', color: 'red' }}
              onClick={() => onDelete(todo.id)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
