import React, { useState } from 'react';

const YourComponent = () => {
  const [parentHidden, setParentHidden] = useState(false);

  const toggleParent = () => {
    setParentHidden((prevState) => !prevState);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const parentStyle = {
    visibility: parentHidden ? 'hidden' : 'visible',
    width: '100px',
    height: '100px',
    backgroundColor: '#FF553A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
  };

  const childStyle = {
    visibility: 'visible',
    backgroundColor: '#30D161',
    width: '50px',
    height: '50px',
  };

  const buttonStyle = {
    display: 'inline-block',
    width: '100px',
  };

  return (
    <div style={containerStyle}>
      <div id="parent" style={parentStyle}>
        <div style={childStyle}></div>
      </div>
      <button style={buttonStyle} onClick={toggleParent}>
        {parentHidden ? 'Show Parent' : 'Hide Parent'}
      </button>
    </div>
  );
};

export default YourComponent;
