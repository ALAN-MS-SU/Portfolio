"use client"
import {IconUrl} from "@/Constants";
export function Table({Technologies}: {Technologies:string[]}) {
    let Cols=0;
    const Table: string[][]=[];
    function GetCols():number{
       
       let Max:number = 1;
       for(let i= 5; i >= 2 ;i--){
           const Rest = Technologies.length % i
           if(Rest == 0){
               return i;
           }
           if(Rest > Max){
               Max = i;
           }
       }
       return Max;
       
    }
   
    Cols = GetCols();
    
    for (let i = 1; i <= Math.ceil(Technologies.length/Cols); i++) {
        Table.push([...Technologies.slice((Cols*(i-1)),(Cols*i))])
    }
    return <>
        <table
             className={"w-full bg-bg-light h-full rounded-2xl overflow-hidden"}
        >
            <tbody className={"overflow-hidden"}>
            {Table.map((Row, index) => {
                return <tr  className={`${index+1 == Table.length ?"":"border-b-1 border-solid border-text-primary"}`} key={index}>
                    {
                        Row.map((Col,index)=>{
                            return (
                                <td key={index} align={"center"}><
                                    img
                                    src={`${IconUrl}${Col}`}
                                    alt={"Icon"}
                                    className="@lg:w-15 @lg:h-15 @md:w-13 @md:h-13 @sm:w-10 @sm:h-10 w-8 h-8 transition-all ease-in hover:scale-125 cursor-pointer"
                                    
                                />
                                </td>
                            );
                        })
                    }
                </tr>
                
            })}
        </tbody>
        </table>

    </>
} 