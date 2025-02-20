
import {posts} from '../../data/posts';//Fix this

const initialState = {posts: posts, placeholder: "empty"};

function nextPostId(posts) {
    const maxId = posts.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case 'posts/textAdded': {
        // We need to return a new state object
        return {
          // that has all the existing state data
          ...state,
          // but has a new array for the `todos` field
          posts: [
            // with all of the old todos
            ...state.posts,
            // and the new todo object
            {
              // Use an auto-incrementing numeric ID for this example
              id: nextPostId(state.posts),
              text: action.payload,
              read: false,
              favorite: false,
              color: '',
              author: '',
              subreddit: '',
              type: ''
            }
          ]
        }
      }
      case 'posts/readToggled': {
        return {
          // Again copy the entire state object
          ...state,
          // This time, we need to make a copy of the old posts array
          posts: state.posts.map(post => {
            // If this isn't the todo item we're looking for, leave it alone
            if (post.id !== action.payload) {
              return post
            }
            // We've found the post that has to change. Return a copy:
            return {
              ...post,
              // Flip the read flag
              read: !post.read
            }
          })
        }
      }
      //this is the template for changes
      case 'posts/colorAdded': {
        return {
          // Copy the whole state
          ...state,
          // Overwrite the color value
          colors: {
            ...state.colors,
            // Add the new color
            status: action.payload
            }
          }
        }
        //this is the template for changes
        case 'posts/favoriteAdded': {
          return {
            // Copy the whole state
            ...state,
            // Overwrite the color value
            favorite: {
              ...state.favorite,
              // Add the new color
              status: action.payload
              }
            }
        }
        
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }