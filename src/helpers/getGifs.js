

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=15&api_key=kqcR3GNFVrSm8cna5p0hD8jFYcOvzUJ1`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
}