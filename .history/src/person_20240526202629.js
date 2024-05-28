import React from 'react';

export default function Person({ data }) {
  return (
    <div className="Card">
      {data.map((element, index) => (
        console.log(element);
        <ul key={index}>
          <li>{element.firsTname}</li>
          <li>{element.lastName}</li>
          <li>{element.Age}</li>
          <li>{element.Etat}</li>
        </ul>
      ))}
    </div>
  );
}

