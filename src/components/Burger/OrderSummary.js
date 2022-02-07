import React from 'react'
import propTypes from 'prop-types';

function OrderSummary({ingredients, cancelPurchase, price, continuePurchase}) {

    const ingredientsArr = Object.entries(ingredients);

    return (
        <>
            <h3>your order is</h3>
            <p>a delicious burger which contains following</p>
            <ul className="list-group list-group-flush ">
                {
                    ingredientsArr.map(([type, amount]) => <li key={`${type}${amount}`} className="list-group-item bg-secondary text-light">{`${type} (${amount})`}</li>)
                }
            </ul>
            <p>total price : <span className='badge bg-secondary'>{price.toFixed(2)}</span></p>
            <div className='w-100 d-flex justify-content-end'>
                <button onClick={cancelPurchase} className='btn btn-danger m-3 mt-0 mb-0'>CANCEL</button>
                <button onClick={continuePurchase} className='btn btn-info'>CONTINUE</button>
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
