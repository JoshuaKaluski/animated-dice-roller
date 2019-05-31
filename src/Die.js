import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let cls = `Die fas fa-dice-${this.props.face}`;
        return <i className={cls} />
    }
}

export default Die;