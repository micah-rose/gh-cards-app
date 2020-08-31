import React, {Component} from 'react';

class Form extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="GitHub Username" required />
                <button>Add Card</button>
            </form>
            <br />
            </div>
        )
    }
}

export default Form;