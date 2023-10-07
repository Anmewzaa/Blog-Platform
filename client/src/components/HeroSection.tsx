import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[960px] my-[3rem]">
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-5xl mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              tenetur.
            </h2>
            <p className="mb-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              nam libero officia, qui at odio vitae, ullam reiciendis, deleniti
              quidem repellat fugit provident corrupti aliquid nesciunt dolorum
              ex praesentium? Magnam!
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="hero-picture"
            className="px-4"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
