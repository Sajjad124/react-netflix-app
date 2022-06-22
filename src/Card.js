import React from "react";
import App from "./App";

function Card(props) {
  return (
    <div className="card">
      <img src={props.src} alt="mypic" className="card__img" />
      <div className="card__info">
        <span className="card_category">{props.title} </span>
        <h3 className="card__title">{props.sname}</h3>
        <a href={props.link} target="_blank">
          <button>Watch now</button>
        </a>
      </div>
    </div>
  );
}

export { Card };
