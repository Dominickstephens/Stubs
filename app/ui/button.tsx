import React from 'react';

interface ButtonProps {
  btnName: string;
}

const button: React.FC<ButtonProps> = ({ btnName }) => {
  return (
    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4">
      {btnName}
    </button>
  );
};

export default button;