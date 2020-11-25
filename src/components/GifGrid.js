import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:imgs, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__lightSpeedInLeft">{category}</h3>
            <hr></hr>
            {loading ? (<p>Cargando gifs...</p>): (
                <div className="card-grid">
                {
                    imgs.length !== 0 ? (
                        imgs.map( imgs => ( 
                            <GifGridItem 
                            key={imgs.id} 
                            {...imgs}
                            />
                            ))
                    ): (<p>Ups... no encontramos gifs de {category}</p>)
                }
            </div>
            )}
            
            
        </>
    )
 }
