import { observable, action } from 'mobx';

export default class TodoListStore {

    @observable inputtodo_input= "";

    @observable items= [];

    @action input_btn_clicked = (e) => {
        //if input tag is empty alert to User.
        if (this.inputtodo_input === "") {
            alert("할 일을 입력해주세요!");
            return;
        }

        const new_item = {
            contents: this.inputtodo_input,
            completed: false
        };

        //이게 될까..?
        this.items = this.items + new_item;


        //reset the input
        this.inputtodo_input = "";
    }

    @action input_input_changed = (e) => {
        const new_input = e.target.value;
        this.inputtodo_input = new_input;
    }

    @action delete_btn_clicked = (index) => {
        const old_items = this.items;
        const new_items = [...old_items.slice(0, index), ...old_items(index+1, old_items.length)];
        this.items = new_items;
    }

    @action done_btn_clicked = (index) => {
        const old_items = this.items;
        const done_item_contents = this.items[index].contents;
        const done_item_completed = this.items[index].completed;

        const new_items = [ ...old_items.slice(0, index),
                            
                            {contents: done_item_contents,
                            completed: !done_item_completed},

                            ...old_items.slice(index+1, old_items.length) ];
        this.items = new_items;
    }


}


















tate = {
    inputtodo_input:"",
    items : [],
  }