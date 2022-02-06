import React from 'react'
import st from "./BuildControl.module.css"

function BuildControl({ label, type, ingHandler }) {

    const { addIngredientHandler: add, removeIngredientHandler: remove } = ingHandler;

    return (
        <div className={`${st.BuildControl} w-50 m-auto mt-2 d-flex justify-content-between flex-column flex-sm-row`}>
            <h5 className={st.label}>{label}</h5>
            <div>
                <button onClick={() => add(type)} className='btn btn-outline-info'>add</button>
                <button onClick={() => remove(type)} className='btn btn-outline-danger m-2 mt-0 mb-0'>remove</button>
            </div>
        </div>
    )
}

export default BuildControl
