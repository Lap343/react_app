const getMoviesByName = async (search) => {
    const baseUrl = 'http://www.omdb.com'
    const apiKey = ''
    const url = `${baseUrl}/?apikey=${apiKey}&s={search}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const getMovieDetailsById = async (movieId) => {
    const baseUrl = 'http://www.omdb.com'
    const apiKey = ''
    const url = `${baseUrl}/?apikey=${apiKey}&s={movieId}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

getMoviesByName('batman')
    .then((data) => console.log(data))

getMovieDetailsById('tt0372784')
    .then((data) => console.log(data))