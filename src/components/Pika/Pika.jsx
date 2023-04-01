import React, { useEffect, useState } from 'react'
import './Pika.css'

export const Pika = () => {
    const [pokemon, setPokemon] = useState('');
    const [id, setId] = useState(1);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default
                });
            })
    }, [id]);

    const anterior = () => {
        if(id <= 1) return;

        setId(id - 1);
    }

    const siguiente = () => {
        setId(id + 1);
    }
    
    const buscar = (e) => {
        setBusqueda(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if(busqueda.length > 2) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}/`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default
                });
            })
        }
    }

    return (
        <>
            <form onSubmit={submit}>
                <input type='text' value={busqueda} onChange={buscar} />
            </form>
            {!pokemon ? 
                <div className='pika'>Cargando</div> :
                <div>
                    <div className='pika'>
                        {pokemon.numero}
                    </div>
                    <div className='pika'>
                        {pokemon.nombre}
                    </div>
                    <div className='pika'>
                        <img src={pokemon.imagen} alt="Imagen del pokemon"/>
                    </div>
                </div>
            }
            <div>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>
        </>
    );
}
