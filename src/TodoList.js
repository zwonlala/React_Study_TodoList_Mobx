import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    
  render() {
    const items = this.props.items;
    return (
      <ul>
        {items.map( (line, index ) => (
          <TodoItem 
            contents={line.contents} 
            completed={line.completed} 
            key= { index }
            index = {index}
            delete_btn_clicked={ this.props.delete_btn_clicked }
            done_btn_clicked={ this.props.done_btn_clicked }/>
        ))}
      </ul>
    )
  }
}


export default TodoList;