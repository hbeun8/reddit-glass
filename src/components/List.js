import React from 'react';
import Card from './Card';

function List({posts_data}) {
    return (
        <>
        {posts_data.map((post, index) => (
            <>
            <Card index={index} post={post} postsLen={posts_data.length}/>
            </>  
        ))}
        </>
    )
};

export default List;