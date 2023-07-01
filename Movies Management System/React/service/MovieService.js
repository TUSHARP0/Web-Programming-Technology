import axios from "axios";
const baseURL="http://localhost:3002";
class MovieService{
    getMovie(){
        return axios.get(baseURL+"/movies")
    }

    getMovieById(mid){
        return axios.get(baseURL+"/movies/movie/"+mid);
    }

    addMovie(movie){
        return axios.post(baseURL+"/movies/movie/"+movie.mid,movie);
    }

    updateMovie(movie){
        return axios.put(baseURL+"/movies/movie/"+movie.mid,movie);
    }

    deleteMovie(movie){
        return axios.delete(baseURL+"/movies/movie/"+movie.mid,movie);
    }
}

export default new MovieService();