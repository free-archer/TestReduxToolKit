import React, { useState } from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'

function App() {

    const [texts, setText] = useState(['New text'])

    function addText(newText) {
        setText([...texts, newText])
    }

    function deleteItem(delText) {
        let a = texts.filter((text) => (text !== delText))

        setText(a)
    }

    return (
        <div className='min-h-screen h-full w-screen bg-indigo-400'>
            <div className='container mx-auto px-4'>
                <header className='flex gap-20 '>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
                        <User />
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
                        <Form addText={addText}/>

                        {texts.map ((text) => (
                            <TodoItem text={text} deleteItem={deleteItem}/>
                        ))
                        }
                        
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
                        <Posts />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default App
