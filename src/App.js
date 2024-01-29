import './App.css';
import { learnerData } from './data/learnerData';

import { useState } from 'react'
import { Container } from './style/styled';


function App() {
 
const [learners, setLearners] = useState(learnerData)

  return (
    <Container>
      <div className="App">
        <h1>Learner App</h1>

        {learners.map(learner => 
          <ul> 

          <li key={learner.name}>
            <span> Name: </span> {learner.name}
            <br></br>
            <span>Bio:</span>
            <br></br> 
            {learner.bio}
            <br></br>
            <span>Scores: </span> {learner.scores.map(score => ( <ul>
              <li> 
              <span>Date: </span> {score.date}, <span>Score: </span> {score.score}
              </li>
            </ul>
            ) )}

          </li>

          </ul>
        )}
      </div>
    </Container>
  );
}

export default App;
