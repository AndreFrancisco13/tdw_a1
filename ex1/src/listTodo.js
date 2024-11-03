import React from "react";

function ListTodo ({todo, filter}) {

    const remainingTodos = todo.filter((todo) => !todo.completed).length;
    const allTodos = todo.length;


    return (
       <div>
        {filter === 'All' && (
            
            <>
        <h2 id="list-heading">
            {todo.length} Tasks remaining
        </h2>
{todo.map((todo) => (
            <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                <li className="todo stack-small">
                    <div className="stack-small">
                        <div className="c-cb">
                        </div>
                        <input id={todo.id} type="checkbox" defaultChecked={todo.completed} />
                        <label className="todo-label">
                            {todo.name}</label>
                        <div className="btn-group">
                            <button type="button" className="btn">
                                <span>edit</span>
                            </button>
                            <button type="button" className="btn btn__danger">
                                <span>delete</span>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        ))}
        </>
    )}
    {filter === 'Active' && (
        <>
            <h2 id="list-heading">
                {remainingTodos} Tasks remaining
            </h2>
            {todo.filter((todo) => !todo.completed).map((todo) => (
                <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                    <li className="todo stack-small">
                        <div className="stack-small">
                            <div className="c-cb">
                            </div>
                            <input id={todo.id} type="checkbox" defaultChecked={todo.completed} />
                            <label className="todo-label">
                                {todo.name}</label>
                            <div className="btn-group">
                                <button type="button" className="btn">
                                    <span>edit</span>
                                </button>
                                <button type="button" className="btn btn__danger">
                                    <span>delete</span>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </>
    )}
    {filter === 'Completed' && (
        <>
            <h2 id="list-heading">
                {allTodos - remainingTodos} Tasks completed
            </h2>
            {todo.filter((todo) => todo.completed).map((todo) => (
                <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                    <li className="todo stack-small">
                        <div className="stack-small">
                            <div className="c-cb">
                            </div>
                            <input id={todo.id} type="checkbox" defaultChecked={todo.completed} />
                            <label className="todo-label">
                                {todo.name}</label>
                            <div className="btn-group">
                                <button type="button" className="btn">
                                    <span>edit</span>
                                </button>
                                <button type="button" className="btn btn__danger">
                                    <span>delete</span>
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            ))}
        </>
    )}
</div>);
}

export default ListTodo;