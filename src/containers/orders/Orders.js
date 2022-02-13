import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import * as actions from "../../store/actions/index"
import OrderCard from './orderCard/OrderCard'

function Orders(props) {

    const { orders, loading, error, fetchOrders } = props

    useEffect(() => {
        if(!orders.length) fetchOrders()
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

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(actions.fetchOrders())
})

const mapStateToProps = state => ({
    orders: state.rdr.orders,
    error: state.rdr.error,
    loading: state.rdr.leading
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)