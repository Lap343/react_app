export const getMoviesByName = async (search) => {
    const baseUrl = 'http://www.omdbapi.com'
    const apiKey = '34898ec0'
    const url = `${baseUrl}/?apikey=${apiKey}&s=${search}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const getMovieDetailsById = async (movieId) => {
    const baseUrl = 'http://www.omdbapi.com'
    const apiKey = '34898ec0'
    const url = `${baseUrl}/?apikey=${apiKey}&s=${movieId}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export const truncate = (str, len = 10) => {
    return `${str.substring(0, len)}...`
};