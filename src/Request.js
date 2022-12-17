const apiKey = '9cc43cc52831ac955df4001ffe54e6bb'

const requests = {
   fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
   fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US&sort_by=release_date.asc`,
   fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
   fetchWesternMovies: `/discover/movie?api_key=${apiKey}&with_genres=37`,
   fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
   fetchFantasy: `/tv/popular?api_key=${apiKey}&with_genres=10765`,
   fetchAnimeShows: `/tv/popular?api_key=${apiKey}&with_genres=16&watch_region=JPN`,
   fetchTvDramas: `/tv/popular?api_key=${apiKey}&with_genres=18`,
   fetchCrimeTv: `/tv/popular?api_key=${apiKey}&with_genres=80`,
   fetchNetflixTv: `/discover/tv/?api_key=${apiKey}&with_networks=213&with_genres=9648`,
   fetchSoapTv: `/tv/popular?api_key=${apiKey}&with_genres=10766`,
   fetchFamilyTv: `/tv/popular?api_key=${apiKey}&with_genres=10751`,
   fetchAnimeTv: `/discover/tv/?api_key=${apiKey}&with_networks=213&with_genres=16`,
   fetchFantasyTv: `/tv/popular?api_key=${apiKey}&with_genres=10765&with_networks=213`,
   fetchNetflixComedy: `/discover/movie?api_key=${apiKey}&with_genres=35&with_networks=213`,
   fetchNetflixRomance: `/discover/movie?api_key=${apiKey}&with_genres=10749&with_networks=213`,
   fetchNetflixAction: `/discover/movie?api_key=${apiKey}&with_genres=28&with_networks=213`,
   fetchNetflixHorror: `/discover/movie?api_key=${apiKey}&with_genres=27&with_networks=213`,
   fetchOON: `/discover/movie?api_key=${apiKey}&with_networks=213`,
   fetchNetflixFantasy: `/discover/movie?api_key=${apiKey}&with_genres=10765&with_networks=213`,
   fetchUpcomingMovies: `/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

export default requests;