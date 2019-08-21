import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    
  render() {
    const lists = this.props.lists;
    return (
      <ul>
        {lists.map(line => (
          <TodoItem 
            contents={line.contents} 
            completed={line.completed} 
            id={line.id}/>
        ))}
      </ul>
    )
  }
}


export default TodoList;