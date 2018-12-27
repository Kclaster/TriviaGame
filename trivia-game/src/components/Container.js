import React from 'react';
import Timer from './Timer';
import Question from './Question';
import Questions from './Questions';


class Container extends React.Component {
    constructor(props) {
        super(props);
        // this.randomNumber = Math.floor(Math.random() * (questions.length - 1));
        this.handleRandomNumChange = this.handleRandomNumChange.bind(this);
        this.handleCorrectClick=this.handleCorrectClick.bind(this);
        this.handleIncorrectClick=this.handleIncorrectClick.bind(this);

        this.state = {
            correctQuestion: [],
            incorrectQuestion: [],
            correctAnswer: [],
            incorrectAnswer: [],
            randomNum: this.randomNumber,

        }
    }

    handleRandomNumChange() {
        this.setState({randomNum: Math.floor(Math.random() * (Questions.length - 1))}, );
    } 

    handleCorrectClick(question) {
        this.setState({correctQuestion: [...this.state.correctQuestion, question]});

    };

    handleIncorrectClick(question) {
        this.setState({incorrectQuestion: [...this.state.incorrectQuestion, question]});
    };

    render() {
        return (
            <div>
                <h1>Totally Trivial Trivia!</h1>
                <Timer />
                <Question 
                onRandomNumChange={this.handleRandomNumChange}
                randomNum={this.state.randomNum}
                handleCorrect={this.handleCorrectClick}
                handleIncorrect={this.handleIncorrectClick}
                correctAnswerArr={this.state.correctAnswer}
                correctQuestionArr={this.state.correctQuestion}
                incorrectAnswerArr={this.state.incorrectAnswer}
                incorrectQuestionArr={this.state.incorrectQuestion}/>
            </div>
        );
    }
}

//TODO: 
//1. pass the state randomNum down
//2. lift state for other state properties
//3. add conditional rendering to Container.js for a Congratz component and a 'you got it wrong' component.


export default Container;