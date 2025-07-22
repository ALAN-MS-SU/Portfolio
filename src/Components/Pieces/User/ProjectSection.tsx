"use client";
import { projects, LengthDiv } from "@/Constants";
import { Box, LinkStyle } from "@/Components/Pieces";
import { useState } from "react";
import { Mobile, Web } from "@/Model/@Types";
export function ViewProjects() {
  const LengthButtons: number = Math.ceil(projects.length / LengthDiv);
  const [Pagination, SetPagination] = useState<number>(0);
  function DivBoxes(i: number) {
    const Items: (Web | Mobile)[] = [];
    for (let j = 1; j <= LengthDiv; j++) {
      if (i == 0) {
        Items.push(projects[j - 1]);
      } else {
        if (projects.length >= LengthDiv * i + j) {
          Items.push(projects[LengthDiv * i + j - 1]);
        }
      }
    }
    return Items;
  }
  const Boxes: (Web | Mobile)[][] = [];
  for (let i = 0; i <= LengthButtons; i++) {
    Boxes.push(DivBoxes(i));
  }
  return (
    <section className="flex flex-col items-center" id="Projects">
      <h2 className="text-6xl mb-[20px] font-bold">Projects</h2>
      <div className=" w-full p-10 gap-y-[30px] pl-4 pr-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 row-auto grid justify-items-center">
        {Boxes[Pagination].map((Project, index) => {
          if (Project)
            return (
              <div
                key={index}
                className={`box ${
                  (index + 1) % 3 === 0
                    ? "xl:col-span-1 lg:col-span-2 col-span-1"
                    : ""
                }`}
              >
                <Box Project={Project} ID={LengthDiv * Pagination + index} />
              </div>
            );
        })}
      </div>
      <div className="flex flex-row justify-center items-center gap-x-[10px] mt-[30px]">
        {Boxes.map((project, index) => {
          if (index !== Boxes.length - 1) {
            return (
              <LinkStyle
                Text={String(index + 1)}
                Href="#Projects"
                key={index}
                ExtraCss="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]"
                On={Pagination == index ? true : false}
                onClick={() => {
                  const buttons = Array.from(
                    document.querySelectorAll(".button")
                  ) as HTMLButtonElement[];
                  buttons.map((button, indexButton) => {
                    button.classList.add("ButtonOff");
                    button.classList.remove("ButtonOn");
                    if (indexButton === index) {
                      button.classList.remove("ButtonOff");
                      button.classList.add("ButtonOn");
                    }
                  });
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
    </section>
  );
}
