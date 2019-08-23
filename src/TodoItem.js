import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({contents, delete_btn_clicked, index}) {
    return (
        <li index= {index}>
            <span>{contents}</span>
            <button>완료</button>
            <button onClick={delete_btn_clicked}>제거</button>
        </li>
    );
}

TodoItem.propTypes = {
  contents: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  delete_btn_clicked: PropTypes.func.isRequired
};


export default TodoItem;
