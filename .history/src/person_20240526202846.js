import React from 'react';

export default function Person({ data }) {
  return (
    <div className="Card">
      {
      data.map((element, index) => (
       
        <ul key={index}>
          <li>{element.firsTname}</li>
          <li>{element.lastName}</li>
          <li>{element.Age}</li>
          <li>{element.Etat}</li>
         { console.log(element)}
        </ul>
      ))}
        {
        }
    </div>
  );
}

