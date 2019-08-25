import React from 'react';

class InputTodo extends React.Component {
    
  render(){
    return (
      <div>
        <input 
            type="text" 
            id="input_input" 
            value={this.props.input} 
            onChange={this.props.input_listener}
            onKeyDown={this.props.input_listener2 }></input>
        <button 
            id="input_btn" 
            onClick={this.props.btn_listener}>Add</button>
      </div>
    )
  }
}

export default InputTodo;
