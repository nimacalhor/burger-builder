import React from 'react'
import st from "./Backdrop.module.css"
import propTypes from 'prop-types'

function Backdrop(props) {
    return props.show ? <div onClick={props.close} className={st.Backdrop}></div> : null
}

Backdrop.propTypes = {
    close: propTypes.func,
    show: propTypes.bool
}

export default Backdrop
