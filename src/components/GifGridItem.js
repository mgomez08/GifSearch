import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    const index = title.search("GIF")
    title = title.slice(0, index);
    return (
        <div className="card animate__animated animate__zoomInDown">
            <img className="fluid" src={url} alt={title}/>
            <h4>{title}</h4>
        </div>
    )
}
 