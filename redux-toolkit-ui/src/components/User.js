import React, { useState } from 'react'
import FirstName from './FirstName'
import LastName from './LastName'

const User = () => {

    const [firstName, setFirstName] = useState('Vova')
    const [lastName, setLastName] = useState('')

    function setFirstNameOnChange(event) {
        setFirstName(event.target.value)
    }
    // const setLastNameOnChange = (event) => {
    //     setLastName(event.target.value)
    // }

    return (
        <div className='flex flex-col'>
            <input
                onChange={setFirstNameOnChange} 
                value={firstName}
                type='text'
                placeholder='First Name'
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <input
                onChange={(event) => {setLastName(event.target.value)}} 
                value={lastName}
                type='text'
                placeholder='Second Name'
                className='w-full p-1 mb-2 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <div className='flex gap-20 py-5'>
                <div className='flex flex-col'>
                    <div className='flex font-light'>First Name:</div>
                    <div className='flex'>
                        <FirstName name={firstName}/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex font-light'>Last Name:</div>
                    <div className='flex'>
                        <LastName name={lastName}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
