import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/leaderboards");
  }, [router]);

  return <></>;
};
export default Home;
