import React, { useState } from "react";

const Search = ({handleSearch}) => {

  const searchStyle={
    display: 'block',
    'margin': '20px',
    'line-height': '1.5',
    'font-size': '1rem',
    'borderRadius': '7px',
  };

  const buttonStyle={
    display: 'block',
    'margin-left': '20px',
    'line-height': '1.5',
    'font-size': '1rem',
    'borderRadius': '7px',
    backgroundColor: 'orange',
    color: 'black',
  };

  const [query, setQuery] = useState();

  const handleClick = (e) => {
    handleSearch(query);
  };

return (
 <>
             <search className="search" >
                <form>
                    <input
                    style={searchStyle}
                    type="search"
                    placeholder = "Search..."
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    />
                  <input style={buttonStyle} type="button" value='Search' onClick = {handleClick}/>
                </form>

            </search>
 </>
  );
};

export default Search;

