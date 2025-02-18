import React from 'react';

function Title () {

    const style = {
        margin: '20px',
        color: 'transparent',
        backgroundImage: 'linear-gradient(90deg,#7209d4, #2832d4 33%, #00a5b2)', 
        display: 'inline',
        backgroundClip:'text'
    };
    return (
        <>
        <h1 style={style}>Reddit Glass</h1>
        </>
    )
}

export default Title;