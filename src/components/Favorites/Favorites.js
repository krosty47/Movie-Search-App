import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions/index";

import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => ( // el movie de movie.title hace referencia al objeto guardado en movies favoutires
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>

                  {movie.title}

                </Link>
                <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //   addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

