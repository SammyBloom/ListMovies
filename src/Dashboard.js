import React, { Component } from "react"
import Movie from "./Movie"

class Dashboard extends Component {
  render() {
     const { usersByMovie, users, movies } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <Movie
        key={id}
        users={users}
        usersWhoLikedMovie={usersByMovie[id]}
        movieInfo={movies[id]}
      />
    ));

	return <ul>{movieCards}</ul>
  }
}

export default Dashboard;