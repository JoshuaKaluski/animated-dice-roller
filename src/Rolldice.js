import React, {Component} from 'react';
import Die from './Die';
import './Rolldice.css';

//Stateful parent to Die; contains 2 Die and a button to roll them
class Rolldice extends Component {
    static defaultProps = {
        //Sides of a d6
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        //Initial state for each die
        this.state = {die1: 'one', die2: 'one'};

        //Bind this to method roll()
        this.roll = this.roll.bind(this);
    }
    roll() {
        //Shorten syntax by assigning this.props.sides to const faces
        const faces = this.props.sides;

        //Roll 2 dice randomly
        for (let i = 0; i < 2; i++) {
            //Generate a new roll by picking a random element from the array faces
            let newRoll = faces[Math.floor(Math.random() * faces.length)];

            //Set state with new roll using a ternary expression to determine which die to set
            (i === 1) ? this.setState({die2: newRoll}) : this.setState({die1: newRoll});
        }
    }
    render() {
        return (
        <div className="Rolldice">
            <div className="Rolldice-container">
                {/*Two Die Components with state passed to each as a face prop*/}
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
            </div>
            {/*Button to roll dice*/}
            <button onClick={this.roll}>Roll Dice!</button>
        </div>
        );
    }
}

export default Rolldice;