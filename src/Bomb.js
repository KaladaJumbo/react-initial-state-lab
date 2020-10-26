// your Bomb code here
import React, {Component} from 'react';

export default class Bomb extends Component {
    state = {
        secondsLeft: this.props.initialCount
    }

    //call func here ... 

    render () {
        let bob = "";

        if(this.state.secondsLeft == 0 ){
            bob = "Boom!"
        }
        else{
            bob = this.state.secondsLeft + " seconds left before I go boom!"
    
        }

        return (
            
            <div>
                {bob}
            </div>
        )
    }

}

