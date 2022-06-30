import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { practicalClass, practicalClassCancel } from './practicalSlice';

export const Practical = () => {
    const dispatch = useDispatch();
    const practical = useSelector(state => state.practical.countOfPracticalClass);
    return (
        <div>
            <p>Total Practical Class:{practical}</p>
            <button onClick={() => dispatch(practicalClass(1))}>+</button>
            <button onClick={() => dispatch(practicalClassCancel(1))}>-</button>
        </div>
    );
};

