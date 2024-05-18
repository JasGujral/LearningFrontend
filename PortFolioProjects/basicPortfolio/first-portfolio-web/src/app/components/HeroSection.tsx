"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 max-w-2xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent text4xl sm:text-6xl bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="text-3xl sm:text-5xl"
              sequence={[
                "Jasmeet",
                1000,
                "Quant",
                1000,
                "Product Manager",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-gray-500 text-base sm:text-lg lg:text-2xl mb-6">
            I'm a Quant, Product Manager, and Full Stack Developer. Expertise in
            building teams and products that solve real-world problems.
          </p>
          <div>
            <button className="bg-gradient-to-br from-yellow-500 via-red-500 to-orange-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full w-full sm:w-fit mr-4">
              Hire Me
            </button>
            <button className="mt-4 bg-gradient-to-br from-yellow-500 via-red-500 to-orange-500 px-1 py-1  text-white rounded-full w-full sm:w-fit">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_image.png"
              alt="Hero Image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
