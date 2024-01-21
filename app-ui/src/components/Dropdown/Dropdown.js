import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

export const Dropdown = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'own-dropdown-menu clicked' : 'own-dropdown-menu'}
      >
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="own-dropdown-link"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
