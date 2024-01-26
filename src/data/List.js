import { learnerData } from "./learnerData";


function List() {
    const scores = {learnerData}
    console.log(scores)

    const listItems = learnerData.map(student => 
    <li key={student.name}>
        <br></br>
        <h3>{student.name}</h3>
        <p> Bio: {student.bio} </p> 
        <ul>
            {student.scores.map(score => 
                <li key={score.date}>
                    Date: {score.date},  Score: {score.score}
                </li>
                )}
                <br></br>

        </ul>
    
    
    
    </li>)
    
    return <ul>{ listItems }</ul>
}

export default List;