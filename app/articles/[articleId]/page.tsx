"use client";

import Link from "next/link";

type Props = {
    params: Promise<{ articleId: string}>,
    searchParams: Promise<{lang?: "en" | "fr" | "es"}>
}

const articleId = async ({params, searchParams}: Props) => {
    const {articleId} = await params;
    const {lang = "en"} = await searchParams;
    return ( 
        <div className="p-5">
            <h1 className="text-3xl font-bold underline">New Article ID: {articleId}</h1>
            <p>Reading in {lang}</p>

            <div className="flex flex-col gap-4 mt-4">
                <Link href={`/articles/${articleId}?lang=${lang}`} >English</Link>
                <Link href={`/articles/${articleId}?lang=fr`} >French</Link>
                <Link href={`/articles/${articleId}?lang=es`} >Spanish</Link>
            </div>
        </div>
     );
}
 
export default articleId;