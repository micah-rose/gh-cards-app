import React from 'react';
import Card from './Card';

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

const CardList = (props) => (
    <div>
        {testData.map(profile => <Card {...profile}/>)}
    </div>
)

export default CardList;