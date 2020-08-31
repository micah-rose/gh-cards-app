import React, {Component} from 'react';

class Form extends Component {
    render () {
        return (
            <div>
            <form action="">
                <input type="text" placeholder="GitHub Username" />
                <button>Add Card</button>
            </form>
            <br />
            </div>
        )
    }
}

export default Form;