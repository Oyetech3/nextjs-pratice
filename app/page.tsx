import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1 className="text-3xl font-bold ">Welcome to Next.js!</h1>
      <p>Link to the articles</p>
      <Link href={"/articles/breaking-new-123?lang=en"} >Read in English</Link>
      <Link href={"/articles/breaking-new-123?lang=fr"} >Read in French</Link>
    </div>
  );
}
