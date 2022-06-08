import React, { useEffect, useState } from 'react';
import "./Table.css"
import TableData from './TableData';
import { AiOutlineSearch } from 'react-icons/ai';

const Table = () => {
    const [data, setData] = useState([])
    const dataUrl = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    useEffect(() => {
        fetch(dataUrl).then(response => response.json()).then(data => {
            setData(data.slice(0, 10))
        })
    }, [])
    const [text, setText] = useState("");

    const onSubmit = evt => {
        evt.preventDefault();
        if (text === "") {
            alert("Please enter something!");
        } else {
            alert(text);
            setText("");
        }
    };

    const onChange = evt => setText(evt.target.value);
    return (
        <div className='table'>
            <h1>Users</h1>
            <div>
                    <form onSubmit={onSubmit} className='user-search'>
                        <input 
                            type="text"
                            name="text"
                            placeholder="Search by first or last name"
                            value={text}
                            onChange={onChange}
                           
                        />
                        <button type="submit" className="p-2 text-center text-blue-500 w-1/4 bg-white border-l">
                            <AiOutlineSearch/>
                        </button>
                    </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                {

                    data.map((data, idx) => {

                        return (
                            <tbody key={idx}>
                                <TableData data={data} />
                            </tbody>
                        )
                    })
                }
            </table>
        </div>
    );
};

export default Table;