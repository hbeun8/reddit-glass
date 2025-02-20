import React, {useState, useEffect} from 'react';

function Text({index,text}) {
    const [isText, setisText] = useState(false);
    const [readmore, setReadmore] = useState(true);

    useEffect(() => {
        text?setisText(true):setisText(false);
    }, );
 
    return (
        <>
        <p key={index} className={readmore?'text':'textReadmore'}>{text}</p>
        {isText && <input 
        value="Read more" 
        type='button' 
        onClick={() => {!readmore?setReadmore(true):setReadmore(false)}}
        style={{
            backgroundColor : 'green', 
            textAlign: 'center', 
            display: 'inline'
            }}
        />}
        </>
    )
};

export default Text;

