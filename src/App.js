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
  { text: 'Sonreir1', completed: false },
  { text: 'Sonreir', completed: true },
  { text: 'Sonreir3', completed: true }
]

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const completedTodos = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
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
