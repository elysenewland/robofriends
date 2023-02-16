import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css"
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";
;
// Create states in our app for users in robot array and input in search field. Must use constructor
class App extends Component {
    constructor() {
        // Super is used to call the constructor of its parent class
        super()
        this.state = {
            // whatever we want our state to have
            robots: [ ],
            searchField:" "
        }
    }

    // Fetch the user data formthe url, set users equal to the user from the url/robot array
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}));
    }

    // Event to change the state of the searchField based on user's input
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    // Filter the robots based on what has been input by the user in the searchfield
    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }) 

        // Add loading state
        return !robots.length ?
            <h1>Loading</h1> :
            (
            // Return the robots that were filtered based on the user's input. Scroll component added to keep search bar at top of page when scrolling.
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div> 
            );
        }
    }             

export default App;