import React from 'react'
import st from "./Modal.module.css"
import Backdrop from '../Backdrop/Backdrop';
import propTypes from 'prop-types';

function Modal(props) {
    return (
        <>
            <Backdrop show={props.show} close={props.closeModal}/>
            <div
                style={{
                    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                    opacity: props.show ? 1 : 0
                }}
                className={`${st.Modal} bg-dark text-light border rounded`}>
                {props.children}
            </div>
        </>
    )
}

Modal.propTypes  ={
    show: propTypes.bool,
    closeModal: propTypes.func
}

export default React.memo(Modal);