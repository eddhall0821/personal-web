"use client";

import HeroCanvas from "@/components/3d/HeroCanvas";
import Icons from "@/components/Icons";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Leva } from "leva";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="relative w-full h-screen bg-[black]">
        <HeroCanvas />
        <Icons />
      </div>
      <div className="relative w-full h-screen bg-[#121212]">
        <Icons />
      </div>
      <div className="relative w-full h-screen bg-[#454545]">
        <Icons />
      </div>

      {/* TODO hidden env로 관리 */}
      <Leva hidden />
    </>
  );
};

export default Home;
