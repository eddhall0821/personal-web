"use client";

import HeroCanvas from "@/components/3d/HeroCanvas";
import { Leva } from "leva";

const Home = () => {
  return (
    <>
      <HeroCanvas />
      {/* TODO hidden env로 관리 */}
      <Leva hidden />
    </>
  );
};

export default Home;
