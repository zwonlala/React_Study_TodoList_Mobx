import React from 'react';
import TodoItem from './TodoItem';
import { observer, inject } from 'mobx-react';

@inject('todoList')

@observer
class TodoList extends React.Component {
    
  render() {
    // const items = this.props.items;
    const {items, delete_btn_clicked, done_btn_clicked} = this.props;

    return (
      <ul>
        {items.map( (line, index ) => (
          <TodoItem 
            contents={line.contents} 
            completed={line.completed} 
            key= { index }
            index = {index}
            delete_btn_clicked={ delete_btn_clicked }
            done_btn_clicked={ done_btn_clicked }/>
        ))}
      </ul>
    )
  }
}


export default TodoList;