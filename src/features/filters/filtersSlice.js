const initialState = {
  filters: {
    titles: [],
    authors: [],
    subreddits: []
  }
  }
  
  export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
      case 'filters/titleFilterChanged': {
        return {
          // Again, one less level of nesting to copy
          ...state,
          title: action.payload
        }
      }
      default:
        return state
    }
  }

