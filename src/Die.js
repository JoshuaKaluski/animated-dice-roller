import React, {Component} from 'react';
import './Die.css';

//Stateless Component representing a Die
class Die extends Component {
    render() {
        //Create variable cls to hold the class names; icon class determined by prop: face
        let cls = `Die fas fa-dice-${this.props.face}`;

        //Return one Die with the class determined by cls
        return <i className={cls} />
    }
}

export default Die;