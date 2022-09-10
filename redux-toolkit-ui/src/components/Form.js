import React, { useState } from 'react'
import { v4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { setAddText } from '../store/todoSlice'


const Form = () => {

    const [text, setText] = useState('')

    function textChange(event) {
        setText(event.target.value)
    }

    const dispatcher = useDispatch()
    
    const addTextHandler = (e) => {
        e.preventDefault()

        const todo = {
            id: v4(),
            text: text,
            completed: false
        }

        dispatcher(setAddText(todo))        
        setText((text) => (""))
    }


    return (
        <form className='w-full flex' onSubmit={addTextHandler}>
            <input
                value={text}
                onChange={textChange}
                type='text'
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form
