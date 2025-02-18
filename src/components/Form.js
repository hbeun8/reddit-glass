import React, {} from 'react';

export function Form () {

    function handleFormSubmit (form) {

    }
    
    return (
        <>
        <form id='myform' name='myform' action="xhr2.php">
            <input type='text' name='uname' value='asmith' />
            <input type='number' name='id' value='33333'/>
            <input type='submit' onclick={handleFormSubmit}/>
        </form>
        </>
    );
}