import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({contents, completed, delete_btn_clicked, index, done_btn_clicked}) {
    
    return (
        <li index={ index }>
            <span style={ completed? {textDecoration:"line-through", color:"rgb(128,128,128)" } : {} }>{ contents }</span>
            <button onClick={ () => done_btn_clicked(index) }>
                {completed? "되돌리기": "완료"}
            </button>
            <button onClick={ () => delete_btn_clicked(index) }>제거</button>
        </li>

    );

}

TodoItem.propTypes = {
  contents: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  delete_btn_clicked: PropTypes.func.isRequired,
  done_btn_clicked: PropTypes.func.isRequired
};


export default TodoItem;
