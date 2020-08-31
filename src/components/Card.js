import React, {Component} from 'react';

class Card extends Component {

    render () {

        const profile = this.props;

        return (
            <div className="gh-profile"
            key={profile.id} 
            style={{
                border: "3px solid grey",
                boxShadow: "5px 7px lightgrey",
                width: "30%",
                height: "75px",
                margin: "auto",
                padding: "10px"
            }}>
                <img alt="" src={profile.avatar_url} 
                style={{
                    float: "left",
                    display: "block",
                    width: "75px"
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
                    }}>{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;