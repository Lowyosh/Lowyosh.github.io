"use client";
import { cn } from "../../utils/cn";

import '../ui/CardBentofinal.css'

export function CardBentofinal() {
  return (
    <div className="w-full max-w-xl cursor-pointer">
      <div
        className={cn(
          "bento group w-full overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",
          "bg-cover",
          // Preload hover image by setting it in a pseudo-element
          // "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] ",
          // "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Bento Library
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
          A React based library with some reusable components for you to use in your proyects. JSX and SCSS 
          </p>
        </div>
      </div>
    </div>
  );
}
