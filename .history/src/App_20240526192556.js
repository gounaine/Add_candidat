

import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h2>{props.firstName}</h2>
      <h2>{props.Children}</h2>
    </div>
  );
}

export default App;
