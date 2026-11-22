"use client";
import { projects, LengthDiv, FilterItems } from "@/Constants";
import { Box, NavButtons, PagButtons } from "@/Components/Pieces";
import { RefObject, useRef, useState } from "react";
import { Mobile, Web } from "@/Model/@Types";
import { Button } from "../Shared/Button";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export function ViewProjects({Query}:{Query:string[]}) {
  
  const [Filter, SetFilter] = useState<string[]>(Query);
  const [Pagination, SetPagination] = useState<number>(0);
  const Filtered: (Mobile | Web)[] =
    Filter.length > 0
      ? projects.filter((Project) => {
          if (
            Filter.some((filter) => {
              return Project.Technology.some((Technology) => {
                return Technology === filter;
              });
            })
          )
            return Project;
          if (
            Filter.some((filter) => {
              return Project.Plat.some((Plat) => {
                return Plat === filter;
              });
            })
          )
            return Project;
        })
      : projects;
  const Bg = useRef<HTMLDivElement>(null);
  const FilterOptions = useRef<HTMLDivElement>(null);
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
  for (let i = 0; i <= LengthButtons - 1; i++) {
    Boxes.push(DivBoxes(i));
  }
  const Keys = Object.keys(FilterItems);
  function OpenFilter() {
    document.body.classList.toggle("overflow-y-hidden");
    FilterOptions.current?.classList.toggle("hidden");
    FilterOptions.current?.classList.toggle("flex");
    Bg.current?.classList.toggle("hidden");
    Bg.current?.classList.toggle("block");
  }
  const Filters: RefObject<string[]> = useRef(Query);
  const Router = useRouter();
  return (
    <section className="flex flex-col items-center" id="Projects">
      <h1 className="text-6xl mb-[20px] font-bold">Projetos</h1>
      <div className="flex flex-row justify-center items-center md:gap-x-[75px] sm:gap-x-[50px] gap-x-[10px] transition-all ease-in z-10 relative">
        <Button Text={"Filtros"} className="w-50" onClick={OpenFilter} />
        <div
          ref={Bg}
          className="hidden fixed w-screen h-screen bg-gray-500 top-0 opacity-30"
        ></div>

        <div
          ref={FilterOptions}
          className={
            "fixed hidden flex-col justify-between bg-bg-light sm:right-[calc(50%-300px)] right-[calc(50%-150px)] top-[calc(50%-300px)] p-4 rounded-2xl @container sm:w-150 w-75 h-150 overflow-scroll"
          }
        >
          <IoCloseOutline
            className="sticky text-no cursor-pointer bg-transparent border-no border-2 rounded-full hover:bg-no hover:text-text-secondary @sm:min-h-10 min-h-7 @sm:min-w-10 min-w-7 top-0 left-full transition-colors ease-in"
            onClick={OpenFilter}
          />
          {Object.values(FilterItems).map((items, index) => {
            return (
              <div
                className="w-full flex flex-col justify-around border-b-2 py-5"
                key={index}
              >
                <span className="text-center font-bold w-full mb-5">
                  {Keys[index]}
                </span>
                {Keys[index] == "Types" ? (
                  <NavButtons Values={items} Text Filters={Filters} />
                ) : (
                  <NavButtons Values={items} Mode="OP" Filters={Filters} />
                )}
              </div>
            );
          })}
          <div className="flex flex-row justify-around">
            <Button
              Text="Limpar"
              className="mt-5"
              onClick={() => {
                const boxes = Array.from(document.querySelectorAll(".box"));
                boxes.forEach((Box) => {
                  Box.classList.remove("animate-box-in");
                  Box.classList.add("animate-box-out");
                });
                OpenFilter();
                setTimeout(() => {
                  boxes.forEach((Box) => {
                    Box.classList.remove("animate-box-out");
                    Box.classList.add("animate-box-in");
                  });
                  Filters.current = [];
                  SetFilter([]);
                  SetPagination(0);
                  Router.replace(`/#Projects`);
                }, 500);
              }}
            />
            <Button
              Text="Filtrar"
              className="mt-5"
              onClick={() => {
                const boxes = Array.from(document.querySelectorAll(".box"));
                boxes.forEach((Box) => {
                  Box.classList.remove("animate-box-in");
                  Box.classList.add("animate-box-out");
                });
                OpenFilter();
                setTimeout(() => {
                  boxes.forEach((Box) => {
                    Box.classList.remove("animate-box-out");
                    Box.classList.add("animate-box-in");
                  });
                  SetFilter(Filters.current);
                  SetPagination(0);
                  Router.replace(
                    `/?${Filters.current.map((filter, index) => {
                      if (index == Filters.current.length - 1)
                        return `${index}=${filter}`;
                      return `${index}=${filter}&`;
                    })}#Projects`,
                  );
                }, 500);
              }}
            />
          </div>
        </div>
      </div>
      {Boxes.length < 1 ? (
        <h2 className="min-h-[470px] flex justify-center items-center text-5xl font-bold text-text-primary">
          Nada foi encontrado
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
                  <Box Project={Project} ID={projects.indexOf(Project)} />
                </div>
              );
          })}
        </div>
      )}

      <PagButtons
        Pagination={Pagination}
        Items={Boxes}
        SetPagination={SetPagination}
      />
    </section>
  );
}
