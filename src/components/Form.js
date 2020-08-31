import React, {Component, createRef} from 'react';

class Form extends Component {

    userNameInput = createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.userNameInput.current.value)
    }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="GitHub Username" 
                ref={this.userNameInput} required />
                <button>Add Card</button>
            </form>
            <br />
            </div>
        )
    }
}

export default Form;