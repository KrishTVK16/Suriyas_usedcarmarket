import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', ...props }) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

