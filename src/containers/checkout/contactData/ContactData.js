import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom"
import { connect } from 'react-redux';
import * as actions from "../../../store/actions/index"
import axios from "../../../axios-order"

function ContactData(props) {
    const navigate = useNavigate()
    const [ingredients, totalPrice] = useOutletContext()
    const { loading: posting } = props;
    const [inputValues, setInputValues] = useState({
        name: '',
        email: '',
        street: '',
        country: '',
        zip: '',
        delivery: ''
    })

    const inputChangeHandler = function ({ target }) {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        })
    }

    const orderHandler = function (e) {
        e.preventDefault();
        const data = { ...ingredients, ...inputValues, totalPrice }
        props.postOrder(data)
    }


    useEffect(() => {
        if (props.purchased) navigate("/")
    })

    return (
        <div className='container mt-5'>
            <h4>enter your contact data</h4>
            <form onSubmit={orderHandler} action="" className="form-control border border-1 p-3 mt-2">
                <div className="input-group">
                    <span className="input-group-text">name</span>
                    <input onChange={inputChangeHandler} value={inputValues.name} type="text" name="name" placeholder='Your name' className="form-control col-5" />
                    <span className="input-group-text">@</span>
                    <input onChange={inputChangeHandler} value={inputValues.email} type="email" name="email" placeholder='Your email' className="form-control col-7" />
                </div>
                <br />
                <div className="input-group">
                    <span className="input-group-text">Street</span>
                    <input onChange={inputChangeHandler} value={inputValues.street} type="text" name="street" placeholder='Your address (street)' className="form-control col-5" />
                    <span className="input-group-text">country</span>
                    <input onChange={inputChangeHandler} value={inputValues.country} type="text" name="country" placeholder='Your country' className="form-control col-7" />
                </div>
                <br />
                <div className="input-group">
                    <span className="input-group-text">ZIP code</span>
                    <input onChange={inputChangeHandler} value={inputValues.zip} type="text" name="zip" placeholder='Your zip code' className="form-control col-3" />
                </div>
                <br />
                <select onChange={inputChangeHandler} value={inputValues.delivery} name='delivery' className="form-select" aria-label="delivery method">
                    <option value="normal">normal</option>
                    <option value="fast">fast</option>
                    <option value="fastest">fastest</option>
                    <option value="eghtesadi">eghtesadi</option>
                </select>
                <button className="btn btn-info mt-4 px-3" type="submit">
                    {
                        posting ?
                            (
                                <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </>
                            ) :
                            "ORDER"
                    }
                </button>
            </form>

        </div>
    );
}

const mapStateToProps = state => ({
    loading: state.purchase.loading,
    purchased: state.purchase.purchased
})

const mapDispatchToProps = dispatch => ({
    postOrder: () => dispatch(actions.postOrder())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
