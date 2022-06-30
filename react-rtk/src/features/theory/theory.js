import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { theoryClass, theoryClassCancel } from './theorySlice';

const Theory = () => {
    const theory = useSelector(state => state.theory.countOfTheoryClass);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Total Theory class: {theory}</p>
            <button onClick={() => dispatch(theoryClass(1))}>+</button>
            <button onClick={() => dispatch(theoryClassCancel(1))}>-</button>
        </div>
    );
};

export default Theory;