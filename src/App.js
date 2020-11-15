import React, { Component } from "react";
import { Table, Flag } from './components';
import { handlePlaces } from "./Data/Data";

class App extends Component{

    state = {
        places: null
    }

    async componentDidMount(){
    const places = await handlePlaces();
    this.setState({places: places});
    console.log(this.state);
    }

    render(){


        return (
            <div>

                <h1>App</h1>
                <Flag />
                <Table countries = {this.state.places}/> 

            </div>
        )
    }
}

export default App;