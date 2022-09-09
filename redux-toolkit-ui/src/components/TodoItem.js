import React from 'react'

const TodoItem = ({text, deleteItem}) => {
    const completed = false

    function complateHandler() {

    }

    // function deleteHandler() {
    //     deleteItem(text)
    // }

    return (
        <div key={text}
        className='flex justify-between items-center my-2'>
            <div onClick={complateHandler}
            className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Complete
            </div>
            <div className={`text-sm ${completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {text}
            </div>
            <div onClick={() => {deleteItem(text)}}
            className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    )
}

export default TodoItem
