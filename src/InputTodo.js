import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mbox-react';

@inject('todoList')

@observer
class InputTodo extends React.Component {
    
  render(){
    const { inputtodo_input, input_input_changed, input_btn_clicked } = this.props;

    return (
      <div>
        <input 
            type="text" 
            id="input_input" 
            value={inputtodo_input}
            onChange={input_input_changed}
            onKeyDown={ this.input_input_handleKeyDown }></input>
        <button 
            id="input_btn" 
            onClick={input_btn_clicked}></button>
      </div>
    )
  }

  input_input_handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.input_listener();
    }    
  }
}

export default InputTodo;
