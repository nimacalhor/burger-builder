import React, { useState, useEffect } from 'react'
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'
import axios from "../../axios-order"
import Spinner from '../../components/UI/spinner/Spinner'
import WithErrorHandler from '../../components/hoc/withErrorHandler/WithErrorHandler'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 1.2,
    meat: 3.75,
    bacon: 4.1,
}

function BurgerBuilder() {
    // state / data ________________________________________________________________________________
    const [ingredients, setIngredients] = useState(null)
    const [totalPrice, setTotalPrice] = useState(2);
    const [purchaseable, setPurchaseable] = useState(false);
    const [purchasing, setPurchasing] = useState(false);
    const [loading, setLoading] = useState(false);

    // Effect ________________________________________________________________________________
    useEffect(() => {
        axios.get("https://burger-builder-3c0ce-default-rtdb.firebaseio.com/ingredients")
            .then(res => setIngredients(res.data))
            .catch(err => console.log(err))
    }, [])

    // functions ________________________________________________________________________________
    const updatePrice = function (type, operation) {
        // add / remove / removeAll
        if (operation === "removeAll") return setTotalPrice(2);
        const cost = INGREDIENTS_PRICES[type];
        operation === "add" ?
            setTotalPrice(totalPrice + cost) :
            setTotalPrice(totalPrice - cost)
    }

    const checkPurchaseable = function (ingredients) {
        // // if all ingredients value is 0
        if (
            Object.values({ ...ingredients })
                .reduce((pre, next) => pre + next, 0) === 0
        )
            return setPurchaseable(false);
        // else
        setPurchaseable(true)
    }

    const changeIngredients = {
        addIngredientHandler(type) {
            const updatedIng = { ...ingredients };
            updatedIng[type]++;
            setIngredients(updatedIng);
            updatePrice(type, "add");
            checkPurchaseable(updatedIng)
        },

        removeIngredientHandler(type) {
            const updatedIng = { ...ingredients };

            if (updatedIng[type] === 0) return
            updatedIng[type]--;
            setIngredients(updatedIng);
            updatePrice(type, "remove");
            checkPurchaseable(updatedIng);
        },

        removeAll() {
            setIngredients({
                salad: 0,
                cheese: 0,
                meat: 0,
                bacon: 0,
            });
            updatePrice(null, "removeAll");
            checkPurchaseable();
        }
    }

    const purchaseMod = () => setPurchasing(true);

    const cancelPurchase = () => setPurchasing(false);

    const purchaseCancelHandler = function () {
        cancelPurchase()
        alert("bing")
    };

    const purchaseContinueHandler = function () {
        const order = {
            ingredients: { ...ingredients },
            price: totalPrice,
            customer: {
                name: "Nima",
                address: {
                    street: "janbazan",
                    country: "Iran"
                },
                email: "nimakalhor25@gmail.com",
            },
            deliveryMethod: "fastest"
        };
        setLoading(true)
        axios.post("/orders.json", order)
            .then(res => {
                console.log(res);
                setLoading(false);
                cancelPurchase()
            })
            .catch(err => {
                console.log(err);
                cancelPurchase()
            })
    }

    // jsx ________________________________________________________________________________

    return (
        < div style={{ height: "100%" }}>
            <div>
                {
                    ingredients ?
                        <Burger ingredients={ingredients} /> :
                        <Spinner />
                }
            </div >
            <div>
                {
                    ingredients ?
                        (
                            <>

                                <Modal show={purchasing} closeModal={cancelPurchase}>
                                    {
                                        loading ?
                                            <Spinner /> :
                                            <OrderSummary
                                                price={totalPrice}
                                                cancelPurchase={purchaseCancelHandler}
                                                continuePurchase={purchaseContinueHandler}
                                                ingredients={ingredients}
                                            />
                                    }
                                </Modal>
                                <BuildControls
                                    ingHandler={changeIngredients}
                                    price={totalPrice}
                                    purchaseable={purchaseable}
                                    purchaseMod={purchaseMod}
                                />
                            </>
                        ) :
                        <Spinner />
                }
            </div>
        </div >
    )
};


export default WithErrorHandler(BurgerBuilder, axios)
