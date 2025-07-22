"use client";

import { LinkStyle } from "@/Components/Pieces";
import { Mobile, Web } from "@/Model/@Types";
import { Dispatch, SetStateAction } from "react";

export function PagButtons({
  Items,
  Pagination,
  SetPagination,
}: {
  Items: (Web | Mobile)[][];
  Pagination: number;
  SetPagination: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex flex-row justify-center items-center gap-x-[10px] mt-[10px]">
      {Items.map((project, index) => {
        if (index !== Items.length - 1) {
          return (
            <LinkStyle
              Text={String(index + 1)}
              Href="#Projects"
              key={index}
              ExtraCss="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
              On={Pagination == index ? true : false}
              onClick={() => {
                const boxes = Array.from(document.querySelectorAll(".box"));
                boxes.forEach((Box) => {
                  Box.classList.add("animate-box-out");
                  Box.classList.remove("animate-box-in");
                });

                setTimeout(() => {
                  boxes.forEach((Box) => Box.classList.add("animate-box-in"));
                  boxes.forEach((Box) =>
                    Box.classList.remove("animate-box-out")
                  );
                  SetPagination(index);
                }, 500);
              }}
            />
          );
        }
      })}
    </div>
  );
}
