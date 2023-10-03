import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[960px] my-[1rem]">
        <img
          src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="hero-picture"
          className="px-4"
        />
        <h1 className="text-5xl text-center">
          A few word about this blog platform, Ghost, and how this site was made
        </h1>
      </div>
    </>
  );
};

export default HeroSection;
