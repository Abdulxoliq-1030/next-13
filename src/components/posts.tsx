import React from 'react';
import { PostType } from '../interface/index';
import Link from 'next/link';


const Posts: React.FC<{ data: PostType[] }> = ({ data }) => {

    return (
        <>
            {
                data.map(c => (
                    <div key={c.id}>
                        <Link href={`/posts/${c.id}`}>{c.title}</Link>
                    </div>
                ))
            }
        </>
    )
}

export default Posts;