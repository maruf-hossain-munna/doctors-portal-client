import React from 'react';

const PrimaryButton = ({ children , clickHandler}) => {
    return (
        <button
            onClick={clickHandler}
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            {children}  
        </button>
    );
};

export default PrimaryButton;