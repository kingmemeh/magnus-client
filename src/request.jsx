const apiKey = '3961ba6c887fff01194d8a655016c76b'
const apiUrl = 'https://api.themoviedb.org/3'

const requests = {
    fetchTrending:`${apiUrl}/trending/all/day?api_key=${apiKey}`,
    //fetchSimilar: `${apiUrl}/movie/${movie_id}/similar?api_key=${apiKey}&language=en-US&page=1`,
    findTopRated: `${apiUrl}/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fecthAnimatedMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&&with_genres=16`,
    fetchDocumentries:`${apiUrl}/discover/movie?api_key=${apiKey}&&with_genres=99`,
    fetchHorrorMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&&with_genres=27`,
    fetchActionMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&&with_genres=28`,
    fetchCrimeMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&&with_genres=12`,
    fetchHistoryMovies: `${apiUrl}/discover/movie?api_key=${apiKey}&&with_genres=36`,
}

export default requests;