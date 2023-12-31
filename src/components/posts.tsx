"use client";

import React, { useEffect, useState } from 'react';
import { PostType } from '../interface/index';
import Link from 'next/link';


const Posts: React.FC<{ data: PostType[] }> = ({ data }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    return (
        <>
            {mounted && (
                data.map(c => (
                    <div key={c.id}>
                        <Link href={`/posts/${c.id}`}>{c.title}</Link>
                    </div>
                ))
            )}
        </>
    )
}

export default Posts;