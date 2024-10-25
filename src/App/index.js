import React from 'react';
import { AppUI } from './AppUI';
import '../App.css';
import { TodoProvider } from '../TodoContext';

function App() {

return (
  <TodoProvider>
    <AppUI></AppUI>
  </TodoProvider>
)
}

export default App;
