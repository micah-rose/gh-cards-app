import React, {Component} from 'react';

const testData = [
    {name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "Facebook"},
    {name: "Sophie Alpert",
    avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
    company: "Facebook"},
    {name: "Sebastian Markbage",
    avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
    company: "Facebook"}
];

class Card extends Component {

    render () {

        const profile = testData[0];

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