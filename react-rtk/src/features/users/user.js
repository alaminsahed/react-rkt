import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './userSlice';

const User = () => {
    const users = useSelector(state => state.users.users);
    // console.log(users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    })
    return (
        <div>
            {
                users.map((user, index) => {
                    return <p key={index}>{user.name}</p>
                })
            }
        </div>
    );
};

export default User;