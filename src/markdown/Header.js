import React from 'react';
import { helpClicked } from '../redux/textSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const isClick = useSelector((state) => state.texts.isClick);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(helpClicked(!isClick))
  };

  return (
    <header>
      <h1 className="app-title">Markdown Previewer</h1>
      <div className={isClick === true ? "help-button" : "active"}
        onClick={handleClick}>
        <i className="fa fa-question" aria-hidden="true">?</i>
      </div>
    </header>
  )
}

export default Header;