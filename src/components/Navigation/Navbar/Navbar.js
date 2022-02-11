import React from 'react'
import propTypes from 'prop-types'
import { NavLink } from "react-router-dom"

function Navbar(props) {
        return (
            <header>
                <nav className="navbar navbar-secondary bg-warning bg-gradient">
                    <div className="container-fluid">
                        <div onClick={props.openSideDrawer} className='d-block d-sm-none'><i className="bi bi-list fs-1 btn btn-outline-dark"></i></div>
                        <div>
                            <h1 className='text-light'>Boorger 🍔</h1>
                        </div>
                        <ul className='d-none d-sm-flex'>
                            <li className='m-2 p-2 btn btn-outline-light'>
                                <NavLink className={({isActive}) => isActive ? "fw-bolder": ""} style={{textDecoration: "none"}} to="/orders">
                                    ORDERS
                                </NavLink>
                            </li>
                            <li className='m-2 p-2 btn btn-outline-light' >
                                <NavLink className={({isActive}) => isActive ? "fw-bolder": ""} style={{textDecoration: "none"}} to="/">
                                    HOME
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

Navbar.propTypes = {
    openSideDrawer: propTypes.func
}

export default Navbar

