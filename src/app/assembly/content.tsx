"use client"
import Image from "next/image";
import TextBox from "./text";
export default function ContentImages(){
    return(
      <div className="items-center">
        <a 
        className="grid justify-items-center"
        href="https://github.com/LeeYeungYeung">
        <Image
          className=" relative self-center rounded-xl transition ease-in-out hover:-translate hover:scale-110  duration-300"
          src="/logo.svg"
          alt="Logo"
          width={70}
          height={70}
          priority
        />
        </a>
        <div className=" mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-center">
        <TextBox title={'About Me'} content={'Welcome to my website!\n '} url={"https://github.com/LeeYeungYeung"}/>
        </div>
        
        
      </div>
    );
}