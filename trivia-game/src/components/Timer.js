import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 60
        }
    }

    componentDidMount() {
        this.myInterval = setInterval((init) => {
        // this.setState({count: init})
        if (this.state.count > 0) {
        this.setState({
            count: this.state.count - 1
        })
    }
      }, 1000)
    }

    componenetWillUnmount () {
        clearInterval(this.myInterval)
    }


    render() {
            const count = this.state.count
        return (
            <div>
                <h3>Time Remaining in Game: {count}</h3>
            </div>
        );
    }
}

export default Timer;