import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
        }}>
            <label>Escribe un nuevo TODO</label>
            <textarea placeholder='Cortar cebolla'></textarea>

            <div className='TodoForm-buttonContainer'>
            <button type=''
                className='TodoForm-button 
                TodoForm-button--cancel'>Cancelar</button>
            <button type='submit'
                className='TodoForm-button 
                TodoForm-button--add'>Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };