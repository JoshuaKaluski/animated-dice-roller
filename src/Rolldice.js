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
        this.state = {
            //Initial face for each die
            die1: 'one', die2: 'one',
            //Boolean representing if the dice are being rolled
            rolling: false
        };

        //Bind this to method roll()
        this.roll = this.roll.bind(this);
    }
    roll() {
        //Shorten syntax by assigning this.props.sides to const faces
        const faces = this.props.sides;

        //Setting rolling to true before rolling new dice as a callback function
        this.setState({rolling: true}, () => {
            //Roll 2 dice randomly
            for (let i = 0; i < 2; i++) {
                //Generate a new roll by picking a random element from the array faces
                let newRoll = faces[Math.floor(Math.random() * faces.length)];

                //Set state with new roll using a ternary expression to determine which die to set
                (i === 1) ? this.setState({die2: newRoll}) : this.setState({die1: newRoll});
            }
        });

        //Wait 1 second then set rolling to false
        setTimeout(() => {
            this.setState({rolling: false})
        }, 1000)
    }
    render() {
        return (
        <div className="Rolldice">
            <div className="Rolldice-container">
                {/*Two Die Components with state passed to each as a face prop*/}
                <Die face={this.state.die1} />
                <Die face={this.state.die2} />
            </div>
            {/*Button to roll dice; disabled when rolling*/}
            <button onClick={this.roll} disabled={this.state.rolling}>
                {/*Text changes depending on the value of rolling*/}
                {(this.state.rolling) ? "Rolling..." : "Roll Dice!"}
            </button>
        </div>
        );
    }
}

export default Rolldice;