import React, { useEffect, useState } from 'react'
import { PostCard, Container } from '../index'
import service from '../../appwrite/appConfig'


function AllPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(async () => {
        const myPosts = await service.getPosts();
        if(myPosts) setPosts(myPosts.documents);
    }, [])

    return (
        <div className='py-8 w-full'>
            <Container>
                <div className='flex flex-wrap'>
                {posts.map(singlePost => (
                    <div key={singlePost.$id} className='p-2 w-1/4'>
                         <PostCard $id = {singlePost.$id} title = {singlePost.title} featuredImage={singlePost.featuredImage}/>
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
