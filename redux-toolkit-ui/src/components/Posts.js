import React, { useState } from 'react'
import PostItem from './PostItem'
import axios from 'axios'

const Posts = () => {
    const [posts, setPosts] = useState([])

    const getPost = async () => {
        // const res = fetch('https://jsonplaceholder.typicode.com/posts')
        // const json = res.then((response) => response.json())
        // json.then((data) => setPosts(state => data));        

        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const json = await res.json()
        // setPosts(state => json)

        const res = await axios('https://jsonplaceholder.typicode.com/todos')
        setPosts(state => res.data)


    }

    return (
        <div>
            <button
                onClick={getPost}
                type='submit'
                className='bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm'
            >
                Get posts
            </button>
            {posts.lengh || posts?.map(post => (
                <PostItem 
                key={post.id}
                post={post}/>
            ))}
            
        </div>
    )
}

export default Posts
