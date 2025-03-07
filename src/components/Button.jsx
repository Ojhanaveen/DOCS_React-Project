import React from 'react';

const Button = ({ className, onClick }) => {
    return (
        <button 
            className={`bg-red-500 px-4 py-2 text-white rounded ${className}`} 
            onClick={onClick}
        >
            Create Card
        </button>
    );
};

export default Button;
