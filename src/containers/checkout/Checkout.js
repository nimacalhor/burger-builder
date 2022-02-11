import React from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import CheckoutSummery from '../../components/order/checkoutSummery/CheckoutSummery';

function Checkout(props) {
    return (
        <div>
            <CheckoutSummery ingredients={props.ing} />
            <br />
            <br />
            <Outlet context={[props.ing, props.prc]} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ing: state.ing.ingredients,
        prc: state.prc.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);
