import React from 'react';

const Card = ({name, id, email}) => {

    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='Robo' src={`https://robohash.org/${id} width="50" height="50"`}/>
        <h2>{name}</h2>
        <h6>{email}</h6>
        </div>
    );
}

export default Card;