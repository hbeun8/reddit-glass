import React from 'react';

function Images ({thumbnail, hoverEnlargeImage}) {

    return (
        <>
        <img className='images' src={thumbnail} alt="Imagereddit" onmouseover={hoverEnlargeImage}></img>
        </>
    )
}
export default Images;