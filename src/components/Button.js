import React from 'react';

const Button = ({...rest}) => {
    return (
        <div>
            <button className="btn" {...rest}>Start</button>
        </div>
    );
};

export default Button;
