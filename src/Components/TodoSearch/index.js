import { useContext } from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../TodoContext';


function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext);

    return(
        <input 
        className="TodoSearch" 
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(Event)=> {
            setSearchValue(Event.target.value);
        }}
        ></input>
    )
}

export { TodoSearch };