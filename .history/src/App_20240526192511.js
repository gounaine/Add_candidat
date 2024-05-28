

import './App.css';

function App({firstName , Children}) {
  return (
    <div className="App">
      <h2>{firstName}</h2>
      <h2>{Children}</h2>
    </div>
  );
}

export default App;
