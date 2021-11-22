import React from 'react';

const HoveredItem = ({item}) => {
    return (
        <div className="hovered-item" key={`${item.row + 1}-${item.col + 1}`}>row {item.row + 1} col {item.col + 1}</div>
    );
};

export default HoveredItem;
