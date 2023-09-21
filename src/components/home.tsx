"use client"
import { PostType } from '@/interface';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
                setPosts(data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        getData();
    }, [])
    return (
        <>
            {isLoading ? "Loading..." : posts.map(c => (
                <div key={c.id}>
                    <Link href={`/posts/${c.id}`}>{c.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Home;