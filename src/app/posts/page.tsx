import Posts from "@/components/posts";
import { PostType } from "@/interface";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation"
// const Posts = dynamic(() => import("@/components/posts"), {
//     ssr: false
// })

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

    return <Posts data={data} />
}

export default Page;