import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        setShow(false)

        // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(Data)
            // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        // show
    }
    const onMouseLeave = () => {
        // close
    }
    let Data = new Date();
    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();
    let Seconds = Data.getSeconds();
    const stringTime = Hour + ':' + Minutes + ':' + Seconds // fix with date
    const stringDate = 'Date' // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
