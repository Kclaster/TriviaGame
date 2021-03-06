import React from 'react';
import happy from '../images/victory.jpg';
import sad from '../images/dissapointed.jpg';
import '../style/Scoreboard.css';

function Scoreboard(props) {
    if (props.count > 0) {
        if (props.correct) {
            return(
                <div>
                <h1>Congratulations you are the champion.</h1>
                <img src={happy} alt="happy tree"/>
                <h2>Your Score: {props.correctQuestionArr.length}</h2>
            </div>
            )
        } else {
            return(
                <div>
                <h1>Wrong!</h1>
                <img src={sad} alt="sad dog"/>
                <h2>Your Score: {props.correctQuestionArr.length}</h2>
            </div>
            )
        }
} else {
    return (
        <div>
            <h1>Game Over!</h1>
            <h2>Number Right: {props.correctQuestionArr.length}</h2>
            <h2>Number Wrong: {props.incorrectQuestionArr.length}</h2>
        </div>
    )
}
}




export default Scoreboard;




//why isn't scoreboard being shown after the first page