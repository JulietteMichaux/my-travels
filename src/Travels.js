import React from "react";

import Travel from "./Travel";
// src/Quotes.js
const travels = [
  {
    destination:"Monasterio di Piedra",
    country:"Spain",
    photo:"http://viajes.elmundo.es/imagenes/2015/10/27/espana/1445941498_0.jpg",
    distance:"877"
  },
  {
    destination:"Bari",
    country:"Italie",
    photo:"https://images.salaun-holidays.com/(Image)-image-italie-bari-02-as_157581524.jpg",
    distance:"1986"
  },
  {
    destination:"Prague",
    country:"République tchèque",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYv_JAKdlC0EAQGInxxmsysT7Kfmk2VtPQZdiCTBlLO5ihvPS",
    distance:"1409"
  },
  {
    destination:"Kuala Lumpur",
    country:"Malaisie",
    photo:"http://vivre-en-thailande.com/files/2018/12/Kuala-Lumpur-01.jpg",
    distance:"10736"
  },
  {
    destination:"Copenhague",
    country:"Danemark",
    photo:"https://static.vueling.com/cms/media/1216444/copenhague.jpg",
    distance:"1595"
  }
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
    ))}
  </div>
);

export default Travels;