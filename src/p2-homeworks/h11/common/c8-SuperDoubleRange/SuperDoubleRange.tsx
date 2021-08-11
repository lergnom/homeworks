import React, {useState} from 'react'
import s from './SuperDoubleRange.module.css'

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
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(250)

    return (
        <>

            DoubleRange
            <div style={{width: 250}} onClick={(e) => {
                console.dir(e.currentTarget.children)
                e.clientX <= value2 && setValue1(e.clientX)
                e.clientX >= value1 && setValue2(e.clientX)

            }} className={s.slider}>

                <div onDragEnd={(e) => {
                    console.log(e.clientX)
                    e.clientX <= value2 && setValue1(e.clientX)
                }} className={s.min} style={{width: value1}} data-content={value1}>

                    <div onDrag={(e) => {
                        console.log(e.clientX)
                        e.clientX <= 250 && setValue1(e.clientX)
                    }} className={s.minDrag}></div>
                </div>

                <div className={s.max} style={{width: value2}} data-content={value2}>
                    <div onDrag={(e) => {
                        console.log(e.clientX)
                        if (e.clientX <= 250 && e.clientX >= value1) {
                            setValue2(e.clientX)
                        }
                    }} className={s.maxDrag}></div>
                </div>

            </div>

        </>
    )
}

export default SuperDoubleRange
