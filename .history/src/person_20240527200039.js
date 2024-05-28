import React, { useState } from 'react';

export default function Person({ data }) {
  const [candida , setcandida]=useState([data]); 
  
      

    
   
      

  return (<>
    <h2>les Candidats qui passent le concoure de l etat 2025:</h2>
    <div className="Card">
     { candida.map((element, index) => (
       
        <ul key={index}>
         <h4>firsTname:</h4> <li>{element.firstName}</li>
          <h4>lastName</h4><li>{element.lastName}</li>
         <h4> Age:</h4><li>{element.Age}</li>
          <h4>Etat:</h4><li>{element.Etat}</li>
        
        </ul>
      ))}
      
    </div></>
  );
}

