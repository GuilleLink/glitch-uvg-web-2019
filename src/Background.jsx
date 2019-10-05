import React from 'react';
import './App.css';

const Background = () => (
  <div className="background">
    {' '}
    {this.props.children}
    {' '}
  </div>
);

export default Background();
