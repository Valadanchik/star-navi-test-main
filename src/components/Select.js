import React from 'react';

const Select = ({options,...rest}) => {
    return (
        <select {...rest} className="select">
            <option value="">Select Mode</option>
            {options.map(opt => <option value={opt.matrix} key={opt.mode}>{opt.mode}</option>)}
        </select>
    );
};

export default Select;
