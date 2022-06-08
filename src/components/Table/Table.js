import React, { useEffect, useState } from 'react';
import "./Table.css"
import TableData from './TableData';
import { AiOutlineSearch, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Table = () => {
    const [data, setData] = useState([])
    const dataUrl = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    useEffect(() => {
        fetch(dataUrl).then(response => response.json()).then(data => {
            setData(data)
        })
    }, [])
    const [text, setText] = useState("");
    const [searchData, setSearchData] = useState([])
    const onSubmit = evt => {
        evt.preventDefault();
        if (text === "") {
            toast("Please enter something!");
        } else {
            // alert(text);
            console.log(text)
            // setText("");
        }
    };

    const onChange = evt => setText(evt.target.value);
    useEffect(() => {
        const searchResult = data && data.filter(dt => dt.first_name.toLowerCase().includes(text.toLowerCase()) || dt.last_name.toLowerCase().includes(text.toLowerCase()))
        setSearchData(searchResult)
    }, [text])
    return (
        <div className='table'>
            <h1 style={{ color: "#0000009c" }}>Users</h1>
            <div>
                <form onSubmit={onSubmit} className='user-search'>
                    <input
                        type="text"
                        name="text"
                        placeholder="Search by first or last name"
                        value={text}
                        onChange={onChange}

                    />
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <button type="submit" className="p-2 text-center text-blue-500 w-1/4 bg-white border-l">
                        <AiOutlineSearch />
                    </button>
                </form>
            </div>
            <table>
                <thead>
                    <tr className='tr'>
                        <th > <div className='th-sorting'>First Name <div className='th-sort-icon'><AiOutlineUp  className='srt-icon'/><AiOutlineDown className='srt-icon'/></div></div> </th>
                        <th > <div className='th-sorting'>Last Name <div className='th-sort-icon'><AiOutlineUp className='srt-icon'/><AiOutlineDown className='srt-icon'/></div></div> </th>
                        <th > <div className='th-sorting'>Age <div className='th-sort-icon'><AiOutlineUp className='srt-icon'/><AiOutlineDown className='srt-icon'/></div></div> </th>
                        <th > <div className='th-sorting'>Email <div className='th-sort-icon'><AiOutlineUp className='srt-icon'/><AiOutlineDown className='srt-icon'/></div></div> </th>
                        <th > <div className='th-sorting'>Website <div className='th-sort-icon'><AiOutlineUp className='srt-icon'/><AiOutlineDown className='srt-icon'/></div></div> </th>
                    </tr>
                </thead>
                {
                    text !== "" ? searchData.length ? searchData.slice(0, 10).map((data, idx) => {

                        return (
                            <tbody key={idx}>
                                <TableData data={data} />
                            </tbody>
                        )
                    }) : <div>
                        <h1 style={{ textAlign: 'center', marginTop: "150px", color: "#0000009c" }}>there's no available data</h1>
                    </div> :

                        data.slice(0, 10).map((data, idx) => {

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