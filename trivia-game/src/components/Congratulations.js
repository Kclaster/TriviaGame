import React from 'react';


class Congratulations extends React.Component {
    render () {
        return (
        <div>
            <h1>Congraulations you are the champion.</h1>
            <h2>Your Score: {this.props.score}</h2>
        </div>
        )
    }


}

export default Congratulations;