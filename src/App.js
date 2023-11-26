import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const[input,setInput]=useState('');
  const[todo,setTodo]=useState([]);
  const[editTodo,setEditTodo]=useState(null);
  return (
    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form 
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>

        <div>
          <ToDoList
           todo={todo}
           setTodo={setTodo}
           setEditTodo={setEditTodo}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
