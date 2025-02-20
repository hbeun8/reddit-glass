import React, { useState } from "react";

const Search = ({handleSearch}) => {

  const searchContainer = {
    'display': 'inline-flex',
    'justify-content': 'center',
    'align-items': 'center',
    'margin-top': '20px',
    'margin-bottom': '20px',

  };
  const searchStyle={
    'display': 'inline-flex',
    'margin-left': '20px',
    'margin-top': '10px',
    'padding': '10px',
    'line-height': '1.5',
    'font-size': '1rem',
    'borderRadius': '7px',
  
  };

  const buttonStyle={
    'display': 'inline-flex',
    'margin-left': '20px',
    'line-height': '1.5',
    'font-size': '1rem',
    'borderRadius': '7px',
    'backgroundColor': 'orange',
    'color': 'black',
  };

  const searchTrigger = {
    'display': 'inline-flex',
    'margin': '10px',
    'line-height': '1.5',
    'font-size': '1rem',
  };

  const [query, setQuery] = useState();
  const [trigger, setTrigger] = useState(false);

  const handleClick = (e) => {
    setTrigger(true);
    setTimeout(()=>handleSearch(query), 1000);
  };

return (
 <>
             <search className={searchContainer} >
                <form>
                    <input
                    style={searchStyle}
                    type="search"
                    placeholder = "Search..."
                    value = {query}
                    onChange = {(e) => setQuery(e.target.value)}
                    />
                  <input style={buttonStyle} type="button" value='Search' onClick = {handleClick}/>
                  {trigger&&<span className={searchTrigger}><p >Searching....{query}</p></span>}
                </form>
            </search>
 </>
  );
};

export default Search;

