import React from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class App extends React.Component{
  state = {
    inputtodo_input:"",
    lists : [],
    id_number: 0 
  }

  input_btn_clicked = (e) => {
    const text = this.state.inputtodo_input;
    const new_id = this.state.id_number + 1;
    const new_lists = [{contents: text, completed: false, id: new_id}];

    this.setState(current => ({ lists: current.lists.concat(new_lists)}));
  }

  input_input_changed = (e) => {
        // console.log("input_input_changed()");
        const new_contents = e.target.value;
        this.setState({ inputtodo_input: new_contents });
        // console.log(new_contents);
  }

  done_btn_clicked = (e) => {

  }

  render(){
    return <div>
      <InputTodo 
        input={ this.state.inputtodo_input } 
        btn_listener={ this.input_btn_clicked } 
        input_listener={ this.input_input_changed }/>
        
      <TodoList lists={ this.state.lists }/>    
    </div>;
  }
}


export default App;
