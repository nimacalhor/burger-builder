import React from 'react'

function OrderCard({data}) {
    return (
        <div className='card col-6 col-md-4 col-lg-3'>
            <h5 className="card-header">{data.deliveryMethod}</h5>
            <div className="card-body">
                <h5 className="card-title">{data.price}</h5>
                <ul className="list-group list-group-flush">
                    {
                        Object.entries(data.ingredients).map(([key, value], i) =>
                            <li key={`${key}${i}`} className="list-group-item">{key} : ({value})</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default OrderCard