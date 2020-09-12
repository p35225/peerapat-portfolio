import React from 'react';

const Filter = ({ name, setFilter, currentFilter }) => {
  const clickHandler = () => {
    if (currentFilter === name) {
      setFilter('');
    } else {
      setFilter(name);
    }
  };

  return (
    <button
      name={name}
      className={currentFilter === name ? 'active' : undefined}
      onClick={clickHandler}
      style={{ margin: '0 10px', fontSize: '1.1rem' }}
    >
      {name}
    </button>
  );
};

export default Filter;
