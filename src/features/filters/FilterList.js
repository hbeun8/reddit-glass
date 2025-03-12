import React from 'react';
import { useSelector} from 'react-redux';
//Add Filter List Item. from './Filters'

const selectTitles = state => state.filters.titles;

const TitleList = () => {
    const todos = useSelector(selectTitles)

    // since `Titlelists` is an array, we can loop over it
    const renderedListItems = posts.map(post => {
    return <TodoListItem key={todo.id} todo={todo} />
})

return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList


/*
write small selector function
//completed
// filter(todo => todo.completed)
// return completedTodo.length
// so, selectors can return values
// from the redux store state, and also return 
// derived values based on that state as well

*/