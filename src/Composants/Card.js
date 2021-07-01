import React, { useState } from 'react';

function Card(props) {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const [show, setshow] = useState(true);

  const likeing = () => {
    setlike(+1);
    setdislike(0);
  };

  const dislikeing = () => {
    setlike(0);
    setdislike(+1);
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img class="card-img-top" src={props.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Categorie : {props.category}</p>
          <button onClick={likeing} className="btn btn-primary  like">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-like.png" /> {like}
          </button>
          <button onClick={dislikeing} className="btn btn-danger dislike">
            <img src="https://img.icons8.com/color/30/000000/thumbs-down.png" /> {dislike}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
