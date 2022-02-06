import React from 'react'
import propTypes from 'prop-types';

function OrderSummary({ingredients, cancelPurchase, price}) {

    const ingredientsArr = Object.entries(ingredients);

    return (
        <>
            <h3>your order is</h3>
            <p>a delicious burger which contains following</p>
            <ul class="list-group list-group-flush ">
                {
                    ingredientsArr.map(([type, amount]) => <li class="list-group-item bg-dark text-light">{`${type} (${amount})`}</li>)
                }
            </ul>
            <p>total price : <span className='badge bg-secondary'>{price.toFixed(2)}</span></p>
            <div className='w-100 d-flex justify-content-end'>
                <button onClick={cancelPurchase} className='btn btn-outline-danger m-3 mt-0 mb-0'>CANCEL</button>
                <button className='btn btn-info'>CONTINUE</button>
            </div>
        </>
    )
}

OrderSummary.propTypes = {
    ingredients: propTypes.object,
    cancelPurchase: propTypes.func,
    price: propTypes.number
}

export default OrderSummary
