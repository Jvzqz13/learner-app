import './App.css';
import { learnerData } from './data/learnerData';

import { useState } from 'react'


function App() {
 
const [learners, setLearners] = useState(learnerData)

  return (
    <div className="App">
      <h1>Learner App</h1>

      {learners.map(learner => 
        <ul> 

        <li key={learner.name}>
          Name: {learner.name}
          <br></br>
          Bio:
          <br></br> 
          {learner.bio}
          <br></br>
          Scores: {learner.scores.map(score => ( <ul>
            <li> 
             Date: {score.date}, Score: {score.score}
            </li>
          </ul>
          ) )}

        </li>

        </ul>
      )}
    </div>
  );
}

export default App;
