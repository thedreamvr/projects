import React, {Component} from 'react';

class Application extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(props, state){

    }

    componentDidMount(props, state){
        console.log("Mounted with", props, state);
    }

    componentWillReceiveProps(props){

    }

    componentWillUpdate(props, state){
        if(this.props.name !== props.name){

        }
    }

    componentDidUpdate(props, state){
        
    }

    render(){
        let name = "Courtney";

        return (
            <h1>Hello {name}, I love you</h1>
        );
            
        
    }
}

export default Application;