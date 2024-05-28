import React from 'react';

export default function Person({ data }) {
  return (
    <h2>les Candidats qui passent le concoure de l etat 2025:</h2>
    <div className="Card">
      {
      data.map((element, index) => (
       
        <ul key={index}>
          firsTname:<li>{element.firsTname}</li>
          lastName<li>{element.lastName}</li>
          Age:<li>{element.Age}</li>
          Etat<li>{element.Etat}</li>
        
        </ul>
      ))}
      
    </div>
  );
}

