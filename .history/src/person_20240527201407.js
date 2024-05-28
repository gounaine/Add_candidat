import React, { useState } from 'react';

export default function Person({ data }) {
  const [candida , setcandida]=useState(data);

  function Ajouter(){
       


  }




  
      

    
   
      

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

      
    </div>
    <div>
    <form action="/submit-form" method="post">
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" placeholder="First name" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last name" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" placeholder="Age" />
            </div>
            <div>
                <label htmlFor="etat">État:</label>
                <input type="text" id="etat" name="etat" placeholder="État" />
            </div>
            <button type="submit">Submit</button>
        </form> </div>
    </>
  );
}

