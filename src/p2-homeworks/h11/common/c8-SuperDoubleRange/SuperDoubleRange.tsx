import React, {useState} from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const getPointInto = (e: React.MouseEvent<HTMLDivElement>) => {
    }

    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        if (onChangeRange) {
            if (value) {
                e.clientX <= value[1] && onChangeRange([e.clientX, value[1]])
            }
        }
    }

    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
        if (onChangeRange) {

            if (e.clientX <= 250 && e.clientX <= value[1]) {
                onChangeRange([e.clientX, value[1]])
            }
        }
    }
    const onDrag2 = (e: React.DragEvent<HTMLDivElement>) => {
        if (onChangeRange) {
            if (e.clientX <= 250 && e.clientX >= value[0]) {
                onChangeRange([value[0], e.clientX])
            }
        }
    }


    return (
        <>

            DoubleRange
            <div style={{width: 250}} onClick={getPointInto} className={s.slider}>
                <div onDragEnd={onDragEnd} className={s.min} style={{width: value[0]}} data-content={value[0]}>
                    <div onDrag={onDrag} className={s.minDrag}></div>
                </div>

                <div className={s.max} style={{width: value[1]}} data-content={value[1]}>
                    <div onDrag={onDrag2} className={s.maxDrag}></div>
                </div>

            </div>

        </>
    )
}

export default SuperDoubleRange
