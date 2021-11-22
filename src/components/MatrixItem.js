import React from 'react';

const MatrixItem = ({mode,active,...rest}) => {
    return (
        <div {...rest} className={`matrix-item ${active ? 'active' : ''}`}
             style={{width: `calc((100vw/2 - 25px)/${mode})`, height: `calc((100vw/2 - 25px)/${mode})`}}>
        </div>
    );
};

export default MatrixItem;
