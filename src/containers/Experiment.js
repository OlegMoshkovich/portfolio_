import React, { Component } from 'react';

class Experiment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            state: ''
        }
        //put ref into the constructor
        this.textInput = React.createRef();
    }
    focusTextInput = () => {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        console.log(this.textInput.current)
        this.textInput.current.focus();

    }

    render() {
        return (
            // when ref is passed to the element in render --
            // the reference to the element becomes accessible at the current attribute of thee ref
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input type='text' ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />

            </div >
        )
    }
}

// class Experiment extends Component {
//     constructor(props) {
//         super(props);
//         this.textInput = React.createRef();
//     }

//     componentDidMount() {
//         this.textInput.current.focusTextInput();
//     }

//     render() {
//         return (
//             <FocusedComponent ref={this.textInput} />
//         );
//     }
// }

export default Experiment