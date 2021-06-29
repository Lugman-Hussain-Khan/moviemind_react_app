const apikey = "804dfd47fda42d7ef24c8bcef8e0e502";

const baseURL = "https://api.themoviedb.org/3";

const requests = {
  fetchPopular:`${baseURL}/discover/movie?api_key=${apikey}&sort_by=popularity.desc`,
  fetchNetflixOriginals: `${baseURL}/discover/tv?api_key=${apikey}&with_networks=213`,
  fetchHotstarOriginals: `${baseURL}/discover/tv?api_key=${apikey}&with_networks=2739`,
  fetchAmazonOriginals: `${baseURL}/discover/tv?api_key=${apikey}&with_networks=174`,
  fetchTrendingMovie: `${baseURL}/trending/movie/week?api_key=${apikey}`,
  fetchTrendingTv: `${baseURL}/trending/tv/week?api_key=${apikey}`,
  fetchMarvelTv: `${baseURL}/discover/tv?api_key=${apikey}&with_companies=420`,
  fetchMarvelMovie: `${baseURL}/discover/movie?api_key=${apikey}&with_companies=420`,
  fetchDCMovie: `${baseURL}/discover/movie?api_key=${apikey}&with_companies=9993`,
  fetchDCTV: `${baseURL}/discover/tv?api_key=${apikey}&with_companies=9993`,
  fetchUpcomingMovies: `${baseURL}/movie/upcoming?api_key=${apikey}`,
  fetchNowPlaying: `${baseURL}/movie/now_playing?api_key=${apikey}`,
  fetchRomanceMovies: `${baseURL}/discover/movie?api_key=${apikey}&with_genres=10749`,
  fetchDocumentariesMovies: `${baseURL}/discover/movie?api_key=${apikey}&with_genres=99`,
  fetchAiringToday: `${baseURL}/tv/airing_today?api_key=${apikey}`,
  fetchOnAir: `${baseURL}/tv/on_the_air?api_key=${apikey}`,
}

export default requests;