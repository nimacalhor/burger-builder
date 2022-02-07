import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import ShowPrice from './ShowPrice'
import BottomBtns from './BottomBtns'
import propTypes from 'prop-types'

const buttons = [
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Salad", type: "salad" },
]

function BuildControls({ ingHandler, price, purchaseable, purchaseMod }) {
    return (
        <div className={`bg-light bg-gradient text-dark text-light mt-4 p-5`}>
            <ShowPrice price={price} />
            {
                buttons.map(({ label, type }) =>
                    <BuildControl
                        key={label}
                        label={label}
                        type={type}
                        ingHandler={ingHandler}
                    />)
            }
            <BottomBtns
                disable={purchaseable}
                removeAll={ingHandler.removeAll}
                purchaseMod={purchaseMod}
            />
        </div>
    )
}

BuildControls.propTypes = {
    ingHandler: propTypes.object,
    price: propTypes.number,
    purchaseable: propTypes.bool,
    purchaseMod: propTypes.func
}

export default BuildControls
