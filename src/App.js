import React, { Component } from "react";
import { Table, Flag } from './components';

class App extends Component{

    render(){
        return (
            <div>

                <h1>App</h1>
                <Flag />
                <Table /> 

            </div>
        )
    }
}

export default App;