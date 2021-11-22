import React from 'react';
import MatrixItem from './MatrixItem';

const Matrix = ({matrix,mode,handleHover,...rest}) => {
    console.log(matrix);
    return (
            <div className="matrix-wrapper">
                {matrix.map((row, idx) => <div className="matrix-row" key={`row-${idx}`}>

                        {row.map((col, index) =>
                            <MatrixItem
                                onMouseEnter={() => handleHover(col)}
                                mode={mode}
                                active={col.active}
                                key={`${row}-${index}`}
                            />
                        )}
                    </div>
                )}

            </div>
    );
};

export default Matrix;
