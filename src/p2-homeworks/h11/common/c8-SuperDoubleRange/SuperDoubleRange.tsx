import React, {useState} from 'react'
import s from './SuperDoubleRange.module.css'
import {Simulate} from "react-dom/test-utils";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(250)

    return (
        <>
            DoubleRange
            <div onClick={(e) => {
                console.log(e.clientX)
                e.clientX <= max && setMin(e.clientX)
            }} className={s.slider}>
                <div onDragEnd={(e) => {
                    console.log(e.clientX)
                    e.clientX <= max && setMin(e.clientX)
                }} className={s.min} style={{width: min}} data-content={min}>
                    <div onDrag={(e) => {
                        console.log(e.clientX)
                        e.clientX <= 250 && setMin(e.clientX)
                    }} className={s.minDrag}></div>
                </div>
                <div className={s.max} style={{width: max}} data-content="100">
                    <div onDrag={(e) => {
                        console.log(e.clientX)
                        if (e.clientX <= 250 && e.clientX >= min) {
                            setMax(e.clientX)
                        }
                    }} className={s.maxDrag}></div>
                </div>
            </div>

        </>
    )
}

export default SuperDoubleRange
