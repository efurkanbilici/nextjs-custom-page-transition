import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1 className="font-bold text-2xl">Homepage</h1>
      <button onClick={() => router.reload()}>Reload!</button>
      <Link href="/about" className="text-blue-300 px-2 underline">
        Go to about page
      </Link>
    </>
  );
}
