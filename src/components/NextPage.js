import React from 'react';

function NextPage({clickHandler}) {

    return (
        <>
        <input 
        value="Load more" 
        type='button' 
        onClick={clickHandler} 
        style={{
            backgroundColor : 'green', 
            textAlign: 'center', 
            display: 'inline'
            }}/>

        </>
    )
}

export default NextPage;