import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCats, fetchCat } from './features/cat/cat-slice';
import styled from 'styled-components';

import './App.css';



const CatComponent = () => {
    const dispatch = useDispatch();
    const cats = useSelector((state) => state.cat.cats);
    const status = useSelector((state) => state.cat.status);
    const error = useSelector((state) => state.cat.error);

    const [totalResults, setTotalResults] = useState('');
    const [page, setPage] = useState(1);
    const resultsPerPage = 10;
    const api_key = 'live_AmP8LmT5Zh3OJ5HqLxMYUg8vkfgVpEWlfKN7u5piKqX6Jc6N4Pw10cKgsorXwNs0';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (totalResults > 0) {
            dispatch(clearCats());
            dispatch(fetchCat({ limit: totalResults, page: 1, api_key }));
            setPage(1);
        }
    };

    const handleNextPage = () => {
        if (page * resultsPerPage < cats.length) {
            setPage(page + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleTotalResultsChange = (e) => {
        setTotalResults(e.target.value);
    };


    const Container = styled.div`
    text-align: center;
    margin:20px;
    `;

    const Button = styled.button`
    background-color: green;
    border-radius: 8px;
    border: none;
    color: white;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    `;

    const ButtonBottom = styled.button`
    background-color: darkred;
    border: none;
    color: white;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    `;




    const [images, setImages] = useState([]); // Para armazenar as imagens com suas orientações

    // Atualizar as imagens com a orientação (horizontal ou vertical)
    useEffect(() => {
        const updatedImages = cats.map((cat) => {
            const img = new Image();
            img.src = cat.url;

            return new Promise((resolve) => {
                img.onload = () => {
                    const orientation =
                        img.naturalWidth > img.naturalHeight ? 'horizontal' : 'vertical';
                    resolve({ ...cat, orientation });
                };
            });
        });

        Promise.all(updatedImages).then((resolvedImages) => setImages(resolvedImages));
    }, [cats]);





    const startIndex = (page - 1) * resultsPerPage;
    const currentCats = cats.slice(startIndex, startIndex + resultsPerPage);

    return (
        <div>
            <h1>Cat Images</h1>
            <form style={{ marginBottom: '3rem' }} onSubmit={handleSubmit}>
                <label>Total Results:</label>
                <input
                    type="number"
                    value={totalResults}
                    onChange={handleTotalResultsChange}
                    min="1"
                />
                <Button type="submit">See Cats</Button>
            </form>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

            <div className="gallery-container">
                <h1>Cat Gallery</h1>
                <div className="gallery-grid">
                    {currentCats.map((image) => (
                        <img
                            key={image.id}
                            src={image.url}
                            alt="Cat"
                            className={`gallery-image ${image.orientation}`}
                        />
                    ))}
                </div>
            </div>
            {cats.length > 10 && (
                <>
                    <div>
                        <ButtonBottom onClick={handlePrevPage} disabled={page === 1}>
                            Previous
                        </ButtonBottom>
                        <ButtonBottom onClick={handleNextPage} disabled={page * resultsPerPage >= cats.length}>
                            Next
                        </ButtonBottom>
                    </div>


                    <p>
                        Page {page} of {Math.ceil(cats.length / resultsPerPage)}
                    </p>
                </>)
            }
        </div>
    );
};

export default CatComponent;

