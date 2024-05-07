import React from "react";
import Urlaubplatze from "./../Urlaubplatze";
import Card from "./Card";

function createCard(info, i) {
  // der Parameter info ist wie eine Variable, welche Werte von der map() funktion bekommt.
  // man kann es sich so vorstellen wie:
  // const info =   {
  //   title: "paris",
  //   img: "https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg",
  //   description: "so nice",
  // }
  return (
    // die Werte aus info müssen nun an die Component Card weitergeben werden.
    <Card
      key={info.id}
      title={info.title}
      img={info.img}
      description={info.description}
    />
  );
}

// hier beginnt die functional Component. Erster Buchstabe bitte groß.
function List() {
  return <div id="list">{Urlaubplatze.map(createCard)}</div>;
}

// .map() ist ein Befehl aus Javascript
// für Arrays
// erzeugt ein neues Array
// geht jeden Eintrag einzeiln durch und kann Ihn beim übertragen verändern

export default List;
