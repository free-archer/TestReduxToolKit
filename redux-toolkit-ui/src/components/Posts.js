import React, { useState } from 'react'
import PostItem from './PostItem'
import axios from 'axios'
import { Octokit } from "@octokit/core";


const Posts = () => {
    const [posts, setPosts] = useState([])

    const getPost = async () => {

        const octokit = new Octokit({
            auth: "",
          });

        //   const { data } = await octokit.request("/user");
          const issues = await octokit.request('GET /repos/free-archer/Sibedge/issues', {})
          setPosts(state => issues.data)

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
