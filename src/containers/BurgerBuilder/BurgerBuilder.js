import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from "../../store/actions"

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
    const [loading, setLoading] = useState(false);
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
        // setLoading(true)
        // axios.get("https://burger-builder-3c0ce-default-rtdb.firebaseio.com/ingredients.json")
        //     .then(res => { setIngredients(res.data); setLoading(false) })
        //     .catch(err => console.log(err));

    }, [props.totalPrice, props.ingredients])

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
        addIngredient: (ing) => dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredient: ing }),
        removeIngredient: (ing) => dispatch({ type: actionTypes.REMOVE_INGREDIENTS, ingredient: ing }),
        removeAllIngredient: () => dispatch({ type: actionTypes.REMOVE_ALL_INGREDIENTS }),
        addPrice: (ing) => dispatch({ type: actionTypes.ADD_PRICE, ingredient: ing }),
        reducePrice: (ing) => dispatch({ type: actionTypes.REDUCE_PRICE, ingredient: ing }),
        resetPrice: () => dispatch({ type: actionTypes.RESET_PRICE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios))
