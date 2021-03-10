import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from 'firebase';
import { useEffect } from 'react';
import Todo from './Todo';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    displayTodo();
  }, [])

  const displayTodo = () => {
    db.collection('todos').onSnapshot(function(querySnapshot) {
      setTodoList(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inProgress: doc.data().inProgress,
      }))
      );
    });
  }

  const addTodo = e => {
    e.preventDefault();
    db.collection('todos').add({
      inProgress: true,
      todo: todo,
    });

    setTodo('');
  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1>To do app</h1>
        <form>
          <TextField 
          id="standard-basic" 
          label="To do" 
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} />
          <Button type="submit" variant="contained" onClick={addTodo}>Submit</Button>
        </form>
      </div>
      <div className="todos">
        {todoList.map((todo) => (
          <Todo todo={todo.todo} inProgress={todo.inProgress} id={todo.id} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
