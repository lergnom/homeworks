import React from 'react'
import s from './Message.module.css'

export type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <>

            <div className={s.message}>
                <img className={s.avatar} src={props.avatar} alt=""/>
                <div className={s.messageWrapper}>
                    <div className={s.nameBlock}>
                        {props.name}
                    </div>
                    <div className={s.messageBlock}>
                        {props.message}
                    </div>
                    <div className={s.timeBlock}>
                        {props.time}

                    </div>
                </div>

            </div>

        </>
    )
}

export default Message