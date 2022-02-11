import React, { useEffect, useState } from 'react'
import axios from "../../axios-order"
import OrderCard from './orderCard/OrderCard'

function Orders() {

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        axios.get("orders.json")
            .then(({ data }) => setOrders(Object.values(data)));
    }, [])

    return (
        <div className='container row gap-2 mx-auto justify-content-between'>
            {
                orders ?
                    orders.map((order, i) => <OrderCard key={i} data={order} />) :
                    "loading ..."
            }
        </div>
    )
}

export default Orders