import React from 'react';

function Filters({posts, handleFilter}) {

    posts?console.log("Filter is called and posts is populated"):console.log('data is empty');

    return (
        <div>
            
            <div className='filter'>
            <h3><strong>Drop-Down Filter (select one)</strong></h3>
                <label htmlFor="title">Title:  </label>
                <select onChange={(e) =>handleFilter(e.target.value, 'title') } className="filterItem" name="title" id="title">
                    {posts.map((post, key) => (
                        <option key={key} value={post.data.title}>
                            {post.data.title}
                        </option>
                    ))}
                    <option value="default" selected>Choose one</option>
                </select>
                <label htmlFor="author">Author:  </label>
                <select onChange={(e) =>handleFilter(e.target.value, 'author')} className="filterItem" name="author" id="author">
                    {posts.map((post, key) => (
                        <option key={key} value={post.data.author}>
                            {post.data.author}
                        </option>
                    ))}
                    <option value="default" selected>Choose one</option>
                </select>
                <label htmlFor="subreddit">Subreddit:  </label>
                <select onChange={(e) =>handleFilter(e.target.value, 'subreddit')} className="filterItem" name="subreddit" id="Subreddit">
                    {posts.map((post, key) => (
                        <option key={key} value={post.data.subreddit_name_prefixed}>
                            {post.data.author}
                        </option>
                    ))}
                    <option value="value" selected>Choose one</option>
                </select>
                
            </div>
        </div>
    );
    
}

export default Filters;