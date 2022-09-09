import React, { useState } from 'react'

const Form = (props) => {

    const [text, setText] = useState('New text')

    function addTextHandler(e) {
        console.log(text)
        e.preventDefault()

        props.addText(text)

        setText('')

    }

    const onChangeText = (e) => {
        setText(text => (e.target.value))
    }

    return (
        <form className='w-full flex' onSubmit={addTextHandler}>
            <input
                value={text}
                onChange={onChangeText}
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
