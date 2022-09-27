import React from 'react';
import Card from './Card';


const CardArray = ({ robo }) => {
    
    const CardList = robo.map((Users) => {
        return (<Card key={Users.id} name={Users.name} id={Users.id} email={Users.email}/>);
    });
    return (
        <div>
        {CardList}
        </div>
    );
}

export default CardArray ;