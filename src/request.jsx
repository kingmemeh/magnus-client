const apiKey = '3961ba6c887fff01194d8a655016c76b'
const apiUrl = 'https://api.themoviedb.org/3'

const requests = {
    fetchTrending:`${apiUrl}/trending/all/day?api_key=${apiKey}`,
    fetchTrendingMovies:`${apiUrl}/trending/movie/day?api_key=${apiKey}`,
    fetchTrendingTV:`${apiUrl}/tv/popular?api_key=${apiKey}`,
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

//https://api.themoviedb.org/3/discover/tv?api_key=c5942fe01166300c4d9f7ade06bcd727&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0