import React from 'react';


class Reset extends React.Component {

    onResetClick() {
        this.props.handleResetClick();
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onResetClick()}>Reset Game</button>
            </div>
        )
    }
}


export default Reset;