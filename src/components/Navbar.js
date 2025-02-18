import React from 'react';

function Navbar({navitems}) {

const navList = navitems.map((navitem,i) =><li key={i}>{navitem}</li>);
      

    return (
        <>
            <ul>{navList}</ul>
        </>
    )
};

export default Navbar;