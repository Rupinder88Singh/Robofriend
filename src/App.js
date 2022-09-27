import React from 'react';
import CardArray from './CardArray';

import SearchBox from './SearchBox';
import './style.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robts : [],
            searchfield : ''
        };
    }

   
    searchRobot = (event) => {
        this.setState({searchfield :event.target.value});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robts : users}));
    }
    render(){
        const robofil= this.state.robts.filter(robts => {
        return robts.name.toLowerCase().startsWith(this.state.searchfield.toLocaleLowerCase())});
        
        if(this.state.robts.length === 0){
            return(<h1>Loading</h1>);
        }
        else{
    return (
        <div className='tc'>
         <h1> Robo Friends</h1>
         <SearchBox searchrobo={this.searchRobot}/>   
         <Scroll>
        <ErrorBoundary>
        <CardArray robo={robofil}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );
        }
    }
}

export default App ;