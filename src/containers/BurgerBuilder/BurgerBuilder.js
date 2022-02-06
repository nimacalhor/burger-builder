import React, { useState } from 'react'
import Burger from "../../components/Burger/Burger"
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 1.2,
    meat: 3.75,
    bacon: 4.1,
}

export default function BurgerBuilder() {
    // state / data ________________________________________________________________________________
    const [ingredients, setIngredients] = useState({
        salad: 0,
        cheese: 0,
        meat: 0,
        bacon: 0,
    })
    const [totalPrice, setTotalPrice] = useState(2);
    const [purchaseable, setPurchaseable] = useState(false);
    const [purchasing, setPurchasing] = useState(false)

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
    // jsx ________________________________________________________________________________

    return (
        < div style={{ height: "100%" }}>
            <div>
                <Burger ingredients={ingredients} />
            </div >
            <div>
                <Modal show={purchasing} closeModal={cancelPurchase}>
                    <OrderSummary price={totalPrice} cancelPurchase={cancelPurchase} ingredients={ingredients} />
                </Modal>
                <BuildControls 
                    ingHandler={changeIngredients} 
                    price={totalPrice} 
                    purchaseable={purchaseable}
                    purchaseMod={purchaseMod}
                    />
            </div>
        </div >
    )
}
