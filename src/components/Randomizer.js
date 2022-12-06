import React, { useState } from "react";

const characters = [
    "Moses", "Joseph", "Daniel sitting by the window praying.", "Joshua", "Hezekiah", "Nehemiah", "Samson", "Apostles feet being washed by Jesus as a lesson of humility.", "Daniel thrown in the lions pit.", "Ba'laam and the Donkey", "The 12 spies", "Joshua praying to Jehovah for the sun to stand still", "Jehovah making Manna rain down for the Israelites"
];

const getRandomCharacter = () => {
    return characters[(Math.floor(Math.random() * (characters.length)))];
}

function Randomizer() {
    const [character, setCharacter] = useState(getRandomCharacter());
    const handleClick = () => {
        const randomCharacter = getRandomCharacter();
        setCharacter(randomCharacter);
    };

    
    return (
      <div class="Randomizer">
        <div class="card bg-info shadow-lg p-3 mb-5 rounded">
            <div class="card-header fs-2 text-primary">
                Click below to get started!
            </div>
            <div class="card-body">
                <h5 class="card-title">Character/Event</h5>
                <p class="card-text fs-4">{character}</p>
                <button onClick={handleClick} class=" btn btn-primary"> Randomize </button>
            </div>
        </div>
          {/* <div class="box shadow-none p-3 mb-5 bg-light rounded">
             <h2>{character}</h2>
             <button onClick={handleClick}> Randomize </button>
          </div> */}
          
      </div>
    );
  }
  
  export default Randomizer;