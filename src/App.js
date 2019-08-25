import React from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class App extends React.Component{
  state = {
    inputtodo_input:"",
    items : [],
  }

  // input_btn_clicked = (e) => {
  //   const text = this.state.inputtodo_input;
  //   const new_lists = [{contents: text, completed: false}];
  //   this.setState(current => ({ lists: current.lists.concat(new_lists)}));
  // }

  //junwoo ver.
  input_btn_clicked = (e) => {
    this.setState({
      items: [
        ...this.state.items,
        {
          contents: this.state.inputtodo_input,
          completed: false,
        },
      ],
    });

    //after new item is added to state clear the input
    this.setState({
      inputtodo_input: ""
    });
  }


  input_input_changed = (e) => {
    //if user type "Enter" key then input the contents
    if (e.target.key === "Enter"){
      this.input_btn_clicked()
    }
    
    const new_contents = e.target.value;
    this.setState({ 
      inputtodo_input: new_contents 
    });
  }


  // delete_btn_clicked = (e) => {
  //   const clicked_index = Number(e.target.parentElement.getAttribute("index"));
  //   const old_lists = this.state.lists;
  //   const old_lists1 = old_lists.slice(0, clicked_index);
  //   const old_lists2 = old_lists.slice(clicked_index+1, old_lists.length);
  //   const new_lists = old_lists1.concat(old_lists2);
  //   this.setState({ lists: new_lists});
  // }

  //junwoo ver.
  delete_btn_clicked = index => {
    const { items } = this.state;
    this.setState({
      items: [...items.slice(0, index), ...items.slice(index+1, items.length)],
    });
  }


  // done_btn_clicked = (e) => {
  //   const clicked_index = Number(e.target.parentElement.getAttribute("index"));
  //   const new_items = this.state.items;
  //   const new_completed = !new_items[clicked_index].completed;
  //   new_items[clicked_index]["completed"] = new_completed;
  //   this.setState({ items: new_items });
  // }

  done_btn_clicked = index => {
    
    const { items } = this.state;
    console.log(items);
    const changed_item = items[index];
    console.log(changed_item);
    changed_item.completed = !changed_item.completed;
    this.setState({
      items: [...items.slice(0, index), changed_item, ...items.slice(index+1, items.length)]
    });
    
  }

  render(){
    return <div>
      <InputTodo 
        input={ this.state.inputtodo_input } 
        btn_listener={ this.input_btn_clicked } 
        input_listener={ this.input_input_changed }/>

      <TodoList 
      items={ this.state.items } 
      delete_btn_clicked={ this.delete_btn_clicked }
      done_btn_clicked ={ this.done_btn_clicked }/>    
    </div>;
  }
}


export default App;
