import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    
  render() {
    const lists = this.props.lists;
    return (
      <ul>
        {lists.map( (line, index ) => (
          <TodoItem 
            contents={line.contents} 
            completed={line.completed} 
            key= { index }
            index = {index}
            delete_btn_clicked={ this.props.delete_btn_clicked }/>
        ))}
      </ul>
    )
  }
}


export default TodoList;