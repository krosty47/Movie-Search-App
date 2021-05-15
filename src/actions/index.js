export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "ADD_MOVIE_DETAIL ";
export const GET_MOVIES = "GET_MOVIES";
// creamos variables por error humano


export function removeMovieFavorite(id) {
    return {
        type: REMOVE_MOVIE_FAVORITE,
        id
    }
}
// en este caso ponemos id porque vamos a remover la pelicula por id, no es obligatorio que tenga la propiedad payload, es solo informativa 


export function addMovieFavorite(payload) { // el payload va ser un objeto con el titulo y el id
    return {
        type: ADD_MOVIE_FAVORITE,
        payload
    };
};
// el payload sera el nombre de la pelicula

export function getMovies(titulo) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_MOVIES,
                    payload: json
                });
            });
    };
}

export function getMovieDetail(id) {
    return function (dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: GET_MOVIE_DETAIL,
                    payload: json,
                });
            });
    };
}

