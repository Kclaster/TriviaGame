import React from 'react';


let questions = [
{
    "question": "Where was the entire trilogy of the 'Lord of the Rings' filmed?",
    "answer choices": ["America", "Africa", "New Zealand", "Cuba"],
    "correct answer": 2,
    "explanation": "Frodo tells Merry that he needs to get to Bree, so Merry tells him \"Buckleberry Ferry\"."
},
//
{
    "question": "Which is not one of Galdalf's many nicknames?",
    "answer choices": ["The Grey Pilgrim", "Gandalf Greyhame","Gandalf Stormcrow", "Flame of Udun",],
    "answer": 3,
    "explanation": "The mountains, the hill tops, the trees and all the other scenery of this location created J.R.R. Tolkien's land of Middle Earth. It took four years to go to all the locations in New Zealand to create the world of Middle Earth but Peter Jackson and his crew made it through the years and finally finished the trilogy in 2003."
},
//
{
    "question": "How does Frodo know Sam?",
    "answer choices": ["Sam is Frodo's brother.", "Sam is Frodo's gardener.", "Sam and Frodo play paintball together on Sunday.", "Sam and Frodo arn't friends."],
    "answer": 1,
    "explanatin": "The Old English words for 'hole dweller' are hol bytla. This is thought to be the origins for the word Hobbit."
},
//
{
    "question": "The girls all think I'm lovely, My locks are bright and blonde, And up until quite recently, Of Dwarves I was not fond. Who am I?",
    "answer choices": ["Legolas", "Arwen", "Tom Bombadil", "Harry Potter"],
    "answer":0,
    "explanation": "Legolas was the blonde haired, blue-eyed Elf who was lethal with a bow and charming with his looks."
},
//
{
    "question":"What two animals are seen when the Hobbits are in the 'Inn of the Prancing Pony?",
    "answer choices": ["A dog, and a rat", "A swine and a ferret", "A cat and a ferret", "A rat and a ferret"],
    "answer":2,
    "explanation": "The black cat and the ferret are only on screen for a few seconds."
},
//
{
    "question": "I sit on my throne, looking sick and old, But with help from Gandalf, again I feel bold. Who am I?",
    "answer choices": ["Eowyn", "Bard", "Haldir", "Theoden"],
    "answer": 3,
    "explanation": "King Theoden finds himself under a spell of Saruman which causes his appearence to make him look much older than he really is. When Gandalf the White arrives in Rohan, he releases Theoden from the spell."
},
//
{
    "question":"I am Boromir's father and the Steward of Gondor.",
    "answer choices": ["Demethor", "Denenthor", "Denethore", "Denethor"],
    "answer": 3,
    "explanation":"Boromir was sent to Rivendell by Denethor to find answers about a dream he had. Then Boromir joined the Company."
},
{
    "question": "If I take one more step, it'll be the farthest away from home I've ever been.\" This is undoubtedly what the troops of Alexander the Great thought after the Battle of Hydaspes. But in \"The Fellowship of the Ring\", one of the main characters utters these words. Who complains in this way, only to wander further and further from home?",
    "answer choices": ["Merry", "Sam", "Pippin","Frodo"],
    "answer": 1,
    "explanation": "The quote comes from \"Fellowship of the Ring\", when Frodo and Sam have just set out for Bree. Alas for Sam, but he'll have to walk across almost the entire continent before returning home.Sean Astin plays Samwise Gamgee, gardener and great companion to Frodo (Elijah Wood). Later on, they'll meet the Elf Legolas Greenleaf (role by Orlando Bloom). Saruman the White is a wizard (portrayed by Christopher Lee), who defected into the camp of Sauron. Thorin Oakenshield is not in \"The Lord of the Rings\". In the prequel trilogy \"The Hobbit\", this Dwarf is portrayed by Richard Armitage. Alexander the Great was confronted with mutinous soldiers after the Battle of Hydaspes (326 BC), near the Indian border. His troops found crossing half a continent more than enough. Alexander gave in and started the long voyage home, but he died before returning to Macedonia and Greece."
},
//
{
    "question": "From where did Andy Serkis get his inspiration for his character's trademark \"Gollum, Gollum\" cough?",
    "answer choices": ["A cat coughing up a furball", "An episode of the munsters", "Stephen King","It just happened"],
    "answer": 0,
    "explanation": "There isn't anything to explain here. Dude saw a cat. Dude mimicked a cat."
},
//
{
    "question": "In which \"Lord Of The Rings\" movie do we hear the line, \"Release the river\"?",
    "answer choices": ["Fellowship of the Ring", "Hobbit", "Two Towers", "Return of the King"],
    "answer":2,
    "explanation": "Treebeard says it when the Ents are attacking Isengard. They break the dam and the water puts out the fires."
}
]

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.randomNumber = Math.floor(Math.random() * 10);
        this.count = questions.length

        this.state = {
            correctQuestion: [],
            incorrectQuestion: [],
            correctAnswer: [],
            incorrectAnswer: [],
            randomNum: this.randomNumber,
        };


        this.id = questions[this.state.randomNum]["correct answer"];
        this.handleClick = this.handleClick.bind(this);
        this.question = questions[this.state.randomNum];
        this.displayQuestion = questions[this.state.randomNum].question;
        this.firstChoice = questions[this.state.randomNum]["answer choices"][0];
        this.secondChoice = questions[this.state.randomNum]["answer choices"][1];
        this.thirdChoice = questions[this.state.randomNum]["answer choices"][2];
        this.fourthChoice = questions[this.state.randomNum]["answer choices"][3];
        this.rightAnswer = questions[this.state.randomNum]["answer"];
    }

    updateQuestions() {
        console.log(questions);
        questions.splice(this.state.randomNum, 1)
    }

    newRandomNumber() {
        console.log(questions);
        if (this.count >= 0) {
        this.setState({randomNum: Math.floor(Math.random() * this.count)});
        this.count--;
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state.randomNum);
        console.log(questions)
        this.question = questions[this.state.randomNum];
        this.displayQuestion = questions[this.state.randomNum].question;
        this.firstChoice = questions[this.state.randomNum]["answer choices"][0];
        this.secondChoice = questions[this.state.randomNum]["answer choices"][1];
        this.thirdChoice = questions[this.state.randomNum]["answer choices"][2];
        this.fourthChoice = questions[this.state.randomNum]["answer choices"][3];
        this.rightAnswer = questions[this.state.randomNum]["answer"];
        }
    }
    

    handleClick(trigger, answer, question) {
        if (parseInt(trigger) === answer){
            const {correctQuestion} = this.state;
            const {correctAnswer} = this.state;

            this.setState({
                correctQuestion: [...correctQuestion, question],
                correctAnswer: [...correctAnswer, answer]
            })

        } else {
            const {incorrectQuestion} = this.state;
            const {incorrectAnswer} = this.state;

            this.setState({
                incorrectQuestion: [...incorrectQuestion, question],
                incorrectAnswer: [...incorrectAnswer, answer]
            })
        }
        this.updateQuestions();
        this.newRandomNumber();
    };



    render() {
        return (
            <div>
                <h3>{this.displayQuestion}</h3>
                <h4 id="0" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.firstChoice}</h4>

                <h4 id="1" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.secondChoice}</h4>

                <h4 id="2" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.thirdChoice}</h4>

                <h4 id="3" onClick={(e) => {this.handleClick(e.currentTarget.id, this.rightAnswer, this.displayQuestion)}}>{this.fourthChoice}</h4>

                <h5 className="Disapear">Number right:{this.state.correctQuestion}</h5>
                <h5 className="Disapear">Number wrong:{this.state.incorrectQuestion}</h5>
                <h5>{this.state.randomNum}</h5>
            </div>
        );
    }
}


export default Question;


//on click, page is refreshing but the same question can reapear. sometimes their is an error of undefined. 