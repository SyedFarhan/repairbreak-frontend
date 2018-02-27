import React from 'react';

const Icon = ({ iconType, title, description }) => {
  return (
    <div>
      <span className={iconType} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Icon;
