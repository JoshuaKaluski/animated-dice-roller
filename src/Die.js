import React, {Component} from 'react';
import './Die.css';

//Stateless Component representing a Die
class Die extends Component {
    render() {
        //Create variable cls to hold the class names; icon classes determined by props: face, rolling
        let cls = `Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ''}`;

        //Return one Die with the class determined by cls
        return <i className={cls} />
    }
}

export default Die;