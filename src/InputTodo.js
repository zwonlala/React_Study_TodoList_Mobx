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
            onKeyDown={ this.input_input_handleKeyDown }></input>
        <button 
            id="input_btn" 
            onClick={this.props.btn_listener}>Add</button>
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
