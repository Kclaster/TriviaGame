import React from 'react';

class Timer extends React.Component {

    render() {
            const count = this.props.count
        return (
            <div>
                <h3>Time Remaining in Game: {count}</h3>
            </div>
        );
    }
}

export default Timer;