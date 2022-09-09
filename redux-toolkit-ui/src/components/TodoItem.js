import React from 'react'
import { useDispatch } from 'react-redux'
import { setTextCompleted, deleteText } from '../store/store'

const TodoItem = () => {

    const dispatcher  = useDispatch()


    function CompleteHandler() {

}

function DeleteHandler() {

}

    const completed = false
    return (
        <div className='flex justify-between items-center my-2'>
            <div 
                onClick={CompleteHandler}
                className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            <div className={`text-sm ${completed ? 'line-through font-medium text-lime-400' : ''}`}>
                Todo Text
            </div>
            <div 
                onClick={DeleteHandler}
                className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem
