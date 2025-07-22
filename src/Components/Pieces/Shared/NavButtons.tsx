"use client";
import { LinkStyle } from "@/Components/Pieces";
import { Dispatch, SetStateAction } from "react";

export function NavButtons({
  Values,
  Filter,
  Handler,
}: {
  Values: string[];
  Filter: string[];
  Handler: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <div className="flex flex-row justify-center items-center sm:gap-x-[10px] gap-x-[5px] mt-[5px]">
      {Values.map((Type, index) => {
        return (
          <LinkStyle
            Text={Type}
            Href="#Projects"
            key={index}
            ExtraCss="sm:w-[100px] sm:h-[60px] w-[70px] h-[40px]"
            On={
              Filter.some((filter) => {
                return filter === Type;
              })
                ? true
                : false
            }
            onClick={() => {
              const boxes = Array.from(document.querySelectorAll(".box"));
              boxes.forEach((Box) => {
                Box.classList.add("animate-box-out");
                Box.classList.remove("animate-box-in");
              });

              setTimeout(() => {
                boxes.forEach((Box) => Box.classList.add("animate-box-in"));
                boxes.forEach((Box) => Box.classList.remove("animate-box-out"));
                Handler(
                  Filter.some((filter) => {
                    return filter === Type;
                  })
                    ? Filter.filter((type) => type !== Type)
                    : [...Filter, Type]
                );
              }, 500);
            }}
          />
        );
      })}
    </div>
  );
}
