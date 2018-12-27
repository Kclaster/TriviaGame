import React from 'react';
import Container from './Container';
import Congratulations from './Congratulations';



class App extends React.Component {

    render() {
        return (
            <div>
                <Container />
                <Congratulations />
            </div>
        );
    }
}


export default App;