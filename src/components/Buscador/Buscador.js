import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions/index";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.reset({title: ""});
  }

  handleAddFavorite(event, movie){
    event.preventDefault();
    const fav = this.props.favorites.find(m => m.id === movie.imdbID)

    if (fav) {
      alert("No podes repetir papu")
    }
    else {
      this.props.addMovieFavorite({ id: movie.imdbID, title: movie.Title})
    }
  }

  reset(){
    this.setState({title: ""})
  }
  

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}> {/* onSubmit se esta refiriendo al boton submit mas abajo */ }
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie => (  // el map de movies se refiere al nombre del objeto que retorna mapStateToProps
              <div key={movie.imdbID}>
                <Link to={`/movie/${movie.imdbID}`}>
                  {movie.Title}

                </Link>
                <button onClick={ (e) => this.handleAddFavorite(e, movie)}>FAV</button>
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
    movies: state.moviesLoaded,
    favorites: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


