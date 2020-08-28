import React, {Component} from 'react';

class Card extends Component {
    render () {
        return (
            <div className="gh-profile" 
            style={{
                border: "3px solid grey",
                boxShadow: "5px 7px lightgrey",
                width: "30%",
                height: "75px",
                margin: "auto",
                padding: "10px"
            }}>
                <img alt="" src="https:placehold.it/75" 
                style={{
                    float: "left",
                    display: "block"
                }}/>
                <div className="info" 
                style={{
                    float: "left",
                    padding: "10px",
                    textAlign: "left"
                }}>
                    <div className="name"
                    style={{
                        fontWeight: "bold",
                        fontSize: "20px"
                    }}>Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        )
    }
}

export default Card;