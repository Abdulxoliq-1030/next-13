import { PostType } from "@/interface";
import axios from "axios";
import Link from "next/link";
import { notFound } from "next/navigation"

async function getData() {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    return data;
}

interface PageProps { }

const Page: React.FC<PageProps> = async () => {
    const data: PostType[] = await getData();

    if (!data?.length) {
        notFound();
    }

    return (
        <>
            {data.map(c => (
                <div key={c.id}>
                    <Link href={`/posts/${c.id}`}>{c.title}</Link>
                </div>
            ))}
        </>
    )
}

export default Page;