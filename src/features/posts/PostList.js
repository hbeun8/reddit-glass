import React from 'react'
import { useSelector } from 'react-redux'
//import TodoListItem from './TodoListItem'// Fix this

const selectPosts = state => state.posts

const PostList = () => {
  const posts = useSelector(selectPosts)//How does this work
  //lets your React components read data from the Redux store.

  // since `posts` is an array, we can loop over it
  const renderedListItems = posts.map((post,index)  => {
    return <PostListItem key={index} post={post} />
  })

  //Define PostListItem - i think we already have this. 

  return <ul className="post-list">{renderedListItems}</ul>
}

export default PostList

/*
<PostList> component renders
the useSelector hook will call selectPosts
and pass the entire Reduc State
What ever the selector returns will be returned by the hook to your component. 

*/