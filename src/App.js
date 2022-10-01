import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import DisplayIdeas from './components/DisplayIdeas';
import IdeasForm from './components/IdeasForm';


function App() {
let [ideas, setIdeas] = useState(["Movie about a guy who gets bit by a radioactive mole rat",
    "Romcom about two developers over Zoom",
    "Horror film where AWS goes down for 24 hours"])

const addIdeas = (newIdeas) => {
    setIdeas([...ideas, newIdeas])
}

  return (
    <div className="App">
      <h1>Welcome, Super Awesome Movie Monster Tink Tank!</h1>

      <DisplayIdeas ideas={ideas}/>
      <h1>Submit your ideas down below</h1>
      <IdeasForm addIdeas={addIdeas}/>
    </div>
  );
}

export default App;
