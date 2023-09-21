import axios from 'axios'
import React from 'react'

async function getDetailData(id: string) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data
}

const PostDetailPage = async ({ params }: { params: { id: string } }) => {
    const data = await getDetailData(params.id)
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}

export default PostDetailPage