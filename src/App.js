import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor() {
        super();
        this.state = {
            userLogin: '',
        }

        this.handelClick = this.handelClick.bind(this);
    }

    handelClick() {
        axios.get('https://api.github.com/users/JuraPapunitsky')
            .then(response => this.setState({userLogin: response.data.login}));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Axios Request</h1>
                </header>
                <div className="button_container">
                    <button className="button" onClick={this.handelClick}>Click Me</button>
                    <p>{this.state.userLogin}</p>
                </div>
            </div>
        );
    }
}

export default App;
