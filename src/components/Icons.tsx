import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";
import { Button } from "@/components/ui/button";

const Icons = () => {
  return (
    <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 flex">
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button size={"lg"}>
          <FaGithub />
        </Button>
        <Button size={"lg"}>
          <FaLinkedin />
        </Button>
      </div>
    </div>
  );
};

export default Icons;
