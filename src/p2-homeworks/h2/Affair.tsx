import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.element}>
            {props.affair._id}.
            <span className={s.fontBold}> {props.affair.name} </span>
            <span className={s.span + ' '+props.affair.priority}>{props.affair.priority}</span>


            <button className={s.btnDeleteClass} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair