import React from 'react'
import PropTypes from 'prop-types'
import propTypes from 'prop-types'

function Navbar(props) {
    return (
        <header>
            <nav class="navbar navbar-secondary bg-secondary">
                <div class="container-fluid">
                    <div onClick={props.openSideDrawer} className='d-block d-sm-none'><i class="bi bi-list fs-1 btn btn-outline-dark"></i></div>
                    <div>
                        <h1 className='text-light'>Boorger 🍔</h1>
                    </div>
                    <ul className='d-none d-sm-flex'>
                        <li className='m-2 p-2 btn btn-outline-light'>order burger</li>
                        <li className='m-2 p-2 btn btn-outline-light'>build burger</li>
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

