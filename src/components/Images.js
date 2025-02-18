import React from 'react';

function Images ({thumbnail, hoverEnlargeImage}) {

    return (
        <>
        <img className='images' src={thumbnail} alt="reddit" onmouseover={hoverEnlargeImage}></img>
        </>
    )
}
export default Images;