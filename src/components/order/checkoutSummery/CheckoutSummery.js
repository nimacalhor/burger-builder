import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Burger from "../../Burger/Burger"

function CheckoutSummery(props) {
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!props.ingredients) navigate("/")
    // })

    return (
        <div className='container text-center p-3'>
            <h1 className="display-4 m-4">
                Hope to enjoy your Boorger 🍔
            </h1>
            {/* Burger review ______________________________ */}
            <div
                className="Burger__review mx-auto w-100"
                style={{ width: "300px" }}
            >
                <Burger ingredients={props.ingredients ? props.ingredients : {}} />
            </div>
            {/* Buttons ______________________________ */}
            <div className="buttons mt-4">
                <Link to="/" className="btn btn-danger">CANCEL</Link>
                {/* <button onClick={() => navigate("contact-data", { state:props.summery })} className="btn btn-success mx-3">CONTINUE</button> */}
                <button onClick={() => navigate("contact-data")} className="btn btn-success mx-3">CONTINUE</button>
            </div>
        </div>

    );
}

export default CheckoutSummery;
