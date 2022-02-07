import React from 'react';
import st from './SideDrawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop"
import propTypes from 'prop-types';

function SideDrawer(props) {
    return (
        <>
            <Backdrop show={props.show} close={props.closeSideDrawer} />
            <div className={`${st.SideDrawer} ${props.show ? st.Open : st.Close} bg-warning d-flex justify-content-center pb-5`}>
                <nav>
                    <ul className='d-flex flex-column'>
                        <li className='m-2 p-2 btn btn-light'>order burger</li>
                        <li className='m-2 p-2 btn btn-light'>build burger</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

SideDrawer.propTypes = {
    show: propTypes.bool,
    closeSideDrawer: propTypes.func
}

export default SideDrawer;
