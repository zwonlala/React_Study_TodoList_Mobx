import React from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class App extends React.Component{
  state = {
    inputtodo_input:"",
    lists : [],
    // id_number: 0 
  }

  input_btn_clicked = (e) => {
    const text = this.state.inputtodo_input;
    // const new_id = this.state.id_number + 1;
    const new_lists = [{contents: text, completed: false}];

    this.setState(current => ({ lists: current.lists.concat(new_lists)}));
  }

  input_input_changed = (e) => {
    // console.log("input_input_changed()");
    const new_contents = e.target.value;
    this.setState({ inputtodo_input: new_contents });
    // console.log(new_contents);
  }

  delete_btn_clicked = (e) => {
    const clicked_index = Number(e.target.parentElement.getAttribute("index"));
    
    const old_lists = this.state.lists;
    const old_lists1 = old_lists.slice(0, clicked_index);
    const old_lists2 = old_lists.slice(clicked_index+1, old_lists.length);
    const new_lists = old_lists1.concat(old_lists2);
   
    this.setState({ lists: new_lists});
  }

  render(){
    return <div>
      <InputTodo 
        input={ this.state.inputtodo_input } 
        btn_listener={ this.input_btn_clicked } 
        input_listener={ this.input_input_changed }/>

      <TodoList lists={ this.state.lists } delete_btn_clicked={ this.delete_btn_clicked}/>    
    </div>;
  }
}


export default App;
