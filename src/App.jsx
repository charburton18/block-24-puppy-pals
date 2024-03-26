import './App.css'
import {useState} from 'react'
import puppyList from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
      <div id="root" className="App">
        {featPupId && 
          <div>
            <h2 class="puppyNames">{featuredPup.name}</h2>
            <ul class="puppyNames">
              <li class="puppyNames">Age: {featuredPup.age}</li>
              <li class="puppyNames">Email: {featuredPup.email}</li>
            </ul>
          </div>
        }
        {
          puppies.map((puppy) => {
            return (
            <h3 class="puppyNames" onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
              {puppy.name}
            </h3>
          );
        })}
      </div>
    </>
  );
}

export default App

//does it matter what order I import things in?