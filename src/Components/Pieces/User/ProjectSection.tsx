"use client";
import { projects, LengthDiv, Types, Languages } from "@/Constants";
import { Box, NavButtons, PagButtons } from "@/Components/Pieces";
import { useState } from "react";
import { Mobile, Web } from "@/Model/@Types";
export function ViewProjects() {
  const [LanguagesFilter, SetLanguages] = useState<string[]>(Languages);
  const [TypesFilter, SetTypes] = useState<string[]>(Types);
  const [Pagination, SetPagination] = useState<number>(0);
  const Filtered: (Mobile | Web)[] = projects.filter((Project) => {
    if (
      TypesFilter.some((filter) => {
        return filter === Project.Type;
      })
    ) {
      if (
        LanguagesFilter.some((filter) => {
          return filter === Project.Language;
        })
      )
        return Project;
    }
  });
  const LengthButtons: number = Math.ceil(Filtered.length / LengthDiv);

  function DivBoxes(i: number) {
    const Items: (Web | Mobile)[] = [];
    for (let j = 1; j <= LengthDiv; j++) {
      if (i == 0) {
        Items.push(Filtered[j - 1]);
      } else {
        if (Filtered.length >= LengthDiv * i + j) {
          Items.push(Filtered[LengthDiv * i + j - 1]);
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
      <h1 className="text-6xl mb-[20px] font-bold">Projects</h1>
      {Boxes.length - 1 === 0 ? (
        <h2 className="min-h-[470px] flex justify-center items-center text-5xl font-bold">
          Nothing found
        </h2>
      ) : (
        <div className=" w-full p-10 gap-y-[30px] pl-4 pr-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 row-auto grid justify-items-center">
          {Boxes[Pagination].map((Project, index) => {
            if (Project)
              return (
                <div
                  key={index}
                  className={`box animate-box-in ${
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
      )}
      <div className="flex flex-row justify-center items-center md:gap-x-[75px] sm:gap-x-[50px] gap-x-[10px] ">
        <NavButtons Filter={TypesFilter} Values={Types} Handler={SetTypes} />
        <NavButtons
          Filter={LanguagesFilter}
          Values={Languages}
          Handler={SetLanguages}
        />
      </div>
      <PagButtons
        Pagination={Pagination}
        Items={Boxes}
        SetPagination={SetPagination}
      />
    </section>
  );
}
