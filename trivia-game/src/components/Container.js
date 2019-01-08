import React from 'react';
import Timer from './Timer';
import Question from './Question';
import lordOfTheRings from '../questions list/lordOfTheRings';
import Scoreboard from './Scoreboard';
import Reset from './Reset';


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.randomNumber = Math.floor(Math.random() * (lordOfTheRings.length - 1));
        this.handleRandomNumChange = this.handleRandomNumChange.bind(this);
        this.handleCorrectClick=this.handleCorrectClick.bind(this);
        this.handleIncorrectClick=this.handleIncorrectClick.bind(this);
        this.handleResetClick=this.handleResetClick.bind(this);
        this.gamelength = 60000;

        this.state = {
            //below creates a copy, not a reference
            Questions: JSON.parse(JSON.stringify(lordOfTheRings)),
            correctQuestion: [],
            incorrectQuestion: [],
            correctAnswer: [],
            incorrectAnswer: [],
            correct: true,
            randomNum: this.randomNumber,
            show: true,
            firstRound: true,
            count: this.gamelength,
            displayCounter: true
        }
    }

    handleRandomNumChange() {
        this.setState({randomNum: Math.floor(Math.random() * (this.state.Questions.length - 1))}, );
    } 

    handleCorrectClick(question) {
        this.setState({show: false})
        this.setState({correctQuestion: [...this.state.correctQuestion, question]});
        this.setState({correct: true});

    };

    handleIncorrectClick(question) {
        this.setState({show: false})
        this.setState({incorrectQuestion: [...this.state.incorrectQuestion, question]});
        this.setState({correct: false});
    };


    componentDidUpdate() {
        if (this.state.Questions.length === 0) {
            if (this.state.show) {
            this.setState({count: 0});
            this.setState({show: false});
            this.setState({displayCounter: false});
            clearInterval(this.myInterval);
            };
        };
        if (this.state.count === 0) {
            if (this.state.show) {
                this.setState({displayCounter: false});
                clearInterval(this.myInterval);
                this.setState({show: false});
            }
        }
        if (!this.state.show) {
            if (this.state.count > 0) {
        setTimeout(() => this.setState({ show: true}), 1500)
            }
        };
        };


    timer() {
        if (this.state.count > 0) {
            this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
          }, 1000)
        }
    };



    handleResetClick() {
        this.setState({
            //below creates a copy, not a reference
            Questions: JSON.parse(JSON.stringify(lordOfTheRings)),
            correctQuestion: [],
            incorrectQuestion: [],
            correctAnswer: [],
            incorrectAnswer: [],
            correct: true,
            show: true,
            firstRound: true,
            count: this.gamelength,
            displayCounter: true
        },
        this.timer,
        );
    };

    componentDidMount() {
        this.timer();
    };

    componenetWillUnmount () {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div>
                <h1>Totally Trivial Trivia!</h1>
                <Timer count={this.state.count}/>

                {!this.state.show && <Scoreboard
                correct={this.state.correct}
                correctQuestionArr={this.state.correctQuestion}
                incorrectQuestionArr={this.state.incorrectQuestion}
                count={this.state.count}
                 />}

                {this.state.count === 0 && <Reset
                handleResetClick={this.handleResetClick}
                />}

                {this.state.show  &&
                <Question 
                Questions={this.state.Questions}
                handleCorrect={this.handleCorrectClick}
                handleIncorrect={this.handleIncorrectClick}
                onRandomNumChange={this.handleRandomNumChange}
                randomNum={this.state.randomNum}
                correctQuestionArr={this.state.correctQuestion}
                incorrectQuestionArr={this.state.incorrectQuestion}

                />}
            </div>
        );
    }
}


//TODO: 
// 2. Fix time of scoreboard being different bug
// 3. Make pretty

export default Container;