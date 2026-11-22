"use client";
import { RefObject, useRef } from "react";
import { Button } from "./Button";
import { IconUrl } from "@/Constants";

export function NavButtons({
  Values,
  Text = false,
  Mode = "CO",
  Filters,
}: {
  Values: string[];
  Text?: boolean;
  Mode?: "OP" | "CO";
  Filters: RefObject<string[]>;
}) {
  return (
    <div className="flex flex-wrap gap-y-5 justify-center items-center sm:gap-x-[10px] gap-x-[5px] w-full px-5">
      {Values.map((Item, index) => {
        return (
          <Button
            Text={Text ? Item : undefined}
            key={index}
            Mode={Mode}
            className={`sm:w-[100px] sm:h-[60px] w-[70px] h-[40px] transition-all ease-in capitalize`}
            On={
              Filters.current.some((filter) => {
                return filter === Item;
              })
                ? true
                : false
            }
            onClick={(e) => {
              if (
                Filters.current.some((filter) => {
                  return filter === Item;
                })
              ) {
                Filters.current = Filters.current.filter((filter) => {
                  return filter !== Item;
                });
              } else {
                Filters.current.push(Item);
              }

              if (Mode == "OP") {
                e.currentTarget.classList.toggle("opacity-50");
                e.currentTarget.classList.toggle("opacity-100");
              }
              if (Mode == "CO") {
                e.currentTarget.classList.toggle("ButtonOff");
                e.currentTarget.classList.toggle("ButtonOn");
              }
            }}
          >
            {!Text && (
              <img
                src={`${IconUrl}${Item}`}
                alt={Item}
                className="h-full w-full transition-all ease-in hover:scale-125 cursor-pointer"
              />
            )}
          </Button>
        );
      })}
    </div>
  );
}
