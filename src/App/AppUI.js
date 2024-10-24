import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { EmptyTodos } from '../Components/EmptyTodos';
import { Modal } from '../Modal';
import { TodoForm } from '../Components/TodoForm';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        } = useContext(TodoContext);
    
    return (
        <>
        <TodoCounter></TodoCounter>
        <TodoSearch></TodoSearch>
    
        <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

            {searchedTodos.map( todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                ></TodoItem>
            ))}
        </TodoList>
        
        <CreateTodoButton setOpenModal={setOpenModal}></CreateTodoButton>

        {openModal && (
            <Modal>
                <TodoForm></TodoForm>
            </Modal>
        )}
        </>
    );
}

export { AppUI };