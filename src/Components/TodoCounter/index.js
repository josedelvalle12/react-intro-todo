import { useContext } from 'react';
import './TodoCounter.css'
import { TodoContext } from '../../TodoContext';

function TodoCounter() {
    const {
    completedTodos,
    totalTodos,
    } = useContext(TodoContext)
    return(
        <h1>Completaste {completedTodos} de {totalTodos} TODOs</h1>
    )
}

export { TodoCounter };