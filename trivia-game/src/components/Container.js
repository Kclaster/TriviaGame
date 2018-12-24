import React from 'react';
import Timer from './Timer';
import Question from './Question';


class Container extends React.Component {
    render() {
        return (
            <div>
                <h1>Totally Trivial Trivia!</h1>
                <Timer />
                <Question />
            </div>
        );
    }
}



export default Container;