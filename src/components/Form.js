import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    state = { userName: ''};

    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await 
            axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data)
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