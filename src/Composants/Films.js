import React, { Component } from 'react';
import movies from './movies';
import Card from './Card';
class Films extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: movies,
    };
  }

  render() {
    return (
      <div className="grid">
        {this.state.data.map(movie => {
          return <Card key={movie.id} title={movie.title} category={movie.category} likes={movie.likes} dislikes={movie.dislikes} img={movie.img} />;
        })}
      </div>
    );
  }
}

export default Films;
