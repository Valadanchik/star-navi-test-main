import React from 'react';
import HoveredItem from './HoveredItem';

const HoveredItemsList = ({items}) => {
    return (
        <div className="hovered-items">
            <h2>Hover squares </h2>
            {items.map((el,index) =>
               el.map(item => <HoveredItem item={item}/>)
            )}
        </div>
    );
};

export default HoveredItemsList;
