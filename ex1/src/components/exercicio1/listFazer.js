import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ListFazer ({fazer, filtrar, deleteFazer, on_check, setFazer}) {

 const [results, setResults] = useState([]);
 const [editingId, setEditingId] = useState(null);
 const [newName, setNewName] = useState('');
 const [searching, setSearching] = useState('');

 useEffect(() => {
    let filteredResults = [];
    if (filtrar === 'All') {
        filteredResults = fazer;
    } else if (filtrar === 'Active') {
        filteredResults = fazer.filter((fazer) => !fazer.completed);
    } else if (filtrar === 'Completed') {
        filteredResults = fazer.filter((fazer) => fazer.completed);
    }

    if (searching !== '') {
        filteredResults = filteredResults.filter((fazer) => 
            fazer.name.toLowerCase().includes(searching.toLowerCase())
        );
    }

    setResults(filteredResults);
}, [filtrar, fazer, searching]);



const updateFazer=(id)=>{
setEditingId(id);
}

const lidarCancel=()=>{
 setEditingId(null);
 setNewName('');

}
const lidarSave = (id) => {
    if (newName.trim() !== '' && newName.trim().length > 3) {
        const updatedFazer = fazer.map((fazer) => {
            if (fazer.id === id) {
                return { ...fazer, name: newName };
            }
            return fazer;
        });
        
        setFazer(updatedFazer); // Update main state here
        setEditingId(null);
        setNewName('');
    } else {
        alert('Please enter a valid fazer');
    }
};


    return (
    <div>
       
          
            <form>
            <input
            className="todo-text"
            type="text"
            value={searching}
            placeholder="Search a fazer"
            onChange={(e) => setSearching(e.target.value)}/>
            </form>
      

        
            <div>
            <h2 id="list-heading">
                {results.length} Tasks
            </h2>
    {results.map((fazer) => (
                <ul role="list" key={fazer.id} className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                    <li className="todo stack-small" >
                        <div className="stack-small">
                            <div className="c-cb">
                            <input type="checkbox" checked={fazer.completed} onChange={()=>on_check(fazer.id)}/>
                            {editingId === fazer.id ? (
                            <form className="stack-small"> 
                            <div className="form-group">
                            <label className="todo-label">
                            New name for {fazer.name}
                            </label>
                            <input
                            className="todo-text"
                            type="text"
                            value={newName}
                            onChange={(e)=>setNewName(e.target.value)} />
                                    </div>
                            </form>
                        
                            ):(
                                <label className="todo-label">
                                {fazer.name}
                                </label>
    
                            )}
                            </div>
                            <div className="btn-group">
                                {editingId === fazer.id ? (
                                    <>
                                <button type="button" className="btn" onClick={()=>lidarCancel()}>
                                 <span>Cancel</span>
                                 </button>
                                 <button type="button" className="btn btn__primary todo-edit" onClick={()=>lidarSave(fazer.id)}>
                                     <span>Save</span>
                                 </button> 
                                 </>
                                ):(
                                    <>
                                    <button type="button" className="btn" onClick={()=>updateFazer(fazer.id)}>
                                    <span>edit</span>
                                </button>
                                <button type="button" className="btn btn__danger" onClick={()=>deleteFazer(fazer.id)}>
                                    <span>delete</span>
                                </button> 
                                </>
                            )}
                                
                            </div>
                        </div>
                    </li>
               
                </ul>
                 ))}
            </div>
    
    </div>)
   
        }


export default ListFazer;