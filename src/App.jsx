import * as React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.buttonClick = this.buttonClick.bind(this);
        this.buttonClick2 = this.buttonClick2.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React Counter: {this.state.counter}</h1>
                    <button onClick={this.buttonClick}>Increment</button>
                    <button onClick={this.buttonClick2}>Decrement</button>
                </header>
                <p className="App-intro">
                Hello {this.props.name}
                </p>
            </div>
        );
    }

    buttonClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    buttonClick2() {
        this.setState({
            counter: this.state.counter - 1
        });
    }
}

App.propTypes = {
    name: PropTypes.string.isRequired
};

export default App;
