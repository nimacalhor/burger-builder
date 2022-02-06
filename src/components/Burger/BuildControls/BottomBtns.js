import React from 'react'
import propTypes from 'prop-types';

function OrderBtn({disable, removeAll, purchaseMod}) {
    return (
        <div className='w-100 d-flex justify-content-center mt-3'>
            <button onClick={removeAll} className='btn btn-outline-danger m-2'>REMOVE ALL</button>
            <button 
                className='btn btn-info' 
                onClick={purchaseMod}
                disabled={!disable}
                >ORDER NOW</button>
        </div>
    )
}

OrderBtn.prototype = {
    disable: propTypes.bool
}

export default OrderBtn
