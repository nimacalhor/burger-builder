import React, { useState } from 'react'
import Navbar from '../Navigation/Navbar/Navbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default function Layout(props) {

    const [showSidebar, setShowSidebar] = useState(false);

    const closeSideDrawer = () => setShowSidebar(false);
    const openSideDrawer = () => setShowSidebar(true);

    return (
        <>
            {/* header ________________________________________________________________________________
         */}
            <Navbar openSideDrawer={openSideDrawer} />
            <SideDrawer closeSideDrawer={closeSideDrawer} show={showSidebar} />
            {/* main ________________________________________________________________________________
             */}
            <main className='pt-5' style={{ height: "100vh", position: "relative" }}>
                {props.children}
            </main>
        </>
    )
}
