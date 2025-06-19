// components/MyTextBox.js
import React from 'react';

const MyTextBox = ({placeholder = '', type = 'text', name ='' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="border p-2 rounded h-12 border-gray-400" 
    />
  );
};

export default MyTextBox;