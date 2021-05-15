import { REMOVE_MOVIE_FAVORITE, ADD_MOVIE_FAVORITE, GET_MOVIE_DETAIL, GET_MOVIES, GET_MOVIE } from '../actions';


const initialState = {
    moviesFavourites: [], // favoritas
    moviesLoaded: [],  // listado luego de busqueda
    loading: false, 
    movieDetail: {}, // detalle de la peli cliqueda
};


function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === GET_MOVIES) {
        return {
            ...state,
            loading: true,
            moviesLoaded: action.payload.Search  // en este caso el objeto de la API con la informacion se llama Search
        };
    }
    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.id)
        }
    }
    if (action.type === GET_MOVIE_DETAIL) {
        return {
            ...state,
            loading: false,
            movieDetail: action.payload   // aca es solo payload porque tenemos que devolver el detalle de todas las peliculas que estan guardadas en el JSON
        }
    }
    return state;
}

export default rootReducer;