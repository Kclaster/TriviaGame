import React from 'react';
import '../style/Question.css'

export default class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.Questions.length);
        if (this.props.Questions.length > 0) {
        this.randomNumber = Math.floor(Math.random() * (this.props.Questions.length - 1));

        this.state = {
            firstRound: true,
            randomNum: this.randomNumber,
        };

        const randomStart = this.randomNumber;
        this.questionsRendered = [];


        this.id = this.props.Questions[randomStart]["correct answer"];
        this.handleClick = this.handleClick.bind(this);
        this.question = this.props.Questions[randomStart];
        this.displayQuestion = this.props.Questions[randomStart].question;
        this.firstChoice = this.props.Questions[randomStart]["answer choices"][0];
        this.secondChoice = this.props.Questions[randomStart]["answer choices"][1];
        this.thirdChoice = this.props.Questions[randomStart]["answer choices"][2];
        this.fourthChoice = this.props.Questions[randomStart]["answer choices"][3];
        this.rightAnswer = this.props.Questions[randomStart]["answer"];
    };
    
    };


    updateUI = () => {
        let randomDigit = this.props.randomNum;
        this.question = this.props.Questions[randomDigit];
        this.displayQuestion = this.props.Questions[randomDigit].question;
        this.firstChoice = this.props.Questions[randomDigit]["answer choices"][0];
        this.secondChoice = this.props.Questions[randomDigit]["answer choices"][1];
        this.thirdChoice = this.props.Questions[randomDigit]["answer choices"][2];
        this.fourthChoice = this.props.Questions[randomDigit]["answer choices"][3];
        this.rightAnswer = this.props.Questions[randomDigit]["answer"];
    }

    updateQuestions() {
        if (this.state.firstRound){
        var randomDigit=this.randomNumber;
        } else {
            randomDigit = this.props.randomNum;
        }
        this.setState({firstRound: false});
        this.test = this.props.Questions.splice(randomDigit, 1)
    }


    handleClick(trigger, answer, question) {
        this.count = this.props.Questions.length
        if (this.count > 0 ) {
        this.updateQuestions();
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
     

    render() {
        if (this.props.Questions.length > 0) {

        if (!this.state.firstRound) {
            this.updateUI();
        } else {

        }
    };
        return (
            <div>
                <h3 className="displayQuestion">{this.displayQuestion}</h3>
                <div className="question-container">

                    <div className="ind-question a">
                        <h4 id="0" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.firstChoice}</h4>
                    </div>

                    <div className="ind-question b">
                        <h4 id="1" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.secondChoice}</h4>
                    </div>

                    <div className="ind-question c">                  
                        <h4 id="2" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.thirdChoice}</h4>
                    </div>

                    <div className="ind-question d">
                        <h4 id="3" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.fourthChoice}</h4>
                    </div>
                </div>

                <h5 className="Disapear">Number right:{this.props.correctQuestionArr.length}</h5>
                <h5 className="Disapear">Number wrong: {this.props.incorrectQuestionArr.length}</h5>
            </div>
        );
    }
}

