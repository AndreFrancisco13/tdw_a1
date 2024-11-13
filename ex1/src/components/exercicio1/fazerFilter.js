import React from 'react';


function FazerFilter({setFiltrar, filtrar}) {

    return (
       
        <div className="filters btn-group stack-exception">
            <button type="button" className=" btn toggle-btn" aria-pressed={filtrar==='All'} onClick={() => setFiltrar('All')}>
                <span >All</span>
            </button>
            <button type="button" className=" btn toggle-btn" aria-pressed={filtrar==='Active'} onClick={() => setFiltrar('Active')} >
                <span >Active</span>
            </button>
            <button type="button" className=" btn toggle-btn" aria-pressed={filtrar==='Completed'} onClick={() => setFiltrar('Completed')} >
                <span >Completed</span>
            </button>
        </div>
       
    
);
}


export default FazerFilter;