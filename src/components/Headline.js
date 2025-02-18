import React from 'react';

function Headline ({index, title, postsLen, url}) {

    return (
        <div className="headline">
        <span key={index} className="counter">{index + 1}/{postsLen}: </span> <a href={url}>{title}</a>
        </div>
    )

};

export default Headline;