import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

export class Movie extends React.Component {

componentDidMount(){
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID);
}

    render() {   // podemos agregar loading.... al detail para la carga
        return (
            <div className="movie-detail"> 
                Detalle de la pelicula
                <h1>{this.props.movie.Title}</h1>
                <h3>{this.props.movie.Year}</h3>
                <p>{this.props.movie.Plot}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      movie: state.movieDetail,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      //   addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
      getMovieDetail: id => dispatch(getMovieDetail(id)),
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);
  