import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const About = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1 className="font-bold text-2xl">About Page</h1>
      <p>This is content for about page..</p>
      <button onClick={() => router.back()}>Back!</button>
      <Link href="/" className="text-blue-300 px-2 underline">
        Go to homepage
      </Link>
    </>
  );
};

export default About;
