import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"

// Initialize app with constructor and super. Set state to include empty robot friends array and empty string for the Search Field
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField:""
        }
    }

    // Fetch the user user data from the API. Set users equal to the users from API
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots: users}));
    }

    // Set state to reflect the user's input in the Search Field
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    // Filter the robots based on what has been input by the user in the Search Field
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }) 

        // Add loading state
        return !robots.length ?
            <h1>Loading</h1> :
            (
            // Components called
            <div className="tc">
                <header>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                </header>
                <main>
                    <CardList robots={filteredRobots}/>
                </main>
            </div> 
            );
    }
}             

export default App;