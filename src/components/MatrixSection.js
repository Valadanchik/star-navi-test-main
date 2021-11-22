import React, {useEffect, useState, useMemo} from 'react';
import Select from './Select';
import Button from './Button';
import {getMatrixData} from '../api/square';
import Matrix from './Matrix';
import HoveredItemsList from './HoveredItemsList';

const MatrixSection = () => {
    const [matrix, setMatrix] = useState([]);
    const [modes, setModes] = useState([]);
    const [selected, setSelected] = useState({mode: '', current: ''});
    useEffect(() => {
        getMatrixData()
            .then(res => {
                const keys = Object.keys(res);
                const array = keys.map(key => ({mode: key.replace('Mode', ''), matrix: res[key].field}));
                setModes(array)
            });

    }, []);
    useEffect(() => {
        createMatrix(selected.current)
    }, [selected.current])
    const handleMode = (e) => {
        const {value} = e.target;
        if (value) {
            setSelected({...selected, mode: value})
        } else {
            setSelected({mode: '', current: ''})
        }
    };
    const createMatrix = (size) => {
        if (size) {
            const el = new Array(size);
            for (let i = 0; i < size; i++) {
                el[i] = [];
                for (let j = 0; j < size; j++) {
                    el[i][j] = {row: i, col: j, active: false}
                }
            }
            setMatrix(el);
        }
    };

    const handleStart = () => {
        setSelected({...selected, current: selected.mode});
    }
    const handleHover = (el) => {
        const info = [...matrix];
        info[el.row][el.col] = {...el, active: !el.active};
        setMatrix(info)
    };
    const memoizedMatrix = useMemo(() => <Matrix mode={selected.current} matrix={matrix}
                                                 handleHover={handleHover}/>, [selected.current, matrix])
    return (
        <>
            <div className="matrix-list">
                <div className="form">
                    <Select options={modes} onChange={handleMode}/>
                    <Button onClick={handleStart}/>
                </div>
                {memoizedMatrix}
            </div>
            <HoveredItemsList items={matrix.map(m => m.filter(item => item.active))}/>
        </>
    );
};

export default MatrixSection;
