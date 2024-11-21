import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCat } from './features/cat/cat-slice';

import './App.css';


const CatComponent = () => {
    const dispatch = useDispatch();
    const cats = useSelector((state) => state.cat.cats);
    const status = ((state) => state.cat.status);
    const error = ((state) => state.cat.error);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [order, setOrder] = useState('asc');
    const api_key = 'live_AmP8LmT5Zh3OJ5HqLxMYUg8vkfgVpEWlfKN7u5piKqX6Jc6N4Pw10cKgsorXwNs0';

    useEffect(() => {
        dispatch(fetchCat({ limit, page, order, api_key }));
    }, [dispatch, limit, page, order, api_key]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };


    return (
        <div>
            <h1>Cat Images</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}
            <div>
                {cats.map((cat) => (
                    <img key={cat.id} src={cat.url} alt="Cat" width="200" />
                ))}
            </div>
            <div>
                <button onClick={handlePrevPage} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage}>Next</button>
            </div>
            <div>
            </div>

        </div>
            );
    };

            export default CatComponent;

