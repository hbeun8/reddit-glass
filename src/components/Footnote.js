import React from 'react';

function Footnote({index, ups, comments, createdAt, author, subreddit, postType, subscibers}){

    return (
        <>
            <div className="footnote">
                    <span key={index} className="filters">Like: {ups}k</span>
                    <span key={index} className="filters">Comments: {Math.ceil(comments/1000)}k</span>
                    <span key={index} className="filters">Created: {createdAt}</span>
                    <span key={index} className="filters">Author: {author}</span>
                    <span key={index} className="filters">Subreddit: {subreddit}</span>
                    <span key={index} className="filters">Type: {postType}</span>
                    <span key={index} className="filters">Subscribers: {subscibers}</span>       
            </div>
        </>
    )
};

export default Footnote;