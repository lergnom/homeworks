import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    clickEnterButton: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, clickEnterButton, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = name.length > 0 ? s.access : s.error // need to fix with (?:)

    return (
        <div className={s.formWrapper}>
            <div>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={clickEnterButton}/>
                <button onClick={addUser}>add</button>
            </div>
            <span>All users in base: {totalUsers} pc.</span>
            <span className={s.errorText}>{error}</span>
        </div>
    )
}

export default Greeting
