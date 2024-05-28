import React, { useState } from "react";

export default function Person({ data }) {
  const [candida, setcandida] = useState(data);

  const Ajouter = (e) => {
    e.preventDefault();

    let input = document.querySelectorAll("input");
    setcandida([
      {
        firstName: input[0].value,
        lastName: input[1].value,
        Age: input[2].value,
        Etat: input[3].value,
      },
      ...candida,
    ]);
  };

  return (
    <>
      <h2>les Candidats qui passent le concoure de l etat 2025:</h2>
      <div className="Card">
        {candida.map((element, index) => (
          <ul key={index}>
            <h4>firsTname:</h4> <li>{element.firstName}</li>
            <h4>lastName</h4>
            <li>{element.lastName}</li>
            <h4> Age:</h4>
            <li>{element.Age}</li>
            <h4>Etat:</h4>
            <li>{element.Etat}</li>
          </ul>
        ))}
      </div>
      <form>
        <input type="text" placeholder="first name" />
        <input type="text" placeholder="last name" />
        <input type="number" placeholder="Age" />
        <input type="text" placeholder="etat" />
        <input type="submit" onClick={Ajouter} />
      </form>
    </>
  );
}
