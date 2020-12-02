import React, { Component } from "react";
import { Tables, Flag } from './components';
import { handlePlaces } from "./Data/Data";

class App extends Component{

    state = {
        places: null
    }

    async componentDidMount(){
    const places = await handlePlaces();
    console.log(places);
    const p = JSON.stringify(places);
    console.log(p);
    this.setState({places: p});
    }

    render(){


        return (
            <div>

                <h1>App</h1>
                <Flag />
                <Tables places = {this.state.places}/> 

            </div>
        )
    }
}

export default App;