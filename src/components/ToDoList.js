import React from 'react';

const ToDoList = ({ todo, setTodo, setEditTodo }) => {
    const handleDelete = (deletedTodo) => {
        setTodo((prevTodos) => prevTodos.filter((item) => item.id !== deletedTodo.id));
    };

    const handleComplete = (clickedTodo) => {
        setTodo(
            todo.map((item) => {
                if (item.id === clickedTodo.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };

    const handleEdit = (clickedTodo) => {
        setEditTodo(clickedTodo);
    };

    return (
        <div>
            {todo.map((data) => (
                <li className='list-item' key={data.id}>
                    <input
                        type="text"
                        value={data.title}
                        className={`list ${data.completed ? "complete" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button
                            className='button-complete task-button'
                            onClick={() => handleComplete(data)}
                        >
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button
                            className='button-edit task-button'
                            onClick={() => handleEdit(data)}
                        >
                            <i className='fa fa-edit'></i>
                        </button>
                        <button
                            className='button-delete task-button'
                            onClick={() => handleDelete(data)}
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default ToDoList;
