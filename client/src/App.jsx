import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('list');
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    (async function () {
      const resp = await fetch('http://127.0.0.1:4343/glossary/');
      const entries = await resp.json();
      setTerms(entries);
    })();
  }, []);

  console.log(terms);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setMode('list')}>Список</button>
        <button onClick={() => setMode('map')}>Граф</button>
      </div>

      {mode === 'list' && (
        <div className="terms">
        {terms.map(term => (
            <div className="term">
            <div key={term.title}>
              <div>{term.title}</div>
              <div>{term.description}</div>
              <div>{term.reference}</div>
            </div>
          </div>
          ))}
        </div>
      )}
      {mode === 'map' && (
        <div className="map">
          <img src="http://localhost:4343/map/" alt="Mind Map" />
        </div>
      )}
    </div>
  )
}

export default App
