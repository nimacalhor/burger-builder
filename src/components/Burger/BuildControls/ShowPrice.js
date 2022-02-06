import React from 'react'

function ShowPrice({ price }) {
    return (
        <div className='p-3 m-4 mt-0 rounded text-center border-'>
            <h4>current total price :</h4>
            <span
                className={
                    `badge fs-5 bg-${price < 20 ? "info" :  price > 35 ? "danger" : "warning"}`
                }
            >{Number(price).toFixed(2)}</span>
        </div>
    )
}

export default ShowPrice
