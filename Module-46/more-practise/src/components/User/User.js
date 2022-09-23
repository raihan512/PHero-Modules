import React from 'react';
import "./User.css";
const User = (props) => {
    const { name, username, phone, email, address: { street, city, zipcode } } = props.user;
    return (
        <div className='country'>
            <h2>{name}</h2>
            <h4>Username: {username}</h4>
            <h5>Phone: {phone}</h5>
            <h6>Mail: {email}</h6>
            <p>Address: Street-{street},City-{city},Zip-{zipcode}</p>
        </div>
    );
};

export default User;