import React, {Component, createRef} from 'react';

class Form extends Component {

    state = { userName: ''};

    handleSubmit = (event) => {
        event.preventDefault();
        console.log()
    }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                value={this.state.userName}
                onChange={event => this.setState({ userName: event.target.value})}
                placeholder="GitHub Username" 
                required />
                <button>Add Card</button>
            </form>
            <br />
            </div>
        )
    }
}

export default Form;