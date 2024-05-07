import React from "react";
import style from "./Card.module.css";

// was sind props?

function Card(props) {
  // in props werden die Werte aus der List Funktion Übergaben
  // man kann es sich so vorstellen wie:
  // const props = {
  //   title: "Wert aus Übergaben",
  //   img: "Wert aus Übergaben",
  //   description: "Wert aus Übergaben"
  // }
  return (
    <div className={style.card}>
      <h2>{props.title}</h2>
      <img src={props.img} alt="info" />
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
