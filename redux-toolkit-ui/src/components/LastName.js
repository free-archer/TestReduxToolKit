import React from 'react'
import { useSelector } from 'react-redux'

const LastName = () => {

    const getName = (state) => {
        return state.user.lastName
    }
    const name = useSelector(getName)

    return <div className='font-bold'>{name}</div>
}

export default LastName
