import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import "./SingleData.css"
import { IoMdArrowBack } from 'react-icons/io';
const SingleData = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [singleUser, setSingleUser] = useState({})
    const dataUrl = "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    useEffect(() => {
        fetch(dataUrl).then(response => response.json()).then(data => {
            const singleData = data.filter(data => data.id == id)
            setSingleUser(singleData[0])
        })
    }, [])
    const { age, city, company_name, email, first_name, last_name, state, web, zip } = singleUser
    return (
        <div className="singleData">
            {singleUser.first_name ? <div style={{ padding: "10px" }}>
                <h1 className="singleHeading"><IoMdArrowBack  onClick={() => navigate(-1)} style={{ cursor: "pointer" }} /> Details:{first_name + " " + last_name}</h1>
                <div className="details">
                    <p>First Name : {first_name}</p>
                    <p>Last Name : {last_name}</p>
                    <p>Company_name : {company_name}</p>
                    <p>City : {city}</p>
                    <p>State : {state}</p>
                    <p>Zip : {zip}</p>
                    <p>Email : {email}</p>
                    <p>Web : {web}</p>
                    <p>Age : {age}</p>
                </div>
            </div>
                :
                <div>
                    loading
                </div>}
        </div>

    );
};

export default SingleData;