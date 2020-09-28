import React, { Fragment, useState, useEffect, useRef } from 'react';

const DropDown = ({ label, options, selected, onSelectedChanged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const refParent = useRef();

  useEffect(() => {
    const onBodyClick =  (event) => {
      if (!refParent.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', onBodyClick);

    // clean up function
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) return null;

    return (
      <div key={option.value} className="item" onClick={() => onSelectedChanged(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <Fragment>
      <div ref={refParent} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div 
            onClick={() => setIsOpen(!isOpen)} 
            className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );

}

export default DropDown;