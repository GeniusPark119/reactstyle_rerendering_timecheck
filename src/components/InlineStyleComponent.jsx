import React from 'react';

const InlineStyleComponent = ({ count }) => {
  const style = {
    color: 'blue',
    fontSize: '20px'
  };

  return <div style={style}>Inline Style Component (Rerenders: {count})</div>;
};

export default InlineStyleComponent;
