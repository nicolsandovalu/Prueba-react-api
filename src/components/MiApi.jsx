import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Nav from './Nav';
import '../App.css'

function MiApi() {
    const [personajes, setPersonajes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    }

    useEffect(() => {
        axios
            .get(
                `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=ef812b8d9516a94728ebf288d2d190e0&hash=79479b96fd9134645c6aee6bfe95be87`


            )
            .then(res => {
                setPersonajes(res.data.data.results);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const filteredPersonajes = personajes.filter(per =>
        per.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                <Nav onSearchChange={handleSearchChange} />

            </div>
            <div className='titulo'>Personajes de Marvel</div>
            {personajes.map(character => (
                <div key={character.id}>
                </div>
            ))}

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {Array.isArray(filteredPersonajes) &&
                    filteredPersonajes.map(per => (

                        <div className="col" key={per.id}>
                            <div className="card">
                                <img
                                    src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <p className="card-text">{per.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>


        </>
    );
}

export default MiApi;
