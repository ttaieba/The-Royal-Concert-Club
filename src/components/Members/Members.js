import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Members.css'

const Members = (props) => {
    // set all data get from home 
    const { name, img, salary, gender, country, email } = props.sing


    return (
        <div className="singer">

            <img src={img} alt="" />
            <h2>name : {name}</h2>
            <p>gender : {gender}</p>
            <h5>country : {country}</h5>
            <h5>Budget for Hire :$ {salary}</h5>
            <h5>email: {email}</h5>
            <button onClick={() => props.handleAddToCart(props.sing)} className="btn-style"> {<FontAwesomeIcon icon={faUser} />}  Add member</button>



        </div>
    );
};

export default Members;