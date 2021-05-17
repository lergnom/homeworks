import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const nameUser = e.currentTarget.value.trim()
        if (nameUser) {
            setName(nameUser)
            error && setError('')
        } else {
            name && setName('')
            setError('Please, add correct user name :(')
        }
    }

    const clickEnterButton = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }

    const addUser = () => {
        if (name !== '') {
            addUserCallback(name)
            alert(`Hello ${name}!`) // need to fix
            setName('')
        } else {
            setError('Please add user to input :(')
        }

    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            clickEnterButton={clickEnterButton}
        />
    )
}

export default GreetingContainer
