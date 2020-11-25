import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState([])

    const handleDelete = () => {
        setCategories([]);
    }
    return (
        <>
           <h1 className="animate__animated animate__fadeInRightBig">Bienvenido a GifSearch</h1>
           <h2 className="animate__animated animate__fadeInLeftBig">¿Qué Gif deseas buscar?</h2>
           <AddCategory  setCategories={setCategories}/>
           <button className="animate__animated animate__backInDown btn btn-danger" onClick={handleDelete}>Eliminar búsquedas</button>
           <ol>
               {
                categories.map( category => (
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                )) 
               }                
           </ol>
        </>
    )
}
