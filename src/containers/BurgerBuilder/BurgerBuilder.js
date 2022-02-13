import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from "../../store/actions/index";


import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'
import axios from "../../axios-order"
import Spinner from '../../components/UI/spinner/Spinner'
import WithErrorHandler from '../../components/hoc/withErrorHandler/WithErrorHandler'

function BurgerBuilder(props) {
    // state / data ________________________________________________________________________________
    const [purchaseable, setPurchaseable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);
    const [loading, setLoading] = useState(!!(props.ingredients));
    const navigate = useNavigate();

    // Effect ________________________________________________________________________________
    useEffect(() => {
        // // if all ingredients value is 0
        if (
            Object.values({ ...props.ingredients })
                .reduce((pre, next) => pre + next, 0) === 0
        )
            return setPurchaseable(false);
        // else
        setPurchaseable(true)

    }, [props.totalPrice, props.ingredients])

    useEffect(()=> {
        props.initIngredients()
    }, [])

    const changeIngredients = {
        removeAll() {
            props.removeAllIngredient();
            props.resetPrice()
        },
        addIngredientHandler(ing) {
            props.addIngredient(ing)
            props.addPrice(ing)
        },
        removeIngredientHandler(ing) {
            props.removeIngredient(ing)
            props.reducePrice(ing)
        }
    };

    const purchaseMod = () => setPurchasing(true);

    const cancelPurchase = () => setPurchasing(false);

    const purchaseCancelHandler = function () {
        cancelPurchase()
        alert("bing")
    };

    const purchaseContinueHandler = function () {
        navigate("/checkout")
    }

    // jsx ________________________________________________________________________________

    return (
        <>
            <div style={{ height: "100%" }} >
                <div>
                    {
                        props.ingredients ?
                            <Burger ingredients={props.ingredients} /> :
                            <Spinner />
                    }
                </div >
                <div>
                    {
                        props.ingredients ?
                            (
                                <>

                                    <Modal show={purchasing} closeModal={cancelPurchase}>
                                        <OrderSummary
                                            price={props.totalPrice}
                                            cancelPurchase={purchaseCancelHandler}
                                            continuePurchase={purchaseContinueHandler}
                                            ingredients={props.ingredients}
                                        />
                                    </Modal>
                                    <BuildControls
                                        ingHandler={changeIngredients}
                                        price={props.totalPrice}
                                        purchaseable={purchaseable}
                                        purchaseMod={purchaseMod}
                                    />
                                </>
                            ) :
                            <Spinner />
                    }
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        ingredients: state.ing.ingredients,
        totalPrice: state.prc.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ing) => dispatch(actions.addIngredient(ing)),
        removeIngredient: (ing) => dispatch(actions.removeIngredient(ing)),
        removeAllIngredient: () => dispatch(actions.removeAllIngredient()),
        initIngredients : () => dispatch(actions.initIngredients()),

        addPrice: (ing) => dispatch(actions.addPrice(ing)),
        reducePrice: (ing) => dispatch(actions.reducePrice(ing)),
        resetPrice: () => dispatch(actions.resetPrice())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios))
