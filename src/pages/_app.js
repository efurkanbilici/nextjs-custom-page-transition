import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [routerStarted, setRouterStarted] = useState(false);
  const [routingPercentage, setRoutingPercentage] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log(`${routingPercentage}%`);
  }, [routingPercentage]);

  useEffect(() => {
    const handleStart = () => {
      setRouterStarted(true);
      setRoutingPercentage(10);
      console.log("route change started..");
    };
    const handleComplete = () => {
      setRoutingPercentage(100);
      console.log("route changed.");

      setTimeout(() => {
        setRouterStarted(false);
      }, 500);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router.events]);

  return (
    <div className="p-4 bg-slate-900 text-gray-100 h-screen">
      <div
        className={`fixed top-0 left-0 h-1 bg-blue-500 transition-all ease-in-out`}
        style={{
          width: routingPercentage + "%",
          opacity: routerStarted ? "100%" : "0",
        }}
      />
      <div className="border border-gray-400 container mx-auto rounded p-2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
