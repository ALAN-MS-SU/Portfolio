"use client"

import {Table} from "@/Components/Pieces";
import {UserStack} from "@/Constants";

export function Stack(){
    
    return (
        <div className={"flex xl:flex-row flex-col items-center justify-around px-2 py-10"}>
            <h1 className="xl:text-6xl text-4xl mb-[20px] xl:w-1/3 w-full font-bold text-center">Stack Principal</h1>
            <div className={"md:w-2/3 w-full xl:h-75 h-70  @container"}>
                <Table Technologies={UserStack}/>
            </div>
        </div>
    )
}