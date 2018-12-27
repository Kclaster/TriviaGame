import React from 'react';
import Questions from './Questions';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.randomNumber = Math.floor(Math.random() * (Questions.length - 1));

        this.state = {
            firstRound: true,
            randomNum: this.randomNumber,
        };

        const randomStart = this.randomNumber;

        this.id = Questions[randomStart]["correct answer"];
        this.handleClick = this.handleClick.bind(this);
        this.question = Questions[randomStart];
        this.displayQuestion = Questions[randomStart].question;
        this.firstChoice = Questions[randomStart]["answer choices"][0];
        this.secondChoice = Questions[randomStart]["answer choices"][1];
        this.thirdChoice = Questions[randomStart]["answer choices"][2];
        this.fourthChoice = Questions[randomStart]["answer choices"][3];
        this.rightAnswer = Questions[randomStart]["answer"];
    }

    updateUI = () => {
        const randomDigit = this.props.randomNum;

        this.question = Questions[randomDigit];
        this.displayQuestion = Questions[randomDigit].question;
        this.firstChoice = Questions[randomDigit]["answer choices"][0];
        this.secondChoice = Questions[randomDigit]["answer choices"][1];
        this.thirdChoice = Questions[randomDigit]["answer choices"][2];
        this.fourthChoice = Questions[randomDigit]["answer choices"][3];
        this.rightAnswer = Questions[randomDigit]["answer"];
    }

    updateQuestions() {
        if (this.state.firstRound){
        var randomDigit=this.randomNumber;
        } else {
        var randomDigit = this.props.randomNum;
        }
        this.setState({firstRound: false});
        console.log(randomDigit);
        this.test = Questions.splice(randomDigit, 1)
    }


    handleClick(trigger, answer, question) {
        this.updateQuestions();
        this.count = Questions.length - 1
        if (this.count > 0 ) {
        this.count--;

        if (parseInt(trigger) === answer){
            this.props.handleCorrect(question);
            } 
        else {
            this.props.handleIncorrect(question);
            }
        }
      this.props.onRandomNumChange();   
        };
     
     /////////////////////////////////////////////////////////////
    // add else statement to display the results   

    render() {
        if (!this.state.firstRound) {
            this.updateUI();
        }
        console.log(Questions);
        return (
            <div>
                <h3>{this.displayQuestion}</h3>
                <h4 id="0" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.firstChoice}</h4>

                <h4 id="1" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.secondChoice}</h4>

                <h4 id="2" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.thirdChoice}</h4>

                <h4 id="3" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.fourthChoice}</h4>

                <h5 className="Disapear">Number right:{this.props.correctQuestionArr}</h5>
                <h5 className="Disapear">Number wrong:{this.props.incorrectQuestionArr}</h5>
                <h5>{this.props.randomNum}</h5>
            </div>
        );
    }
}


export default Question;

