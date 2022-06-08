import React from 'react';
import { Link } from 'react-router-dom';

const TableData = ({data}) => {
    const {age,city,comany_name,email,first_name,id,last_name,state,web,zip}=data
    // console.log(age,city,comany_name,email,first_name,id,last_name,state,web,zip)
    return (
        <tr>
            <td><Link className='Link' to={`/users/${id}`}>{first_name}</Link></td>
            <td>{last_name}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{web}</td>
        </tr>
    );
};

export default TableData;