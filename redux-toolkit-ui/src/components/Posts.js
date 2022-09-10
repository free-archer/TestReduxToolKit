import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from './PostItem'
import { getPostAsync } from '../store/postsSlice'

const Posts = () => {

    const dispatcher = useDispatch()

    const getPostsHandler = () => {
        dispatcher(getPostAsync())
    }

    const posts = useSelector(store => store.posts.posts)

    return (
        <div>
            <button
            onClick={getPostsHandler}
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>

            {posts.map(post => (<PostItem key={post.id} post={post}/>))}
            
        </div>
    )
}

export default Posts
