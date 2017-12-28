import React, { Component } from 'react';

const Icon = ({ iconType, title, description }) => {
  return (
    <div>
      <span className={iconType}></span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Icon;
