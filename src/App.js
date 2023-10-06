import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Pasear Tuco', completed: false},
  { text: 'Tomar Agua', completed: true},
  { text: 'Sonreir', completed: true }
]

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          text={todo.text} 
          completed={todo.completed}
          key={todo.text}
           />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}



export default App;
