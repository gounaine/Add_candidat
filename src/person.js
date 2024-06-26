import React, { useState } from "react";

export default function Person({ data }) {
  const [candida, setcandida] = useState(data);

  const Ajouter = (e) => {
    e.preventDefault();

    let input = document.querySelectorAll("input");
    if( input[0].value !== ''&& input[1].value !== '' && input[2].value !=='' && input[3].value !==''){
    setcandida([
      {
        firstName: input[0].value,
        lastName: input[1].value,
        Age: input[2].value,
        Etat: input[3].value,
      },
      ...candida,
    ]);}
  };
  const Affichage=()=>candida.map((element, index) => 
                <div key={index} className="card">
                  
                    <ul>
                   <li><img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Random Image"/></li> 
                        <li><strong>Prénom:</strong> {element.firstName}</li>
                        <li><strong>Nom:</strong> {element.lastName}</li>
                        <li><strong>Âge:</strong> {element.Age}</li>
                        <li><strong>État:</strong> {element.Etat}</li>
                    </ul>
                </div>
            );

  

  return (
    <>    
    <form className="candidate-form">
            <input type="text" placeholder="Prénom" />
            <input type="text" placeholder="Nom" />
            <input type="number" placeholder="Âge" />
            <input type="text" placeholder="État" />
            <button type="submit" onClick={Ajouter}>Ajouter</button>
        </form>
        <h2>Les Candidats qui passent le concours de l'état 2025 :</h2>
        <div className="card-container">
            {Affichage()}
        </div>
    
    </>
);
}
