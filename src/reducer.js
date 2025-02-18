const initialState = {
//these will be dynamically populated
  posts: [
    { id: 0, text: 'Learn React', read: true, favorite: true, color:'', author:'', subreddit:'', type:'' },
    { id: 1, text: 'Learn Redux', read: false, favorite: false, color: 'purple', author:'', subreddit:'', type:'' },
    { id: 2, text: 'Build something fun!', read: false, favorite: false, color: 'blue', author:'', subreddit:'', type:'' }
  ],
//these will be dynamically populated
  filters: {
    status: 'Active',
    favorite: [true, false],
    read: [true, false],
    colors: ['red', 'blue'],
    authors: ['author1', 'author2'],
    subreddits: ['subreddit1', 'subreddit2'],
    types: ['type1', 'type2']
  }
}

function nextPostId(posts) {
  const maxId = posts.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

// Use the initialState as a default value
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
    case 'posts/postToggled': {
      return {
        // Again copy the entire state object
        ...state,
        // This time, we need to make a copy of the old todos array
        posts: state.posts.map(post => {
          // If this isn't the todo item we're looking for, leave it alone
          if (post.id !== action.payload) {
            return post
          }

          // We've found the todo that has to change. Return a copy:
          return {
            ...post,
            // Flip the completed flag
            read: !post.read
          }
        })
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}